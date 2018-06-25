import GithubButtons from "./GithubButtons.vue";
import GithubSidebarWidget from "./GithubSidebarWidget.vue";
import GithubOverviewItemFunds from "./GithubOverviewItemFunds.vue";
import VueInitializer from "../../classes/VueInitializer";
import BrowserPlugin from "../../classes/BrowserPlugin";
import GithubRequest from "../../classes/platforms/GithubRequest";

/**
 * @class Github
 * @desc Initializes fundrequest functionality in github. Also reinits everything when github does a soft refresh.
 */
export default class Github {
    private static instance: Github;
    private static currentGithubRequest: GithubRequest = null;

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
        Github.currentGithubRequest = null; // reset this to null will remove it available for garbage collection
        let platformId = Github.getCurrentPlatformId();

        if (platformId != null) {
            Github.currentGithubRequest = new GithubRequest(platformId);
            let props = [];
            props['githubRequest'] = Github.currentGithubRequest;
            VueInitializer.createComponent(document.querySelector('#partial-discussion-sidebar'), 'fnd-sidebar-issue-funds discussion-sidebar-item discussion-sidebar-item--fnd', GithubSidebarWidget, props);
            VueInitializer.createComponent(document.querySelector('#partial-discussion-header .gh-header-actions'), 'fnd-action-buttons', GithubButtons, props);
        }

        if (Github.containsCurrentPageIssues()) {
            let issues = document.querySelectorAll('.issues-listing ul.js-navigation-container.js-active-navigation-container [data-id]');
            if (issues.length > 0) {
                for (let i = 0; i < issues.length; i++) {
                    let currentProps = [];
                    let href = (<HTMLAnchorElement>issues[i].querySelector('.js-navigation-open')).href;
                    let meta: HTMLElement = issues[i].querySelector('.issue-meta-section');
                    currentProps['platformId'] = Github.getPlatformIdFromUrl(href);
                    VueInitializer.createComponent(meta, 'fnd-meta-issue-funds', GithubOverviewItemFunds, currentProps);
                }
            }
        }
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
        if (matches && matches.length >= 4 && matches[2] && matches[3] && matches[4]) {
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