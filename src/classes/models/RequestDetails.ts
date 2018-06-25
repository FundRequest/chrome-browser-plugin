import RequestFunds from "./RequestFunds";

export default class RequestDetails {
    creationDate: string; // "2018-06-11T12:41:23+02:00"
    lastModifiedDate: string;
    fase: string;
    funds: RequestFunds;
    icon: string;
    id: number;
    issueNumber: string;
    owner: string;
    platform: string;
    repo: string;
    starred: boolean;
    status:  "Funded" | "Claimed" | "Claimable" | "Claim Requested";
    technologies: string[];
    title: string;
}
