import BrowserPlugin from "./BrowserPlugin";
import Utils from "./Utils";

export default class Settings {

    public static async getFundrequestUrl(): Promise<string> {
        let network = await Settings.getNetwork();
        let url = "";
        switch (network) {
            case 'main':
                url = Settings.mainUrl;
                break;
            case 'kovan':
                url = Settings.devUrl;
                break;
            case 'local':
                url = Settings.localUrl;
                break;
        }

        return url;
    }

    public static async getEthAddress(): Promise<string> {
        return BrowserPlugin.get('ethAddress');
    }

    public static async getTokenContractAddress(): Promise<string> {
        return Promise.resolve('0x02F96eF85cAd6639500CA1cc8356F0b5CA5bF1D2');
    }

    public static async getFundRequestContractAddress(): Promise<string> {
        return Promise.resolve('0xC16a102813B7bD98b0BEF2dF28FFCaf1Fbee97c0');
    }

    public static async getProviderApi(): Promise<string> {
        return Promise.resolve("https://kovan.fundrequest.io");
        //return Settings.getProperty('ethereum.endpoint.url');
    }

    public static async getProperty(propertyName: string) {
        let url = await Settings.getFundrequestUrl();
        let property = "";

        if (url.length > 0) {
            property = await Utils.getJSON(`${url}/`)
        }

        return property;
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