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