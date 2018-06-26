<template>
    <div>
        <div class="discussion-sidebar-heading text-bold">
            FundRequest

            <span v-if="!isLoading && isExistingIssue"
                  class="label label-color float-right" :class="`label-${statusClass}`">{{requestDetails.status}}</span>


            <div v-if="!isLoading && !isExistingIssue">
                <span class="label label-color label-blue">0 FND</span>
                funded
            </div>
        </div>

        <i v-if="isLoading" class="fnd-loader fnd-loader--small"></i>

        <div v-if="!isLoading">
            <div v-if="isExistingIssue && isClaimed">
                <div class="mb-1">
                    <div class="clearfix">
                        <span>Claimed amount</span>
                        <span class="label label-color label-blue float-right">
                        ~$ {{requestDetails.funds.usdFunds | toUsd}}
                    </span>
                    </div>
                    <div class="text-light pl-2 text-right">
                        <div>
                            {{requestDetails.funds.fndFunds.totalAmount | toCrypto}}
                            {{requestDetails.funds.fndFunds.tokenSymbol}}
                        </div>
                        <div v-for="fund in requestDetails.funds.otherFunds">
                            {{fund.totalAmount | toCrypto}} {{fund.tokenSymbol}}
                        </div>
                    </div>
                </div>
            </div>


            <div v-if="isExistingIssue && !isClaimed">
                <div class="mb-1">
                    <div class="clearfix">
                        <span>{{totalFunders}} Funder{{totalFunders > 1 ? 's' : ''}} </span>
                        <span class="label label-color label-blue float-right">
                        ~$ {{requestDetails.funds.usdFunds | toUsd}}
                    </span>
                    </div>
                    <div class="text-light pl-2 text-right">
                        <div>
                            {{requestDetails.funds.fndFunds.totalAmount | toCrypto}}
                            {{requestDetails.funds.fndFunds.tokenSymbol}}
                        </div>
                        <div v-for="fund in requestDetails.funds.otherFunds">
                            {{fund.totalAmount | toCrypto}} {{fund.tokenSymbol}}
                        </div>
                    </div>
                </div>
                <div v-if="yourAddress != null && funding.length > 0" class="mb-1 clearfix">
                    <span class="float-left">Your funding </span>
                    <div class="float-right text-right">
                        <div v-for="fund in funding">{{fund.totalAmount | toCrypto}} {{fund.tokenSymbol}}</div>
                    </div>
                </div>
                <div v-if="yourAddress == null">
                    Your funding -
                    <a href @click="openOptions()">add your ethereum address</a>
                </div>
            </div>
        </div>
    </div>

</template>
<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Settings from "../../classes/Settings";
    import BrowserPlugin from "../../classes/BrowserPlugin";
    import RequestDetails from "../../classes/models/RequestDetails";
    import ToUsd from "../../filters/formatters/ToUsd";
    import ToCrypto from "../../filters/formatters/ToCrypto";
    import RequestFund from "../../classes/models/RequestFund";
    import GithubRequest from "../../classes/platforms/GithubRequest";

    @Component({
        filters: {
            toCrypto: ToCrypto.filter,
            toUsd: ToUsd.filter
        }
    })
    export default class GithubSidebarWidget extends Vue {
        @Prop() githubRequest: GithubRequest;
        public yourAddress: string = null;
        public funding: RequestFund[] = [];
        public requestDetails: RequestDetails = null;
        public totalFunders: number = 0;
        public isLoading: boolean = true;
        public isClaimed: boolean = true;
        public isExistingIssue: boolean = false;

        mounted() {
            this.init();
        }

        public get statusClass() {
            let className = this.requestDetails.status.toLowerCase();
            return className.replace(/\s/g, '-');
        }

        public openOptions() {
            BrowserPlugin.openOptions();
        }

        private async init() {
            this.isClaimed = await this.githubRequest.isClaimed();

            if (this.isClaimed) {
                await this._initClaimedIssue();
            } else {
                await this._initFundedIssue();
            }

            this.isLoading = false;
        }

        private async _initClaimedIssue() {
            this.requestDetails = await this.githubRequest.getDetails();
            this.isExistingIssue = true;
        }

        private async _initFundedIssue() {
            this.yourAddress = await Settings.getEthAddress();
            this.requestDetails = await this.githubRequest.getDetails();
            if (this.requestDetails && this.requestDetails.id != null && this.requestDetails.id > 0) {
                this.funding = await this.githubRequest.getYourFunding();
                this.totalFunders = await this.githubRequest.getTotalFunders();
                this.isExistingIssue = true;
            }
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
        color: #ffffff;
        background-color: #1D76DB;
    }

    .label-funded {
        color: #ffffff;
        background-color: #ffdc65;
    }

    .label-claimed {
        color: #ffffff;
        background-color: #49b2e1;
    }

    .label-claim-requested,
    .label-claimable {
        color: #ffffff;
        background-color: #44cc11;
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