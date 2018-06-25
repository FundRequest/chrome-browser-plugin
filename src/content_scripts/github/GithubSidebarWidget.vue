<template>
    <div>
        <div class="discussion-sidebar-heading text-bold">
            FundRequest

            <span v-if="!isLoading && isExistingIssue"
                  class="label label-color float-right" :class="`label-${request.status.toLowerCase()}`">{{request.status}}</span>
        </div>

        <i v-if="isLoading" class="fnd-loader fnd-loader--small"></i>

        <div v-if="!isLoading">
            <div v-if="isClaimed && isExistingIssue">
                <div class="mb-1">
                    <div class="clearfix">
                        <span>Claimed amount</span>
                        <span class="label label-color label-blue float-right">
                        ~$ {{request.funds.usdFunds | toUsd}}
                    </span>
                    </div>
                    <div class="text-light pl-2 text-right">
                        <div>
                            {{request.funds.fndFunds.totalAmount | toCrypto}} {{request.funds.fndFunds.tokenSymbol}}
                        </div>
                        <div v-for="fund in request.funds.otherFunds">
                            {{fund.totalAmount | toCrypto}} {{fund.tokenSymbol}}
                        </div>
                    </div>
                </div>
            </div>


            <div v-if="!isClaimed && isExistingIssue">
                <div class="mb-1">
                    <div class="clearfix">
                        <span>{{totalFunders}} Funder{{totalFunders > 1 ? 's' : ''}} </span>
                        <span class="label label-color label-blue float-right">
                        ~$ {{request.funds.usdFunds | toUsd}}
                    </span>
                    </div>
                    <div class="text-light pl-2 text-right">
                        <div>
                            {{request.funds.fndFunds.totalAmount | toCrypto}} {{request.funds.fndFunds.tokenSymbol}}
                        </div>
                        <div v-for="fund in request.funds.otherFunds">
                            {{fund.totalAmount | toCrypto}} {{fund.tokenSymbol}}
                        </div>
                    </div>
                </div>
                <div v-if="yourAddress != null && yourFunding.length > 0" class="mb-1 clearfix">
                    <span class="float-left">Your funding </span>
                    <div class="float-right text-right">
                        <div v-for="fund in yourFunding">{{fund.totalAmount | toCrypto}} {{fund.tokenSymbol}}</div>
                    </div>
                </div>
                <div v-if="yourAddress == null">
                    Your funding -
                    <a href @click="openOptions()">add your ethereum address</a>
                </div>
            </div>

            <div v-if="!isExistingIssue">
                <div>
                    <span class="label label-color label-blue">0 FND</span>
                    funded
                </div>

            </div>
        </div>
    </div>

</template>
<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Github from "./Github";
    import Settings from "../../classes/Settings";
    import BrowserPlugin from "../../classes/BrowserPlugin";
    import RequestDetails from "../../classes/models/RequestDetails";
    import ToUsd from "../../filters/formatters/ToUsd";
    import ToCrypto from "../../filters/formatters/ToCrypto";
    import RequestFund from "../../classes/models/RequestFund";
    import RequestFunds from "../../classes/models/RequestFunds";

    @Component({
        filters: {
            toCrypto: ToCrypto.filter,
            toUsd: ToUsd.filter
        }
    })
    export default class GithubSidebarWidget extends Vue {
        @Prop() issueId: string;
        public yourAddress: string = null;
        public fundingMap: Map<string, number>;
        public funding: RequestFund[] = [];
        public request: RequestDetails = null;
        public totalFunders: number = 0;
        public isLoading: boolean = false;
        public isClaimed: boolean = true;
        public isExistingIssue: boolean = false;

        mounted() {
            this.init();
        }

        private async init() {
            this.isClaimed = await Github.isClaimed(this.issueId);

            if (this.isClaimed) {
                await this._initClaimedIssue();
            } else {
                await this._initFundedIssue();
            }
        }

        private async _initClaimedIssue() {
            let url = Github.getCurrentIssueUrl();
            this.request = await Settings.getRequestDetails(url);
            this.isExistingIssue = true;

            /* not needed since values availabe from api
                this.fundingMap = await Github.getClaimedFunding(this.issueId);
                this.fundingMap.forEach((amount: number, address: string) => {
                    let funding: RequestFund = RequestFunds.getFundsByAddress(this.request.funds, address);
                    funding.totalAmount = amount;
                    this.funding.push(funding);
                });
            */

            this.isLoading = false;
        }

        private async _initFundedIssue() {
            this.yourAddress = await Settings.getEthAddress();
            this.fundingMap = await Github.getYourFunding(this.issueId);
            this.isExistingIssue = this.fundingMap.size > 0;

            if (this.isExistingIssue) {
                let url = Github.getCurrentIssueUrl();
                this.request = await Settings.getRequestDetails(url);

                if (this.request.id == null || this.request.id <= 0) {
                    this.isExistingIssue = false;
                } else {
                    this.fundingMap.forEach((amount: number, address: string) => {
                        let funding: RequestFund = RequestFunds.getFundsByAddress(this.request.funds, address);
                        funding.totalAmount = amount;
                        this.funding.push(funding);
                    });
                    this.totalFunders = await Github.totalFunders(this.issueId);
                }

            }

            this.isLoading = false;
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