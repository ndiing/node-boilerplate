process.on("uncaughtException", (error) => {
    console.log(error);
    // cleanup....
    // process.exit(1)
});
process.on("unhandledRejection", (error) => {
    console.log(error);
    // cleanup....
    // process.exit(1)
});

require("@ndiinginc/env")();

const { getCertsForHostname } = require("@ndiinginc/cert");
const path = require("path");
const fs = require("fs");
const express = require("express");
const http = require("http");
const https = require("https");
const { WebSocketServer } = require("ws");

if (process.env.NODE_ENV === "development") {
    require("./lib/index.js");
}

const options = getCertsForHostname(process.env.HOST);
const app = express();

app.use("/api", require("./api/index.js"));
app.use(express.static(path.join(process.cwd(), "public")));
app.use("*", (req, res) => {
    const stream = fs.createReadStream(path.join(process.cwd(), "public", "index.html"));
    stream.pipe(res);
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer(options, app);

const ws = new WebSocketServer({ noServer: true });
const wss = new WebSocketServer({ noServer: true });

function handleConnection(socket, req) {
    socket.on("error", console.log);
    socket.on("message", (message) => {
        console.log(JSON.parse(message));
        socket.send(JSON.stringify({ message: "pong" }));
    });
    socket.send(JSON.stringify({ message: "hi" }));
}

ws.on("connection", handleConnection);
wss.on("connection", handleConnection);

httpServer.on("upgrade", (req, socket, head) => {
    ws.handleUpgrade(req, socket, head, (sock) => {
        ws.emit("connection", sock, req);
    });
});
httpsServer.on("upgrade", (req, socket, head) => {
    wss.handleUpgrade(req, socket, head, (sock) => {
        ws.emit("connection", sock, req);
    });
});

httpServer.listen(process.env.HTTP_PORT, "0.0.0.0", () => {
    console.log(httpServer.address());
});
httpsServer.listen(process.env.HTTPS_PORT, "0.0.0.0", () => {
    console.log(httpsServer.address());
});
