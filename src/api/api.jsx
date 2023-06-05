import axios from "axios";
// token decryption  
// const CryptoJS = require("crypto-js"); 
// const passphrase = `${process.env.REACT_APP_ENCRYPT_KEY}`;
const passphrase = "U2FsdGVkX19GgWeS66m0xxRUVxfpI60uVkWRedyU15I";
// import dotenv from 'dotenv';
// dotenv.config();
if(localStorage.getItem("_square_token") == null){
    var encryptText = "";
} 
else {
    var encryptText = localStorage.getItem("_square_token");
    console.log(encryptText);

} 

const instance = axios.create({
  // baseURL : 'http://0.0.0.0:8000/api/v1/',
  baseURL : 'https://web-magicsubscribe.bunnyenv.com/api/v1/',
  // baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    Authorization: `Bearer ${encryptText}`,
    "Content-Type": "application/json",
  },
  // ... other options
});

export default instance;