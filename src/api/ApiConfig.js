export const endpointURL = process.env.REACT_APP_API_URL;

// export const endpointURL1 =
//   process.env.NODE_ENV === "production"
//     ? process.env.REACT_APP_API_URL
//     : "http://microservice-arif/api-backend";


// let API_ENDPOINT
// if (process.env.NODE_ENV === "production") {
//   API_ENDPOINT = "https://example.com"
// } else {
//   API_ENDPOINT = "https://dev.example.com"
// }


export const endpointNames = {
    patient:{
        dashboard: {
            billSummary: "/dashboard/billSummary",
            invoiceSummary: "/dashboard/invoiceSummary",
        }
    }
}