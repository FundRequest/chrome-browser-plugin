import Settings from "./Settings";

export class Web3x {
    private _web3: any;
    private _web3Available: boolean = false;

    private static instance: Web3x = null;

    constructor(provider: string) {
        if (typeof (<any>window).web3 !== 'undefined') {
            this._web3 = new (<any>window).Web3((<any>window).web3.currentProvider);
            this._web3Available = true;
        } else {
            (<any>window).web3 = new (<any>window).Web3(new (<any>window).Web3.providers.HttpProvider(provider));
            this._web3 = (<any>window).web3;
            // TODO: make app readonly, no transactions are possible
        }
    }

    public static async getInstance(): Promise<any> {
        if (Web3x.instance == null) {
            Web3x.instance = new Web3x(await Settings.getProviderApi());
        }

        return Web3x.instance._web3;
    }

    public static async getAccount(): Promise<any> {
        return (await Web3x.getInstance()).eth.defaultAccount;
    }
}