import express from "express";
import apiRouter from "./api";
import fs from "fs";
import https from "https";
const server = new express();
server.use(express.urlencoded({extended:false}));
server.use(express.json());
server.use("/api",apiRouter);
server.use((req, res, next) => { 
    if (req.header('x-forwarded-proto') !== 'https')
        res.redirect(`https://${req.header('host')}${req.url}`);
    else
        next();
});
const httpsOptions = {
    cert: fs.readFileSync('./secret/cert.pem'),
    key: fs.readFileSync('./secret/key.pem'),
    passphrase: 'password'
    
};
const httpsServer = https.createServer(httpsOptions, server);
httpsServer.listen(3543);
console.log("https://localhost:3543");
server.listen(1510);
console.log("http://localhost:1510");