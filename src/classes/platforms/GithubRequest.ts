import PlatformRequest from "./PlatformRequest";

export default class GithubRequest extends PlatformRequest {
    getPlatformName(): string {
        return "GITHUB";
    }
}