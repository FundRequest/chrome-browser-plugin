declare let swal: any;

export class FundRequest {
    /***
     * This script will
     * Receive message from bg/script.js
     */
    constructor() {
        chrome.runtime.onMessage.addListener(
            function (message, sender, sendResponse) {
                document.dispatchEvent(new CustomEvent('browserplugin.from.extension.fnd.opened'));

                // event send from app when tab is closed after funding
                document.addEventListener('browserplugin.to.extension.fnd.FUND_SUCCESS', (event: any) => {
                    swal({
                        title: 'Funded!',
                        text: 'Funds have been committed, once the transaction is confirmed they are transferred to the request.',
                        type: 'success',
                        showCancelButton: true,
                        confirmButtonText: 'Back to github',
                        cancelButtonText: 'Show your requests',
                    }).then(result => {
                        if (result.value) {
                            sendResponse({id: message.id, success: true, message: event.detail.body});
                        } else {
                            window.location.href = event.detail.redirectLocation;
                        }
                    });
                });
                // event send from app when tab is closed after funding
                document.addEventListener('browserplugin.to.extension.fnd.FUND_FAILED', (event: any) => {
                    sendResponse({id: message.id, success: false, message: event.detail.body});
                });
                // // check if page is loaded
                return true;
            }
        );
    }
}

new FundRequest();