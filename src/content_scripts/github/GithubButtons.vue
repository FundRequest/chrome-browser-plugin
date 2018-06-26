<template>
    <span>
        <button v-if="isClaimable" class="btn btn-sm btn-danger" @click="claim()">
            Claim
        </button>
        <button v-if="!isClaimed" class="btn btn-sm btn-blue" @click="fund()">
            Fund
        </button>
        <button v-if="isClaimed" class="btn btn-sm btn-blue" disabled="disabled">
            Fund
        </button>
    </span>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import iziToast from "izitoast";
    import BrowserPlugin from "../../classes/BrowserPlugin";
    import Github from "./Github";
    import GithubRequest from "../../classes/platforms/GithubRequest";

    @Component
    export default class GithubButtons extends Vue {
        @Prop() githubRequest: GithubRequest;

        public isClaimed: boolean = true;
        public isClaimable: boolean = false;
        public isClaimableByCurrentUser: boolean = false;
        public url: string = null;
        public username: string = null;

        mounted() {
            this.init();
        }

        private async init() {
            this.isClaimed = await this.githubRequest.isClaimed();
            if (!this.isClaimed) {
                this.username = Github.getUserLoginName();
                this.url = Github.getCurrentIssueUrl();

                this.isClaimable = await this.githubRequest.isClaimable();
                if (this.isClaimable) {
                    this.isClaimableByCurrentUser = (await this.githubRequest.getPlatformUserThatCanClaim()).toLowerCase() == Github.getUserLoginName().toLowerCase();
                }
            }
        }

        public fund() {
            BrowserPlugin.fund(this.url);
        }

        public async claim() {
            if (this.isClaimableByCurrentUser) {
                BrowserPlugin.claim(this.url);
            } else {
                iziToast.warning({
                    message: 'You are not the solver of this issue.'
                });
            }
        }
    }
</script>
<style>
    .btn-sm.btn-cancel {
        margin-right: 5px;
    }
</style>