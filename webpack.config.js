// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");

const isProduction = process.env.NODE_ENV === "production";

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js", // Nama file output
        libraryTarget: "commonjs2", // Menetapkan output sebagai CommonJS
    },
    target: "node", // Menambahkan target untuk Node.js
    plugins: [
        // Tambahkan plugin yang diperlukan di sini
    ],
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
    }
    return config;
};
