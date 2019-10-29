// https://engineering.circle.com/https-authorized-certs-with-node-js-315e548354a2

import express from "express";
import fs from "fs";
import https from "https";

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
/*
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
*/

https.createServer({
    ca: fs.readFileSync("ca-crt.pem"),
    cert: fs.readFileSync("server-crt.pem"),
    key: fs.readFileSync("server-key.pem"),
    requestCert: true,
}, app)
.listen(3000, () => {
    // tslint:disable-next-line:no-console
    console.log("Example app listening on port 3000! Go to https://localhost:3000/");
});
