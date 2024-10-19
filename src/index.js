require("@ndiinginc/env")();
const express = require("express");
const { getCertsForHostname } = require("@ndiinginc/cert");
const http = require("http");
const https = require("https");
const { redirect } = require("./middleware/index.js");

const options = getCertsForHostname("localhost");
const app = express();

// app.use(redirect());
app.use("/api", require("./api/index.js"));

const httpServer = http.createServer(app);
const httpsServer = https.createServer(options, app);

httpServer.listen(process.env.HTTP_PORT, "0.0.0.0", () => console.log(httpServer.address()));
httpsServer.listen(process.env.HTTPS_PORT, "0.0.0.0", () => console.log(httpsServer.address()));
