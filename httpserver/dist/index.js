"use strict";
// https://engineering.circle.com/https-authorized-certs-with-node-js-315e548354a2
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var https_1 = __importDefault(require("https"));
var app = express_1.default();
var port = 8080; // default port to listen
// define a route handler for the default home page
app.get("/", function (req, res) {
    res.send("Hello world!");
});
// start the Express server
/*
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
*/
https_1.default.createServer({
    ca: fs_1.default.readFileSync("ca-crt.pem"),
    cert: fs_1.default.readFileSync("server-crt.pem"),
    key: fs_1.default.readFileSync("server-key.pem"),
    requestCert: true,
}, app)
    .listen(3000, function () {
    // tslint:disable-next-line:no-console
    console.log("Example app listening on port 3000! Go to https://localhost:3000/");
});
