import { API } from "../../backend";

export const getmeToken = (userId, token) => {
  return fetch(`${API}/payment/gettoken/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      // ERROR: here Promise { <state>: "pending" }
      console.log("dheeraj-in-paymenthelper.js getMeToken: ", response.json())
      // return response.json();
    })
    .catch(err => console.log("dheeraj-in-payemntbhelper.js getmetoken: ", err));
};

// export const getProducts = () => {
//   return fetch(`${API}/products`, { method: "GET" })
//     .then(response => {
//       return response.json();
//     })
//     .catch(err => console.log(err));
// };


export const processPayment = (userId, token, paymentInfo) => {
  return fetch(`${API}/payment/braintree/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(paymentInfo)
  })
    .then(reponse => {
      return reponse.json();
    })
    .catch(err => console.log(err));
};
