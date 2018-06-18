import Vue from "vue";
import VueExtensionOptions from "./ExtensionOptions.vue"

export class ExtensionOptions {
    private vueOptions: Vue;

    constructor() {
        this.vueOptions = new Vue({
            el: '#vue-main',
            data: {},
            components: {
                'extension-options': VueExtensionOptions,
            }
        });
    }
}