import RequestFund from "./RequestFund";

export default class RequestFunds {
    fndFunds: RequestFund;
    otherFunds: RequestFund;
    usdFunds: number;

    public static getFundsByAddress(funds: RequestFunds, address: string): RequestFund | null {
        if(funds.fndFunds && funds.fndFunds.tokenAddress.toLowerCase() == address.toLowerCase()) {
            return {...funds.fndFunds};
        } else if(funds.otherFunds) {
            if(!Array.isArray(funds.otherFunds)) {
                return {...funds.otherFunds}
            } else {
                return {...(<RequestFund[]>funds.otherFunds).find(fund => fund.tokenAddress.toLowerCase() == address.toLowerCase())};
            }
        }

        return null;
    }
}