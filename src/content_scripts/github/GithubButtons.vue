<template>
    <span>
        <button v-if="requestFundInfo != null && requestFundInfo.totalFunders > 0" class="btn btn-sm btn-danger" @click="claim()">
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

    @Component
    export default class GithubButtons extends Vue {
        @Prop() issueId: string;

        public requestFundInfo: RequestFundInfo = null;
        public url: string = null;

        mounted() {
            this.init();
        }

        private async init() {
            this.url = Github.getCurrentIssueUrl();
            this.requestFundInfo = await Github.getRequestFundInfo(this.issueId);
        }

        public fund() {
            BrowserPlugin.fund(this.url);
        }

        public async claim() {
            BrowserPlugin.claim(this.url);
        }
    }
</script>
<style>
    .btn-sm.btn-cancel {
        margin-right: 5px;
    }
</style>