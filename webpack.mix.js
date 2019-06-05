const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    module: {
		rules: [{
			test: /\.tag$/,
			exclude: /node_modules/,
			use: [{
				loader: '@riotjs/webpack-loader',
				query: {
					hot: false
				}
			}]
		}
    ]}
});

mix.js('index.js', 'dist/js')
mix.sass('src/hamburger.scss', 'dist/css');
