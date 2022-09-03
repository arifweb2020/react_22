import axios from "axios";
import { endpointURL } from "./ApiConfig";
/**
 *
 * @param {String} method accepts API method (default - POST) - GET, POST
 * @param {String} endpointName endpoint name to be added after DNS
 * @param {Object} paramObj (Optional) stringified object with parameters
 * @returns  returns axios object
 */
export const APIst = (endpointName, contentType = "application/json") => {
  const method = "POST";
  return axios.create({
    method: method,
    url: endpointName,
    baseURL: endpointURL + "" + endpointName,
    headers: {
      "Content-Type": contentType
    },
    data: {},
  });
};

export const APIWithToken = (endpointName, authToken = "Bearer " + localStorage.getItem("token")) => {
  const method = "POST";
  return axios.create({
    method: method,
    url: endpointName,
    baseURL: endpointURL + "" + endpointName,
    headers: {
      "Content-Type":"application/json",
      "Authorization": authToken
    },
    data: {},
  });
};
