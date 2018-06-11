import BrowserPlugin from "./BrowserPlugin";
import Utils from "./Utils";

export default class Settings {
    private static settings = null;

    public static async getFundrequestUrl(): Promise<string> {
        let network = await Settings.getNetwork();
        let url = "";
        switch (network) {
            case 'main':
                url = Settings.mainUrl;
                break;
            case 'dev':
                url = Settings.devUrl;
                break;
            case 'local':
                url = Settings.localUrl;
                break;
        }
        return url;
    }

    public static async getTransactionUrl(transactionId): Promise<string> {
        let network = await Settings.getNetwork();
        let url = "";
        switch (network) {
            case 'main':
                url = `https://etherscan.io/tx/${transactionId}`;
                break;
            case 'dev':
                url = `https://kovan.etherscan.io/tx/${transactionId}`;
                break;
            case 'local':
                url = `https://kovan.etherscan.io/tx/${transactionId}`;
                break;
        }
        return url;
    }

    public static async getEthAddress(): Promise<string> {
        return BrowserPlugin.get('ethAddress');
    }

    public static async getTokenContractAddress(): Promise<string> {
        return Settings.getProperty('io.fundrequest.contract.token.address');

    }

    public static async getFundRequestContractAddress(): Promise<string> {
        return Settings.getProperty('io.fundrequest.contract.fund-request.address');
    }

    public static async getProviderApi(): Promise<string> {
        return Settings.getProperty('io.fundrequest.ethereum.endpoint.url');
    }

    public static async getProperty(propertyName: string) {
        if (Settings.settings == null) {
            let url = await Settings.getFundrequestUrl();

            if (url.length > 0) {
                try {
                    Settings.settings = await Utils.getJSON(`${await Settings.getFundrequestUrl()}/pubenv`);
                } catch (e) {
                    Settings.settings = "";
                    console.log(`Something went wrong getting the settings from ${await Settings.getFundrequestUrl()}`, e);
                }
            }
        }
        return Settings.settings[propertyName];
    }

    public static async getFundUrl(githubUrl: string): Promise<string> {
        let url = await Settings.getFundrequestUrl();
        return `${url}/fund/github?url=${githubUrl}`;
    }

    public static async getClaimUrl(githubUrl: string) { //owner: string, repo: string, issueNumber: string): Promise<string> {
        let matches = /^https:\/\/github\.com\/(.+)\/(.+)\/issues\/(\d+)$/i.exec(githubUrl);
        let owner = matches[1];
        let repo = matches[2];
        let issueNumber = Number.parseInt(matches[3]);
        let url = await Settings.getFundrequestUrl();
        return `${url}/requests/github/${owner}/${repo}/${issueNumber}`;
    }

    public static getOptionsUrl(): string {
        return BrowserPlugin.getURL("options.html");
    }

    public static async getNetwork(): Promise<string> {
        return BrowserPlugin.get('network', 'main');
    }

    private static get mainUrl() {
        return 'https://fundrequest.io';
    }

    private static get devUrl() {
        return 'https://dev-web.fundrequest.io';
    }

    private static get localUrl() {
        return 'http://localhost:8080';
    }
}