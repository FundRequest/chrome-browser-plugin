<template>
    <span>
        <button class="btn btn-sm btn-danger" @click="claim()">
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
    import Github from "./Github";
    import Settings from "../../models/Settings";

    @Component
    export default class GithubButtons extends Vue {
        @Prop() settings: Settings;

        public fund() {
            let url = Github.getCurrentIssueUrl();
            BrowserPlugin.fund(url);
        }

        public claim() {
            let url = Github.getCurrentIssueUrl();
            BrowserPlugin.claim(url);
        }
    }
</script>
<style>
    .btn-sm.btn-cancel {
        margin-right: 5px;
    }
</style>