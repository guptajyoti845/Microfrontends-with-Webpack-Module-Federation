const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        publicPath: "http://localhost:3001/",
    },
    devServer: {
        port: 3001,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "microfrontend_header",
            filename: "remoteEntry.js",
            exposes: {
                "./Header": "./src/Header",
            },
            shared: {
                react: { singleton: true, eager: true, requiredVersion: "^18.0.0" },
                "react-dom": { singleton: true, eager: true, requiredVersion: "^18.0.0" },
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
