import RequestDetails from "../models/RequestDetails";
import BigNumber from "bignumber.js";
import RequestFund from "../models/RequestFund";

export default interface PlatformRequestInterface {
    getPlatformName(): string;

    getPlatformId(): string;

    getPlatform(): Promise<BigNumber>;

    getTotalFunders(): Promise<number>;

    getYourFunding(): Promise<RequestFund[]>;

    getYourFundingMap(): Promise<Map<string, number>>;

    getClaimedFunding(): Promise<Map<string, number>>;

    getDetails(): Promise<RequestDetails>;

    getPlatformUserThatCanClaim(): Promise<string>;

    isClaimed(): Promise<boolean>;

    isClaimable(): Promise<boolean>;

    existsInFundRepository(): Promise<boolean>;
}
