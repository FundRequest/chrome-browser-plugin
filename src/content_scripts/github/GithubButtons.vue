<template>
    <span>
        <button v-if="isClaimable" class="btn btn-sm btn-danger" @click="claim()">
            Claim
        </button>
        <button class="btn btn-sm btn-blue" @click="fund()">
            Fund
        </button>
    </span>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import BrowserPlugin from "../../classes/BrowserPlugin";
    import Github, {RequestFundInfo} from "./Github";
    import {Claimable} from "../../classes/Claimable";
    import Settings from "../../classes/Settings";
    import iziToast from "izitoast";

    @Component
    export default class GithubButtons extends Vue {
        @Prop() issueId: string;

        public requestFundInfo: RequestFundInfo = null;
        public claimableProperties: Claimable = null;
        public isClaimable: boolean = false;
        public isClaimableByCurrentUser: boolean = false;
        public url: string = null;
        public username: string = null;

        mounted() {
            this.init();
        }

        private async init() {
            this.username = Github.getUserLoginName();
            this.url = Github.getCurrentIssueUrl();
            this.claimableProperties = await Settings.getClaimableProperties(this.url);

            if (this.claimableProperties) {
                this.isClaimable = this.claimableProperties.claimable;
                this.isClaimableByCurrentUser = this.claimableProperties.claimableByPlatformUser.toLowerCase() == Github.getUserLoginName().toLowerCase();
            }
        }

        public fund() {
            BrowserPlugin.fund(this.url);
        }

        public async claim() {
            if(this.claimableProperties.claimableByPlatformUser.toLowerCase() == Github.getUserLoginName().toLowerCase()) {
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