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
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                modifyVars: {
                                    "primary-color": "#7f5af0",
                                    "white": "#fffffe",
                                    "black": "#16161a",
                                    "body-background": "#16161a",
                                    "component-background": "#16161a",
                                    "font-family": "Open Sans, sans-serif",
                                    "text-color": "fade(@white, 85%)",
                                    "text-color-secondary": "fade(@white, 45%)",
                                    "text-color-inverse": "@white",
                                    "icon-color-hover": "fade(@white, 75%)",
                                    "heading-color": "fade(@white, 85%)",
                                    "text-color-dark": "fade(@black, 85%)",
                                    "text-color-secondary-dark": "fade(@black, 65%)",
                                    "border-color-inverse": "@black",

                                },
                                javascriptEnabled: true
                            }
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