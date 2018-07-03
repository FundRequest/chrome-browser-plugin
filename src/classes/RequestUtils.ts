import BigNumber from 'bignumber.js';
import {FundRepository} from "../contracts/FundRepository";
import Contracts from "./Contracts";
import Utils from "./Utils";
import {Web3x} from "./Web3x";
import {ClaimRepository} from "../contracts/ClaimRepository";

export default class RequestUtils {

    /**
     * @async
     * @desc Get's your funding amount of a request.
     * @param platform
     * @param platformId
     * @param funderEthAddress
     * @returns {Promise<Map<string, number>>}
     */
    public static async getRequestFundingDetailsForFunder(platform: string, platformId: string, funderEthAddress: string): Promise<Map<string, number>> {
        const platformForWeb3 = (await Web3x.getInstance()).fromAscii(platform);
        const repo: FundRepository = await Contracts.getInstance().getFundRepository();

        let yourFunding: Map<string, number> = new Map();

        const result: BigNumber = await repo.getFunderCount(
            platformForWeb3,
            String(platformId)
        );

        for (let i = 0; i < result.toNumber(); i++) {
            let address = await repo.getFundedTokensByIndex(platformForWeb3, platformId, i);
            let amount = Utils.weiToNumber(await repo.amountFunded(platformForWeb3, platformId, funderEthAddress, address));
            yourFunding.set(address, amount);
        }

        return yourFunding;
    }

    /**
     * @async
     * @desc Get's claimed amount of a request.
     * @param platform
     * @param platformId
     * @returns {Promise<Map<string, number>>}
     */
    public static async getClaimedFunding(platform: string, platformId: string): Promise<Map<string, number>> {
        const platformForWeb3 = (await Web3x.getInstance()).fromAscii(platform);
        const repo: ClaimRepository = await Contracts.getInstance().getClaimRepository();

        let funding: Map<string, number> = new Map();

        let address = await repo.getTokenByIndex(platformForWeb3, platformId, 0);
        let amount = Utils.weiToNumber(await repo.getAmountByToken(platformForWeb3, platformId, address));
        funding.set(address, amount);

        return funding;
    }

}