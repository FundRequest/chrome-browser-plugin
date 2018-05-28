import GithubButtons from "./GithubButtons.vue";
import GithubSidebarWidget from "./GithubSidebarWidget.vue";
import GithubOverviewItemFunds from "./GithubOverviewItemFunds.vue";
import VueInitializer from "../../classes/VueInitializer";
import BrowserPlugin from "../../classes/BrowserPlugin";
import Contracts from "../../classes/Contracts";
import {Web3x} from "../../classes/Web3x";
import Settings from "../../models/Settings";
import BigNumber from 'bignumber.js';

export default class Github {
    private static instance: Github;

    private settings: Settings = {
        accountAddress: '0x0000000000000000000000000000000000000000'
    };

    public static getInstance(): Github {
        if (!Github.instance) {
            Github.instance = new Github();
        }
        return Github.instance;
    }

    constructor() {
        BrowserPlugin.load((response) => {
            this.settings = Object.assign(this.settings, response);
            let readyStateCheckInterval = setInterval(() => {
                if (document.readyState === "complete") {
                    clearInterval(readyStateCheckInterval);

                    Github.init(this.settings);
                    document.addEventListener('pjax:complete', () => {
                        Github.init(this.settings);
                    });
                }
            }, 10);
        });
    }

    private static init(settings: Settings) {
        let props = [];
        props['settings'] = settings;
        props['issueId'] = Github.getCurrentPlatformId();
        VueInitializer.createComponent(document.querySelector('#partial-discussion-sidebar'), 'fnd-sidebar-issue-funds discussion-sidebar-item discussion-sidebar-item--fnd', GithubSidebarWidget, props);
        VueInitializer.createComponent(document.querySelector('#partial-discussion-header .gh-header-actions'), 'fnd-action-buttons', GithubButtons, props);
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

    public async getRequestFundInfo(issueId): Promise<[BigNumber, BigNumber, BigNumber]> {
        return (await Contracts.getInstance().getFundRepository()).getFundInfo(Web3x.getInstance().fromAscii("GITHUB"), String(issueId), this.settings.accountAddress, Contracts.getInstance().tokenContractAddress);
    }

    public static getCurrentIssueUrl() {
        let header: HTMLElement = (<HTMLElement>document.querySelector('#partial-discussion-header'));
        if(header) {
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
}

Github.getInstance();