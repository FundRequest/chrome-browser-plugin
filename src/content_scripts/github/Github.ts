import GithubButtons from "./GithubButtons.vue";
import GithubSidebarWidget from "./GithubSidebarWidget.vue";
import GithubOverviewItemFunds from "./GithubOverviewItemFunds.vue";
import VueInitializer from "../../classes/VueInitializer";
import BrowserPlugin from "../../classes/BrowserPlugin";
import Contracts from "../../classes/Contracts";
import {Web3x} from "../../classes/Web3x";
import Settings from "../../classes/Settings";
import BigNumber from 'bignumber.js';
import Utils from "../../classes/Utils";

export interface RequestFundInfo {
    totalFunders: string;
    totalFunding: string;
    yourFunding: string;
}

export default class Github {
    private static instance: Github;

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

        if(props['issueId'] != null) {
            VueInitializer.createComponent(document.querySelector('#partial-discussion-sidebar'), 'fnd-sidebar-issue-funds discussion-sidebar-item discussion-sidebar-item--fnd', GithubSidebarWidget, props);
            VueInitializer.createComponent(document.querySelector('#partial-discussion-header .gh-header-actions'), 'fnd-action-buttons', GithubButtons, props);
        }

        if(Github.containsCurrentPageIssues()) {
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

    public static async getRequestFundInfo(issueId): Promise<RequestFundInfo> {
        let account =  await Settings.getEthAddress();
        let tokenAddress =  await Settings.getTokenContractAddress();
        let platform = (await Web3x.getInstance()).fromAscii("GITHUB");

        let result: [BigNumber, BigNumber, BigNumber] = await (await Contracts.getInstance().getFundRepository()).getFundInfo(
            platform,
            String(issueId),
            account || '',
            tokenAddress
        );

        return {
            totalFunders: result[0].toString(),
            totalFunding: Utils.weiToString(result[1]),
            yourFunding: Utils.weiToString(result[2])
        } as RequestFundInfo;
    }

    public static getUserLoginName(): string {
        let userNameMeta = document.head.querySelector("[name=\"user-login\"]");
        return userNameMeta ? userNameMeta.getAttribute("content") : "";
    }

    public static getCurrentIssueUrl() {
        let header: HTMLElement = (<HTMLElement>document.querySelector('#partial-discussion-header'));
        if (header) {
            let url = `https://github.com${header.dataset.url}`;
            return url.split('/show_partial')[0];
        } else {
            return null;
        }
    }

    private static getCurrentPlatformId() {
        return this.getPlatformIdFromUrl(Github.getCurrentIssueUrl());
    }

    private static getPlatformIdFromUrl(issueLink) {
        let matches = /^(https:\/\/github\.com)?\/(.+)\/(.+)\/issues\/(\d+)$/.exec(issueLink);
        if (matches && matches.length >= 4) {
            return matches[2] + '|FR|' + matches[3] + '|FR|' + matches[4];
        } else {
            return null;
        }
    }

    private static containsCurrentPageIssues() {
        let matches = /^(https:\/\/github\.com)?\/(.+)\/(.+)\/issues/i.exec(location.href);
        return matches && matches.length >= 3;
    }
}

Github.getInstance();