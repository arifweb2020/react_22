export const endpointURL = process.env.REACT_APP_API_URL;

// export const endpointURL1 =
//   process.env.NODE_ENV === "production"
//     ? process.env.REACT_APP_API_URL
//     : "http://microservice-arif/api-backend";



export const endpointNames = {
    patient:{
        dashboard: {
            billSummary: "/dashboard/billSummary",
            invoiceSummary: "/dashboard/invoiceSummary",
        }
    }
}