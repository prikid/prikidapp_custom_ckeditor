/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

'use strict';

/* eslint-env node */

const path = require('path');
const webpack = require('webpack');
const CKEStyles = require('@ckeditor/ckeditor5-dev-utils').styles
const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const CKERegex = {
	svg: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
	css: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css/,
};
const targetSVG = /(\.(png|jpe?g|gif|webp|avif)$|^((?!font).)*\.svg$)/;
const targetFont = /(\.(woff2?|ttf|eot|otf)$|font.*\.svg$)/;
const targetCSS = /\.p?css$/;


const config = {
	devtool: 'source-map',
	performance: {hints: false},

	entry: path.resolve(__dirname, 'src', 'ckeditor.js'),

	output: {
		// The name under which the editor will be exported.
		library: 'ClassicEditor',

		path: path.resolve(__dirname, 'build'),
		filename: 'ckeditor.js',
		libraryTarget: 'umd',
		libraryExport: 'default'
	},

	optimization: {
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					output: {
						// Preserve CKEditor 5 license comments.
						comments: /^!/
					}
				},
				extractComments: false
			})
		]
	},

	plugins: [
		new CKEditorWebpackPlugin({
			// UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
			// When changing the built-in language, remember to also change it in the editor's configuration (src/ckeditor.js).
			language: 'en',
			// additionalLanguages: 'all'
			addMainLanguageTranslationsToAllAssets: true
		})

		// new webpack.BannerPlugin( {
		// 	banner: bundler.getLicenseBanner(),
		// 	raw: true
		// } )
	],

	module: {
		rules: [
			{
				test: CKERegex.svg,
				use: ['raw-loader']
			},
			{
				test: CKERegex.css,
				use: [
					{
						loader: 'style-loader',
						options: {
							injectType: 'singletonStyleTag',
							attributes: {
								'data-cke': true
							}
						}
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: CKEStyles.getPostCssConfig({
								themeImporter: {
									themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
								},
								minify: true
							})
						}
					}
				]
			}
		]
	},
	// resolve: {
	// 	fallback: {
	// 		"fs": false,
	// 		"path": false,
	// 		"os": false,
	// 	},
	// }
};

config.module.rules.forEach((rule) => {
	if (rule.test.toString() === targetSVG.toString()) {
		rule.exclude = CKERegex.svg;
	}

	if (rule.test.toString() === targetFont.toString()) {
		rule.exclude = CKERegex.svg;
	}

	if (rule.test.toString() === targetCSS.toString()) {
		rule.exclude = CKERegex.css;
	}
});

module.exports = config;
