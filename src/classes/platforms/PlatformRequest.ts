import PlatformRequestInterface from "./PlatformRequestInterface";
import BigNumber from "bignumber.js";
import RequestDetails from "../models/RequestDetails";
import {Web3x} from "../Web3x";
import {FundRepository} from "../../contracts/FundRepository";
import Contracts from "../Contracts";
import RequestUtils from "../RequestUtils";
import Settings from "../Settings";
import RequestApi from "../RequestApi";
import Claimable from "../models/Claimable";
import RequestFund from "../models/RequestFund";
import RequestFunds from "../models/RequestFunds";

export default abstract class PlatformRequest implements PlatformRequestInterface {

    private readonly platformId: string;
    private platform: BigNumber;

    private claimableProperties: Claimable;
    private claimablePropertiesInitialized: boolean = false;
    private claimedFundingMap: Map<string, number>;
    private details: RequestDetails;
    private detailsInitialized: boolean = false;
    private fundingArray: RequestFund[];
    private fundingMap: Map<string, number>;
    private isRequestClaimed: boolean;
    private totalFunders: number = 0;
    private totalFundersInitialized: boolean = false;

    constructor(platformId: string) {
        this.platformId = platformId;
    }

    /**
     * @desc Get the name of the platform
     * @returns {string}
     */
    public abstract getPlatformName(): string;

    /**
     * @desc Get the plaform id (owner|FR|repo|FR|issueNumber)
     * @returns {string}
     */
    public getPlatformId(): string {
        return this.platformId;
    }

    /**
     * @async
     * @desc Get the platform name as a BigNumber, so it can used in contract calls.
     * @returns {Promise<BigNumber>}
     */
    public async getPlatform(): Promise<BigNumber> {
        if (!this.platform) {
            this.platform = (await Web3x.getInstance()).fromAscii(this.getPlatformName());
        }
        return this.platform;
    }

    /**
     * @async
     * @desc Get the total funders of request.
     * @returns {Promise<number>}
     */
    public async getTotalFunders(): Promise<number> {
        if (!this.totalFundersInitialized) {
            const repo: FundRepository = (await Contracts.getInstance().getFundRepository());

            const result: BigNumber = await repo.getFunderCount(
                await this.getPlatform(),
                String(this.getPlatformId())
            );

            this.totalFunders = result.toNumber();
            this.totalFundersInitialized = true;
        }
        return this.totalFunders;
    }

    /**
     * @async
     * @desc Get your funding amount of request as an array.
     * @returns {Promise<number>}
     */
    public async getYourFunding(): Promise<RequestFund[]> {
        if (!this.fundingArray) {
            this.fundingArray = [];
            await (await this.getYourFundingMap()).forEach(async (amount: number, address: string) => {
                let funding: RequestFund = RequestFunds.getFundsByAddress((await this.getDetails()).funds, address);
                funding.totalAmount = amount;
                this.fundingArray.push(funding);
            });
        }
        return this.fundingArray;
    }

    /**
     * @async
     * @desc Get your funding amount of request as a map.
     * @returns {Promise<Map<string, number>>}
     */
    public async getYourFundingMap(): Promise<Map<string, number>> {
        if (!this.fundingMap) {
            this.fundingMap = await RequestUtils.getRequestFundingDetailsForFunder(this.getPlatformName(), this.getPlatformId(), await Settings.getEthAddress());
        }
        return this.fundingMap;
    }

    /**
     * @async
     * @desc Gets claimed amount of request.
     * @returns {Promise<Map<string, number>>}
     */
    public async getClaimedFunding(): Promise<Map<string, number>> {
        if (!this.claimedFundingMap) {
            this.claimedFundingMap = await RequestUtils.getClaimedFunding(this.getPlatformName(), this.getPlatformId());
        }
        return this.claimedFundingMap;
    }

    /**
     * @async
     * @desc Checkes if this request is already created on the platform
     * @returns {Promise<Map<string, number>>}
     */
    public async existsInFundRepository(): Promise<boolean> {
        return (await this.getYourFundingMap()).size > 0;
    }

    /**
     * @async
     * @desc Gets this request details (funds, title, status, ...)
     * @returns {Promise<RequestDetails>}
     */
    public async getDetails(): Promise<RequestDetails> {
        if (!this.detailsInitialized) {
            this.detailsInitialized = true;
            try {
                this.details = await this.existsInFundRepository() || await this.isClaimed() ? await RequestApi.getRequestDetails(this.getPlatformId()) : null;
            } catch (e) {
                this.details = null;
            }
        }
        return this.details;
    }

    /**
     * @async
     * @desc Checkes if a request already is claimed
     * @returns {Promise<boolean>}
     */
    public async isClaimed(): Promise<boolean> {
        if (!this.isRequestClaimed) {
            this.isRequestClaimed = await (await Contracts.getInstance().getClaimRepository()).isClaimed(await this.getPlatform(), this.getPlatformId());
        }
        return this.isRequestClaimed;
    }

    /**
     * Checkes if this is claimable
     * @returns {Promise<boolean>}
     */
    public async isClaimable(): Promise<boolean> {
        return (await this.getClaimableProperties()).claimable;
    }

    /**
     * Gets the username of whom can claim this request
     * @returns {Promise<string>}
     */
    public async getPlatformUserThatCanClaim(): Promise<string> {
        let user = (await this.getClaimableProperties());
        return user ? user.claimableByPlatformUser : "";
    }

    private async getClaimableProperties(): Promise<Claimable> {
        if (!this.claimablePropertiesInitialized) {
            this.claimableProperties = await this.existsInFundRepository() ? await RequestApi.getClaimableProperties(this.getPlatformId()) : null;
            this.claimablePropertiesInitialized = true;
        }
        return this.claimableProperties;
    }
}