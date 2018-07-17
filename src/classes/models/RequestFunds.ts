import RequestFund from "./RequestFund";

export default class RequestFunds {
    fndFunds: RequestFund;
    otherFunds: RequestFund;
    usdFunds: number;

    public static getFundsByAddress(funds: RequestFunds, address: string): RequestFund | null {
        if(funds.fndFunds && funds.fndFunds.tokenAddress.toLowerCase() == address.toLowerCase()) {
            return {...funds.fndFunds};
        } else if(funds.otherFunds) {
            return {...funds.otherFunds}
        }

        return null;
    }
}