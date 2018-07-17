import GithubButtons from "./GithubButtons.vue";
import GithubSidebarWidget from "./GithubSidebarWidget.vue";
import GithubOverviewItemFunds from "./GithubOverviewItemFunds.vue";
import VueInitializer from "../../classes/VueInitializer";
import BrowserPlugin from "../../classes/BrowserPlugin";
import GithubRequest from "../../classes/platforms/GithubRequest";
import Settings from "../../classes/Settings";

/**
 * @class Github
 * @desc Initializes fundrequest functionality in github. Also reinits everything when github does a soft refresh.
 */
export default class Github {
    private static instance: Github;
    private static currentGithubRequest: GithubRequest = null;
    private static observer: MutationObserver = null;
    private static currentUrl: string = null;
    private static eventHub: Element = null;
    private static events = {
        pageReload: new CustomEvent('fnd:github:page:reload'),
        sidebarChange: new CustomEvent('fnd:github:issue:sidebar:change'),
        headerChange: new CustomEvent('fnd:github:issue:header:change'),
        listChange: new CustomEvent('fnd:github:issues:change')
    };

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
                    Settings.getSettings().then((settings) => {
                        if (settings != null && settings['loaded']) {
                            Github.init();
                        }
                    })
                }
            }, 10);
        });
    }

    private static init() {
        Github.currentUrl = location.href;
        Github.eventHub = document.createElement('div');
        if (!Github.observer) {
            Github.observer = Github.addUpdateObserver();
        }
        let platformId = Github.getCurrentPlatformId();
        if (platformId != null) {
            Github.currentGithubRequest = new GithubRequest(platformId);
            let props = [];
            props['githubRequest'] = Github.currentGithubRequest;
            Github.initSidebar(props);
            Github.initButtons(props);
        }

        if (Github.containsCurrentPageIssues()) {
            Github.initOverview();
        }

        Github.eventHub.addEventListener(Github.events.pageReload.type, () => {
            if (Github.currentUrl != location.href) {
                Github.init();
            } else {
                for (let key in Github.events) {
                    Github.eventHub.dispatchEvent(Github.events[key]);
                }
            }
        });
    }

    private static addUpdateObserver(): MutationObserver {
        let nodesFound;
        let observer = new MutationObserver((list) => {
            list.forEach((item) => {
                if (item.addedNodes) {
                    if ((item.target as Element).id == 'js-repo-pjax-container') {
                        Github.eventHub.dispatchEvent(Github.events.pageReload);
                    } else {
                        let addedNodes = Array.of(item.addedNodes);

                        nodesFound = addedNodes.forEach((el, i) => {
                            let element = el[i] as Element;
                            if (element) {
                                if (element.id == 'partial-discussion-header') {
                                    Github.eventHub.dispatchEvent(Github.events.headerChange);
                                } else if (element.id == 'partial-discussion-sidebar') {
                                    Github.eventHub.dispatchEvent(Github.events.sidebarChange);
                                }
                            }
                        });
                    }
                }
            });
        });
        observer.observe(document.querySelector('#js-repo-pjax-container'), {
            subtree: true,
            childList: true
        });

        return observer;
    }

    private static initSidebar(props: any) {
        let sidebar = VueInitializer.createComponent('#partial-discussion-sidebar', 'fnd-sidebar-issue-funds discussion-sidebar-item discussion-sidebar-item--fnd', GithubSidebarWidget, props);
        Github.eventHub.addEventListener(Github.events.sidebarChange.type, () => {
            sidebar ? VueInitializer.reinitComponent(sidebar) : null;
        });
    }

    private static initButtons(props: any) {
        let buttons = VueInitializer.createComponent('#partial-discussion-header .gh-header-actions', 'fnd-action-buttons', GithubButtons, props);
        Github.eventHub.addEventListener(Github.events.headerChange.type, () => {
            buttons ? VueInitializer.reinitComponent(buttons) : null;
        });
    }

    private static initOverview() {
        let issues = document.querySelectorAll('.issues-listing ul.js-navigation-container.js-active-navigation-container [data-id]');
        let components = [];
        if (issues.length > 0) {
            for (let i = 0; i < issues.length; i++) {
                let issue: HTMLElement = issues[i] as HTMLElement;
                components[`${issue.id}`] = Github.initOverviewItem(issue);
            }
            Github.eventHub.addEventListener(Github.events.listChange.type, () => {
                for (let i = 0; i < issues.length; i++) {
                    let issue: HTMLElement = issues[i] as HTMLElement;

                    if (components[`${issue.id}`]) {
                        VueInitializer.reinitComponent(components[`${issue.id}`]);
                    } else {
                        Github.initOverviewItem(issue);
                    }
                }
            });
        }
    }

    private static initOverviewItem(issue: HTMLElement) {
        let currentProps = [];
        let href = (<HTMLAnchorElement>issue.querySelector('.js-navigation-open')).href;
        currentProps['platformId'] = Github.getPlatformIdFromUrl(href);

        return VueInitializer.createComponent(
            `li#${issue.id} .mt-1.text-small.text-gray`,
            'fnd-meta-issue-funds', GithubOverviewItemFunds, currentProps, true);
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
        let matches = /^(https:\/\/github\.com)?\/(.+)\/(.+)\/(issues|labels|milestone)/i.exec(location.href);
        return matches && matches.length >= 4;
    }
}

Github.getInstance();