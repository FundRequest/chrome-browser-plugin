import Settings from "./classes/Settings";
import BrowserPlugin from "./classes/BrowserPlugin";

declare let chrome: any;

export class Background {

    public generateUUID() { // Public Domain/MIT
        let d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    constructor() {
        this.init();
    }

    private async init() {
        BrowserPlugin.addOnMessageListener((request, sender, sendResponse) => {
            let id = this.generateUUID();
            let currentTabId = sender.tab.id;

            switch (request.action) {
                case 'load':
                    chrome.pageAction.show(sender.tab.id);
                    sendResponse();
                    break;
                case 'openOptions':
                    if (chrome.runtime.openOptionsPage) {
                        chrome.runtime.openOptionsPage(response => {
                            console.log('options page response', response);
                        });
                    } else {
                        chrome.tabs.create({url: Settings.getOptionsUrl()}, tab => {
                            chrome.tabs.sendMessage(tab.id, {id: id}, response => {
                                response.needsReload = true;
                                sendResponse(response);
                            });
                        });
                    }
                    break;
                case 'claim':
                    this.openClaimTab(currentTabId, id, request, sendResponse);
                    break;
                case 'fund':
                    this.openFundTab(currentTabId, id, request, sendResponse);
                    break;
                default:
                    sendResponse();
                    break;
            }
            return true;
        });
    }

    private async openClaimTab(currentTabId, id, request, sendResponse) {
        let url = await Settings.getClaimUrl(request.url);
        this.openTabAndExecuteFundrequestScript(url, currentTabId, id, sendResponse);
    }

    private async openFundTab(currentTabId, id, request, sendResponse) {
        let url = await Settings.getFundUrl(request.url);
        this.openTabAndExecuteFundrequestScript(url, currentTabId, id, sendResponse);
    }

    private openTabAndExecuteFundrequestScript(url, currentTabId, id, sendResponse) {
        /***
         * - Create a new tab
         * -- Inject script to page
         * -- Send message to new tab
         * - When succeeded, close tab, add notification, reload current tab plugin items
         * - When fails, close tab and add notification
         */
        chrome.tabs.create({url: url}, tab => {
            chrome.tabs.executeScript(tab.id, {file: 'js/fundrequest.js'}, () => {
                chrome.tabs.sendMessage(tab.id, {id: id}, response => {
                    response = typeof response !== 'undefined' ? response : {};
                    if (response.id === id) {
                        if (chrome.runtime.lastError) {
                            response.done = false;
                            response.message = chrome.runtime.lastError;
                        } else {
                            response.done = true;
                        }
                        chrome.tabs.remove([tab.id]);
                        chrome.tabs.update(currentTabId, {'active': true, 'highlighted': true});

                        sendResponse(response);
                    }
                });
            });
        });
    }
}

new Background();