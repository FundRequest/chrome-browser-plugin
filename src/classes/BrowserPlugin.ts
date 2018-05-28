//import iziToast from 'iziToast';

declare let chrome: any;

export default class BrowserPlugin {

    public static get(key): Promise<any> {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.get(key, (items) => {
                resolve(items[key]);
            });
        })
    }

    public static fund(url) {
        chrome.extension.sendMessage({
            action: 'fund',
            url: url
        }, response => {
            if (response.done) {
                if (response.success) {
                    console.log('funded', response.message);
                    //iziToast.success({
                    //    title: 'Funded!',
                    //    message: response.message
                    //});
                } else {
                    console.log('Not Funded :(', 'Something went wrong.');
                    //iziToast.warning({
                    //    title: 'Not Funded :(',
                    //    message: 'Something went wrong.'
                    //});
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