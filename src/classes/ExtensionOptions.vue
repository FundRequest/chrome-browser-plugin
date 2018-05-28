<template>
    <div class="form extension-options">
        <div class="form-group">
            <label for="eth-address">Your ethereum address</label>
            <input v-model="ethAddress" type="text" class="form-control" id="eth-address"
                   v-bind:class="{ 'is-invalid': !ethAddressValid }"
                   aria-describedby="eth-address-help" placeholder="Ex.: 0x0">
            <div class="text-danger" v-if="!ethAddressValid">This ethereum address is not valid.</div>
            <small id="eth-address-help" class="form-text text-muted">(No ethereum address yes? Get started <a
                    href="https://www.myetherwallet.com/" target="_blank">here</a>)
            </small>
        </div>
        <div class="form-group">
            <label for="network">Network</label>
            <select v-model="network" id="network" class="form-control">
                <option value="mainnet" selected>Main net</option>
                <option value="kovan">Kovan test net</option>
                <option value="local">Local test net</option>
            </select>
        </div>
        <div class="alert alert-success" v-if="status != ''">{{status}}</div>
        <div class="text-right">
            <button class="btn d-inline-block btn-primary" @click="saveOptions()">Save options</button>
        </div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Utils from "./Utils";

    @Component
    export default class ExtensionOptions extends Vue {
        public ethAddress: string = '';
        public network: 'mainnet' | 'kovan' | 'local' = 'mainnet';
        public status: string = '';
        public ethAddressValid: boolean = true;

        mounted() {
            this.restoreOptions();
        }

        public saveOptions() {
            let valid = true;
            this.ethAddressValid = true;
            if (this.ethAddress.trim().length > 0) {
                this.ethAddressValid = Utils.validators.ethAddress(this.ethAddress);
            }

            if (this.ethAddressValid) {
                chrome.storage.sync.set({
                    ethAddress: this.ethAddress,
                    network: this.network
                }, () => {
                    this.status = 'Options saved.';
                    setTimeout(() => {
                        this.status = '';
                    }, 750);
                });
            }
        }

        public restoreOptions() {
            chrome.storage.sync.get({
                ethAddress: '',
                network: 'mainnet'
            }, (items: { ethAddress, network }) => {
                this.ethAddress = items.ethAddress;
                this.network = items.network;
            });
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