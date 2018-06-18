<template>
    <span class="mr-2" v-if="requestFundInfo != null"> | Total Funding: {{requestFundInfo.totalFunding}} FND </span>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Github, {RequestFundInfo} from "./Github";

    @Component
    export default class GithubOverviewItemFunds extends Vue {
        @Prop() issueId: string;
        public requestFundInfo: RequestFundInfo = null;

        mounted() {
            this.init();
        }

        private async init() {
            this.requestFundInfo = await Github.getRequestFundInfo(this.issueId);
        }
    }
</script>
<style>
</style>