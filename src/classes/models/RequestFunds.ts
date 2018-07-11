import RequestFund from "./RequestFund";

export default class RequestFunds {
    fndFunds: RequestFund;
    otherFunds: RequestFund[];
    usdFunds: number;

    public static getFundsByAddress(funds: RequestFunds, address: string): RequestFund {
        if(funds.fndFunds != null && funds.fndFunds.tokenAddress.toLowerCase() == address.toLowerCase()) {
            return {...funds.fndFunds};
        } else if(funds.otherFunds != null) {
            return {...funds.otherFunds.find(fund => fund.tokenAddress.toLowerCase() == address.toLowerCase())};
        }

        return null;
    }
}