<template>
    <span class="goi-funds" v-if="isVisible">
        <span class="goi-funds-icon goi-funds-icon--separator" v-html="icon"></span>
        <span class="goi-funds-icon goi-funds-icon--fnd" v-html="iconFnd"></span>
        Total Funding: ~${{requestDetails.funds.usdFunds | toUsd}}
    </span>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import RequestDetails from "../../classes/models/RequestDetails";
    import ToCrypto from "../../filters/formatters/ToCrypto";
    import ToUsd from "../../filters/formatters/ToUsd";
    import SVGs from "../../classes/SVGs";
    import GithubRequest from "../../classes/platforms/GithubRequest";

    @Component({
        filters: {
            toCrypto: ToCrypto.filter,
            toUsd: ToUsd.filter
        }
    })
    export default class GithubOverviewItemFunds extends Vue {
        @Prop() platformId: string;
        public request: GithubRequest = null;
        public requestDetails: RequestDetails = null;
        public icon: string = SVGs.separator;
        public iconFnd: string = SVGs.fnd;
        public isVisible: boolean = false;

        mounted() {
            this.request = new GithubRequest(this.platformId);
            this.init();
        }

        private async init() {
            this.requestDetails = await this.request.getDetails();
            if (this.requestDetails != null) {
                this.isVisible = true;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .goi-funds {
        margin-left: -10px;
        margin-right: 10px;
    }

    .goi-funds-icon {
        display: inline-block;
        vertical-align: bottom;
    }

    .goi-funds-icon--fnd {
        width: 12px;
        height: 12px;
        margin: 2px 0;
    }

    .goi-funds-icon--separator {
        width: 16px;
        height: 16px;
        opacity: .4;
    }
</style>