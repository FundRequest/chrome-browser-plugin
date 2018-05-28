<template>
    <span> | Total Funding: {{totalFunding}} FND </span>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Utils from "../../classes/Utils";
    import Settings from "../../models/Settings";
    import Github from "./Github";

    @Component
    export default class GithubOverviewItemFunds extends Vue {
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
</style>