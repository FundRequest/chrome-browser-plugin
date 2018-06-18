import iziToast from "izitoast";
import Settings from "./Settings";

declare let chrome: any;

export default class BrowserPlugin {

    public static get(key, defaultValue = null): Promise<any> {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.get(key, (items) => {
                if (items[key]) {
                    resolve(items[key])
                } else {
                    resolve(defaultValue);
                }
            });
        });
    }

    public static set(key, value): Promise<any> {
        return new Promise((resolve, reject) => {
            let items = [];
            key[key] = value;
            chrome.storage.sync.set(items, (items) => {
                resolve(items);
            });
        });
    }

    public static setMultiple(items): Promise<any> {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.set(items, (items) => {
                resolve(items)
            });
        });
    }

    public static getURL(filename: string) {
        return chrome.runtime.getURL("options.html");
    }

    public static fund(url) {
        chrome.extension.sendMessage({
            action: 'fund',
            url: url
        }, response => {
            if (response.done) {
                if (response.success) {
                    if (response.message && response.message.length > 0) {
                        Settings.getTransactionUrl(response.message).then((url) => {
                            iziToast.success({
                                title: 'Funded!',
                                message: `<a href="${url}" target="_blank">Check the transaction here: ${response.message.substr(0, 15)}...</a>`
                            });
                        });
                    }
                } else {
                    iziToast.warning({
                        title: 'Not Funded :(',
                        message: 'Something went wrong.'
                    });
                }
            }
        });
    }

    public static openOptions() {
        chrome.extension.sendMessage({
            action: 'openOptions',
        }, response => {
            if (response.done) {
                if (response.needsReload) {
                    location.reload();
                }
            }
        });
    }

    public static claim(url) {
        chrome.extension.sendMessage({
            action: 'claim',
            url: url
        }, response => {
            if (response.done) {
                if (response.success) {
                    console.log('cliamed', response.message);
                } else {
                    console.log('Not Claimed :(', 'Something went wrong.');
                }
            }
        });
    }

    public static load(callback) {
        chrome.extension.sendMessage({action: 'load'}, callback);
    }

    public static addOnMessageListener(callback) {
        chrome.extension.onMessage.addListener(callback);
    }
}