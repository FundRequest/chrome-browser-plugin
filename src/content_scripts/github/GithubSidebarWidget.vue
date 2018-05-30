<template>
    <div>
        <div class="discussion-sidebar-heading text-bold">FundRequest</div>
        <div>
            <span>Total Funding - </span>
            <span class="label label-color label-blue">
                <i v-if="requestFundInfo == null" class="fnd-loader fnd-loader--small"></i>
                <span v-if="requestFundInfo != null">{{requestFundInfo.totalFunding}} FND</span>
            </span>
        </div>
        <div>
            <span># Funders - </span>
            <i v-if="requestFundInfo == null" class="fnd-loader fnd-loader--small"></i>
            <span v-if="requestFundInfo != null">{{requestFundInfo.totalFunders}}</span>
        </div>
        <div v-if="yourAddress != null && requestFundInfo != null">
            <span>Your funding - </span>
            <span>{{requestFundInfo.yourFunding}} FND</span>
        </div>
        <div v-if="yourAddress == null">
            Your funding -
            <a href @click="openOptions()">add your ethereum address</a>
        </div>
    </div>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Github, {RequestFundInfo} from "./Github";
    import Settings from "../../classes/Settings";
    import BrowserPlugin from "../../classes/BrowserPlugin";

    @Component
    export default class GithubSidebarWidget extends Vue {
        @Prop() issueId: string;
        public yourAddress: string = null;
        public requestFundInfo: RequestFundInfo = null;

        mounted() {
            this.init();
        }

        private async init() {
            this.yourAddress = await Settings.getEthAddress();
            this.requestFundInfo = await Github.getRequestFundInfo(this.issueId);
        }

        public openOptions() {
            BrowserPlugin.openOptions();
        }

    }
</script>
<style>
    .discussion-sidebar-item--fnd {
        display: block;
    }

    .fnd-loader {
        position: relative;
        display: inline-block;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        border-width: 1px;
        border-style: solid;
        border-color: #000000 transparent #000000 transparent;
        -webkit-animation: lds-dual-ring 1s linear infinite;
        animation: lds-dual-ring 1s linear infinite;
    }

    .label-color .fnd-loader {
        border-color: #ffffff transparent #ffffff transparent;
    }

    .label-blue {
        color: rgb(255, 255, 255);
        background-color: rgb(29, 118, 219);
    }

    @keyframes lds-dual-ring {
        0% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes lds-dual-ring {
        0% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
</style>