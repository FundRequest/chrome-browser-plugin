import Utils from "./Utils";
import Claimable from "./models/Claimable";
import RequestDetails from "./models/RequestDetails";
import Settings from "./Settings";

export default class RequestApi {

    public static async getRequestDetails(platformId: string): Promise<RequestDetails> {
        return Object.assign(new RequestDetails(), await Utils.getJSON(await Settings.getRequestDetailsUrl(platformId)));
    }

    public static async getClaimableProperties(platformId: string): Promise<Claimable> {
        return Object.assign(new Claimable(), await Utils.getJSON(await Settings.getClaimablePropertiesUrl(platformId)));
    }
}