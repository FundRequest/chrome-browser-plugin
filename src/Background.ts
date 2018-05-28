import Settings from "./models/Settings";
import BrowserPlugin from "./classes/BrowserPlugin";

declare let chrome: any;

export class Background {
//let store = new Store('settings');
    public settings: Settings = {
        accountAddress: '', //store.get('fndAccountAddress'),
        tokenContractAddress: '0x23b98d4ff90a169d88bfab8b8829f0b0c0e3bce0',
        fundRequestContractAddress: '0xc1b66749fe5e2a15034b882da9e690490d5a1336',
        providerApi: 'https://kovan.fundrequest.io',
        fundUrlPrefix: 'http://localhost:8080/fund/github?url=',
        claimUrlPrefix: 'http://localhost:8080/requests?url=',
        optionsUrl: chrome.runtime.getURL("options.html"),
    };

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
        this.settings.accountAddress = await BrowserPlugin.get('ethAddress');
        BrowserPlugin.addOnMessageListener((request, sender, sendResponse) => {
            let id = this.generateUUID();
            let currentTabId = sender.tab.id;

            switch (request.action) {
                case 'load':
                    chrome.pageAction.show(sender.tab.id);
                    sendResponse(this.settings);
                    break;
                case 'openOptions':
                    chrome.tabs.create({url: this.settings.optionsUrl}, tab => {
                        chrome.tabs.sendMessage(tab.id, {id: id}, response => {
                        });
                    });
                    break;
                case 'claim':
                    this.openClaimTab(currentTabId, id, request, sendResponse);
                case 'fund':
                    /***
                     * - Create a new tab with funding page
                     * -- Inject script to funding page
                     * -- Send message to new tab
                     * - When funding succeeded, close tab, add notification, reload funded button
                     * - When funding fails, close tab and add notification
                     */
                    this.openFundTab(currentTabId, id, request, sendResponse);

            }
            return true;
        });
    }

    private openClaimTab(currentTabId, id, request, sendResponse) {
        chrome.tabs.create({url: this.settings.claimUrlPrefix + encodeURI(request.url)}, tab => {
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

    private openFundTab(currentTabId, id, request, sendResponse) {
        chrome.tabs.create({url: this.settings.fundUrlPrefix + encodeURI(request.url)}, tab => {
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