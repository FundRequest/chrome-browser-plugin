import GithubButtons from "./GithubButtons.vue";
import GithubSidebarWidget from "./GithubSidebarWidget.vue";
import GithubOverviewItemFunds from "./GithubOverviewItemFunds.vue";
import VueInitializer from "../../classes/VueInitializer";
import BrowserPlugin from "../../classes/BrowserPlugin";
import Contracts from "../../classes/Contracts";
import {Web3x} from "../../classes/Web3x";
import Settings from "../../classes/Settings";
import BigNumber from 'bignumber.js';
import {FundRepository} from "../../contracts/FundRepository";
import Utils from "../../classes/Utils";
import {ClaimRepository} from "../../contracts/ClaimRepository";

/**
 * @class Github
 * @classdesc Initializes fundrequest functionality in github. Also reinits everything when github does a soft refresh.
 */
export default class Github {
    private static instance: Github;

    /**
     * @desc Get a Github.class instance
     * @returns {Github}
     */
    public static getInstance(): Github {
        if (!Github.instance) {
            Github.instance = new Github();
        }
        return Github.instance;
    }

    constructor() {
        BrowserPlugin.load((response) => {
            let readyStateCheckInterval = setInterval(() => {
                if (document.readyState === "complete") {
                    clearInterval(readyStateCheckInterval);

                    Github.init();
                    document.addEventListener('pjax:complete', () => {
                        Github.init();
                    });
                }
            }, 10);
        });
    }

    private static init() {
        let props = [];
        props['issueId'] = Github.getCurrentPlatformId();

        if (props['issueId'] != null) {
            VueInitializer.createComponent(document.querySelector('#partial-discussion-sidebar'), 'fnd-sidebar-issue-funds discussion-sidebar-item discussion-sidebar-item--fnd', GithubSidebarWidget, props);
            VueInitializer.createComponent(document.querySelector('#partial-discussion-header .gh-header-actions'), 'fnd-action-buttons', GithubButtons, props);
        }

        if (Github.containsCurrentPageIssues()) {
            let issues = document.querySelectorAll('.issues-listing ul.js-navigation-container.js-active-navigation-container [data-id]');
            if (issues.length > 0) {
                for (let i = 0; i < issues.length; i++) {
                    let href = (<HTMLAnchorElement>issues[i].querySelector('.js-navigation-open')).href;
                    let meta: HTMLElement = issues[i].querySelector('.issue-meta-section');
                    props['issueId'] = Github.getPlatformIdFromUrl(href);
                    VueInitializer.createComponent(meta, 'fnd-meta-issue-funds', GithubOverviewItemFunds, props);
                }
            }
        }
    }

    /**
     * @async
     * @desc Get's total funders of a github issue.
     * @param issueId
     * @returns {Promise<number>}
     */
    public static async totalFunders(issueId): Promise<number> {
        const platform = (await Web3x.getInstance()).fromAscii("GITHUB");
        const repo: FundRepository = (await Contracts.getInstance().getFundRepository());

        const result: BigNumber = await repo.getFunderCount(
            platform,
            String(issueId)
        );

        return result.toNumber();
    }

    /**
     * @async
     * @desc Get's your funding amount of a github issue.
     * @param issueId
     * @returns {Promise<Map<string, number>>}
     */
    public static async getYourFunding(issueId): Promise<Map<string, number>> {
        const account = await Settings.getEthAddress();
        const platform = (await Web3x.getInstance()).fromAscii("GITHUB");
        const repo: FundRepository = await Contracts.getInstance().getFundRepository();

        let yourFunding: Map<string, number> = new Map();

        const result: BigNumber = await repo.getFunderCount(
            platform,
            String(issueId)
        );

        for (let i = 0; i < result.toNumber(); i++) {
            let address = await repo.getFundedTokensByIndex(platform, issueId, i);
            let amount = Utils.weiToNumber(await repo.amountFunded(platform, issueId, account, address));
            yourFunding.set(address, amount);
        }

        return yourFunding;
    }

    /**
     * @async
     * @desc Get's claimed amount of a github issue.
     * @param issueId
     * @returns {Promise<Map<string, number>>}
     */
    public static async getClaimedFunding(issueId): Promise<Map<string, number>> {
        const platform = (await Web3x.getInstance()).fromAscii("GITHUB");
        const repo: ClaimRepository = await Contracts.getInstance().getClaimRepository();

        let funding: Map<string, number> = new Map();

        let address = await repo.getTokenByIndex(platform, issueId, 0);
        let amount = Utils.weiToNumber(await repo.getAmountByToken(platform, issueId, address));
        funding.set(address, amount);

        return funding;
    }

    /**
     * @async
     * @desc Checkes if an github issue already is claimed
     * @param issueId
     * @returns {Promise<boolean>}
     */
    public static async isClaimed(issueId): Promise<boolean> {
        const repo: ClaimRepository = await Contracts.getInstance().getClaimRepository();
        const platform = (await Web3x.getInstance()).fromAscii("GITHUB");

        return repo.isClaimed(platform, issueId);
    }

    /**
     * @desc Get's the current github user name (from github page meta data)
     * @returns {string}
     */
    public static getUserLoginName(): string {
        let userNameMeta = document.head.querySelector("[name=\"user-login\"]");
        return userNameMeta ? userNameMeta.getAttribute("content") : "";
    }

    /**
     * @desc Get's the current github url
     * @returns {string}
     */
    public static getCurrentIssueUrl(): string {
        let header: HTMLElement = (<HTMLElement>document.querySelector('#partial-discussion-header'));
        if (header) {
            let url = `https://github.com${header.dataset.url}`;
            return url.split('/show_partial')[0];
        } else {
            return null;
        }
    }

    private static getCurrentPlatformId(): string {
        return this.getPlatformIdFromUrl(Github.getCurrentIssueUrl());
    }

    private static getPlatformIdFromUrl(issueLink): string {
        let matches = /^(https:\/\/github\.com)?\/(.+)\/(.+)\/issues\/(\d+)$/.exec(issueLink);
        if (matches && matches.length >= 4) {
            return matches[2] + '|FR|' + matches[3] + '|FR|' + matches[4];
        } else {
            return null;
        }
    }

    private static containsCurrentPageIssues(): boolean {
        let matches = /^(https:\/\/github\.com)?\/(.+)\/(.+)\/issues/i.exec(location.href);
        return matches && matches.length >= 3;
    }
}

Github.getInstance();