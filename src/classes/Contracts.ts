import {Web3x} from "./Web3x";
import {FundRequestContract} from "../contracts/FundRequestContract";
import {FundRequestToken} from "../contracts/FundRequestToken";
import {FundRepository} from "../contracts/FundRepository";
import {TokenInfo} from "./TokenInfo";
import {MiniMeToken} from "../contracts/MiniMeToken";
import Settings from "./Settings";
import {ClaimRepository} from "../contracts/ClaimRepository";

export default class Contracts {

    private static instance: Contracts;

    private _tokenContract: Promise<FundRequestToken> = null;
    private _frContract: Promise<FundRequestContract> = null;
    private _erc20Contract: Map<string, Promise<MiniMeToken>> = new Map<string, Promise<MiniMeToken>>();
    private _fundRepository: Promise<FundRepository> = null;
    private _claimRepository: Promise<ClaimRepository> = null;

    constructor() {
    }

    public async getTokenContract(): Promise<FundRequestToken> {
        if (!this._tokenContract) {
            this._tokenContract = FundRequestToken.createAndValidate(await Web3x.getInstance(), await Settings.getTokenContractAddress());
        }
        return this._tokenContract;
    }

    public async getFrContract(): Promise<FundRequestContract> {
        if (!this._frContract) {
            this._frContract = FundRequestContract.createAndValidate(await Web3x.getInstance(), await Settings.getFundRequestContractAddress());
        }
        return this._frContract;
    }

    public async getErc20Contract(address: string): Promise<MiniMeToken> {
        if (!this._erc20Contract.get(address)) {
            this._erc20Contract.set(address, MiniMeToken.createAndValidate(await Web3x.getInstance(), address));
        }
        return this._erc20Contract.get(address);
    }

    public async getFundRepository(): Promise<FundRepository> {
        if (!this._fundRepository) {
            let repositoryAddress: string = await (await this.getFrContract()).fundRepository;
            this._fundRepository = FundRepository.createAndValidate(await Web3x.getInstance(), repositoryAddress);
        }
        return this._fundRepository;
    }

    public async getClaimRepository(): Promise<ClaimRepository> {
        if (!this._claimRepository) {
            let repositoryAddress: string = await (await this.getFrContract()).claimRepository;
            this._claimRepository = ClaimRepository.createAndValidate(await Web3x.getInstance(), repositoryAddress);
        }
        return this._claimRepository;
    }

    public static async getErc20Balance(account: string, token: TokenInfo): Promise<Number> {
        if (token) {
            let erc20 = await Contracts.getInstance().getErc20Contract(token.address);
            return (await erc20.balanceOf(account)).toNumber();
        } else {
            return 0;
        }
    }

    //public static getPossibleTokens(platformId: string): Promise<TokenInfo[]> {
    //    return Utils.getJSON("/rest/fund/allowed-tokens?platform=GITHUB&platformId=" + encodeURIComponent(platformId));
    //}

    public static getInstance() {
        if (!Contracts.instance) {
            Contracts.instance = new Contracts();
        }
        return Contracts.instance;
    }
}
