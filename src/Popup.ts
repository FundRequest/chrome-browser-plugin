import Vue from "vue";
import ExtensionOptions from "./classes/ExtensionOptions.vue"

export class Options {
    constructor() {

        let v = new Vue({
            el: '#vue-main',
            data: {},
            components: {
                'extension-options': ExtensionOptions,
            }
        });

    }
}

new Options();

/*import * as moment from 'moment';
import * as $ from 'jquery';

let count = 0;

$(function () {
    const queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, function (tabs) {
        $('#url').text(tabs[0].url);
        $('#time').text(moment().format('YYYY-MM-DD HH:mm:ss'));
    });

    chrome.browserAction.setBadgeText({text: count.toString()});
    $('#countUp').on('click', () => {
        chrome.browserAction.setBadgeText({text: (++count).toString()});
    });
});
*/