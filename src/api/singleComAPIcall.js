import { APIst } from "./APIstructure";
import { endpointNames } from "./ApiConfig";
export const verifyUser = () => {
    const contentType = "application/json"
    const endpoint = endpointNames.dsa.user.verifyUser;
    return APIst(endpoint,contentType);
}