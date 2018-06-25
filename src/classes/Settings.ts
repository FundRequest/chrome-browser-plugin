import BrowserPlugin from "./BrowserPlugin";
import Utils from "./Utils";
import Claimable from "./models/Claimable";
import IssueProperties from "./models/IssueProperties";
import RequestDetails from "./models/RequestDetails";

export default class Settings {
    private static settings = null;

    public static async getFundrequestUrl(): Promise<string> {
        let network = await Settings.getNetwork();
        let url = "";
        switch (network) {
            case 'prod':
                url = Settings.mainUrl;
                break;
            case 'staging':
                url = Settings.stagingUrl;
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
            case 'prod':
                url = `https://etherscan.io/tx/${transactionId}`;
                break;
            case 'staging':
            case 'dev':
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

    public static async getClaimUrl(githubUrl: string): Promise<string> {
        let props = Settings.getIssueProperties(githubUrl);
        let url = await Settings.getFundrequestUrl();
        return `${url}/requests/github/${props.owner}/${props.repo}/${props.issueNumber}`;
    }

    public static async getClaimablePropertiesUrl(githubUrl: string): Promise<string> {
        let props = Settings.getIssueProperties(githubUrl);
        let url = await Settings.getFundrequestUrl();
        return `${url}/rest/requests/github/${props.owner}/${props.repo}/${props.issueNumber}/claimable`;
    }

    public static async getRequestDetailsUrl(githubUrl: string): Promise<string> {
        let props = Settings.getIssueProperties(githubUrl);
        let url = await Settings.getFundrequestUrl();
        return `${url}/rest/requests/github/${props.owner}/${props.repo}/${props.issueNumber}`;
    }

    public static async getRequestDetails(githubUrl: string): Promise<RequestDetails> {
        return Object.assign(new RequestDetails(), await Utils.getJSON(await Settings.getRequestDetailsUrl(githubUrl)));
    }

    public static async getClaimableProperties(githubUrl: string): Promise<Claimable> {
        return Object.assign(new Claimable(), await Utils.getJSON(await Settings.getClaimablePropertiesUrl(githubUrl)));
    }

    public static getOptionsUrl(): string {
        return BrowserPlugin.getURL("options.html");
    }

    public static async getNetwork(): Promise<string> {
        return BrowserPlugin.get('network', 'prod');
    }

    private static getIssueProperties(githubUrl: string): IssueProperties {
        let matches = /^https:\/\/github\.com\/(.+)\/(.+)\/issues\/(\d+)$/i.exec(githubUrl);
        let issueProperties = new IssueProperties();
        issueProperties.owner = matches[1];
        issueProperties.repo = matches[2];
        issueProperties.issueNumber = Number.parseInt(matches[3]);

        return issueProperties;
    }

    private static get mainUrl() {
        return 'https://fundrequest.io';
    }

    private static get devUrl() {
        return 'https://dev-web.fundrequest.io';
    }

    private static get stagingUrl() {
        return 'https://staging.fundrequest.io';
    }

    private static get localUrl() {
        return 'http://localhost:8080';
    }
}