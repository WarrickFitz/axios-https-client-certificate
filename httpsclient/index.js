const axios = require('axios');
const https = require('https');
const fs = require('fs');

const instance = axios.create({
    httpsAgent: new https.Agent({  
      key: fs.readFileSync('client1-key.pem'), 
      cert: fs.readFileSync('client1-crt.pem'), 
      ca: fs.readFileSync('ca-crt.pem') 
    })
  });

console.log("Start Request");

// Make a request for a user with a given ID
instance.get("https://localhost:3000/")
  .then(function (response) {
    // handle success
    console.log("Response:");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log("End Request");
  });