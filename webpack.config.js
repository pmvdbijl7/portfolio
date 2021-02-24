const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
require('dotenv/config');

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "less-loader",
                        options: {
                            modifyVars: {
                                "primary-color": "#7f5af0"
                            },
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path][name]-[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        host: process.env.IP_ADDRESS,
        port: process.env.PORT,
        disableHostCheck: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "src", "index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};