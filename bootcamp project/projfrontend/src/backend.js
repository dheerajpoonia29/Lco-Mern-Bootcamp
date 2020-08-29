require("dotenv").config();
export const API = 'http://localhost:8000/api' || process.env.REACT_APP_BACKEND;
console.log('dheearj-in-backend api: ', API)