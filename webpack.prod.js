const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
	mode: "production",
	entry: "./src/client/index.js",
	optimization: {
		minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
	},
	output: {
		libraryTarget: "var",
		library: "Client",
	},
	module: {
		rules: [
			{
				test: "/.js$/",
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|jp(e*)g|svg)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8000, // Convert images < 8kb to base64 strings
							name: "images/[hash]-[name].[ext]",
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/client/views/index.html",
			filename: "./index.html",
		}),
		new CleanWebpackPlugin({
			// Simulate the removal of files
			dry: true,
			// Write Logs to Console
			verbose: true,
			// Automatically remove all unused webpack assets on rebuild
			cleanStaleWebpackAssets: true,
			protectWebpackAssets: false,
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new WorkboxPlugin.GenerateSW(),
	],
};
