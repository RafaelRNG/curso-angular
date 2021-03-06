import * as jsonServer from "json-server";
import { Express } from "express";

import * as fs from "fs";
import * as https from "https";

import { handleAuthentication } from "./auth";
import { handleAuthorization } from "./authz";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

//middle para login
server.post("/login", handleAuthentication);
server.use("/orders", handleAuthorization);

server.use(router);

const options = {
   cert: fs.readFileSync("./backend/keys/cert.pem"),
   key: fs.readFileSync("./backend/keys/key.pem")
}

https.createServer(options, server)
   .listen(3003, () => console.log("Json server is running on https://localhost:3003"));