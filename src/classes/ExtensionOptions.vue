<template>
    <div class="form extension-options">
        <div class="form-group">
            <label for="eth-address">Your ethereum address</label>
            <input v-model="ethAddress" type="text" class="form-control" id="eth-address"
                   v-bind:class="{ 'is-invalid': !ethAddressValid }"
                   aria-describedby="eth-address-help" placeholder="Ex.: 0x0" />
            <div class="text-danger" v-if="!ethAddressValid">This ethereum address is not valid.</div>
            <small id="eth-address-help" class="form-text text-muted">(No ethereum address yes? Get started <a
                    href="https://www.myetherwallet.com/" target="_blank">here</a>)
            </small>
        </div>
        <div class="form-group">
            <label for="network">Environment</label>
            <select v-model="network" id="network" class="form-control">
                <option value="prod" selected>Production (Mainnet)</option>
                <option value="staging">Staging (Kovan)</option>
                <option value="dev">Development (Kovan)</option>
                <option value="local">Local (Kovan)</option>
            </select>
        </div>
        <div class="alert alert-success" v-if="status != null">{{status}}</div>
        <div class="text-right">
            <button class="btn d-inline-block btn-primary" @click="saveOptions()">Save options</button>
        </div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Utils from "./Utils";
    import BrowserPlugin from "./BrowserPlugin";
    import Settings from "./Settings";

    @Component
    export default class ExtensionOptions extends Vue {
        public ethAddress: string = null;
        public network: string = 'prod';
        public status: string = null;
        public ethAddressValid: boolean = true;

        mounted() {
            this.restoreOptions();
        }

        public async saveOptions() {
            this.ethAddressValid = true;
            if (this.ethAddress && this.ethAddress.trim().length > 0) {
                this.ethAddressValid = Utils.validators.ethAddress(this.ethAddress);
            }

            if (this.ethAddressValid) {
                await BrowserPlugin.setMultiple({
                    ethAddress: this.ethAddress,
                    network: this.network
                });

                this.status = 'Options saved.';
                setTimeout(() => {
                    this.status = null;
                }, 750);
            }
        }

        public async restoreOptions() {
            this.ethAddress = await Settings.getEthAddress();
            this.network = await Settings.getNetwork();
        }
    }
</script>
<style type="scss">
    @import '~bootstrap/scss/bootstrap';

    .extension-options {
        min-width: 460px;
        padding: 16px;
    }
</style>