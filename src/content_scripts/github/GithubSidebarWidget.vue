<template>
    <div>
        <div class="discussion-sidebar-heading text-bold">FundRequest</div>
        <div>
            <span>Total Funding - </span>
            <span class="label label-color label-blue">
                <i v-if="totalFunding == null" class="fnd-loader fnd-loader--small"></i>
                <span v-if="totalFunding != null">{{totalFunding}} FND</span>
            </span>
        </div>
        <div>
            <span># Funders - </span>
            <i v-if="totalFunders == null" class="fnd-loader fnd-loader--small"></i>
            <span v-if="totalFunders != null">{{totalFunders}}</span>
        </div>
        <div v-if="yourFunding != null">
            <span>Your funding - </span>
            <i v-if="yourFunding == null" class="fnd-loader fnd-loader--small"></i>
            <span v-if="yourFunding != null">{{yourFunding}} FND</span>
        </div>
    </div>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Utils from "../../classes/Utils";
    import Settings from "../../models/Settings";
    import Github from "./Github";

    @Component
    export default class GithubSidebarWidget extends Vue {
        @Prop() settings: Settings;
        @Prop() issueId: string;
        public totalFunding: string = null;
        public totalFunders: string = null;
        public yourFunding: string = null;

        mounted() {
            this.init();
        }

        private async init() {
            let result = await Github.getInstance().getRequestFundInfo(this.issueId);
            this.totalFunders = result[0].toString();
            this.totalFunding = Utils.weiToString(result[1]);
            this.yourFunding = Utils.weiToString(result[2]);
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