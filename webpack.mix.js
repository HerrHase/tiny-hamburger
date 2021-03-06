const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
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
			test: /\.riot$/,
			exclude: /node_modules/,
			use: [{
				loader: '@riotjs/webpack-loader',
				query: {
					hot: false
				}
			}]
		}
    ]},
    plugins: [
       new ReplaceInFileWebpackPlugin([{
           dir: 'dist/css',
           files: ['fonts.css'],
           rules: [{
               search: /PxPlus_IBM_VGA8/ig,
               replace: '/fonts/PxPlus_IBM_VGA8'
           }]
       },{
           dir: 'dist/css',
           files: ['icomoon.css'],
           rules: [{
               search: /fonts\/icomoon/ig,
               replace: '/fonts/icomoon'
           }]
       }])
    ]
});

mix.js('demo-386-left.js', 'dist/js')
mix.js('demo-386-top.js', 'dist/js')
mix.js('demo-flat-left.js', 'dist/js')
mix.copy('src/fonts/stylesheet.css', 'dist/css/fonts.css');
mix.sass('src/demo-386-left.scss', 'dist/css');
mix.sass('src/demo-386-top.scss', 'dist/css');
mix.sass('src/demo-flat-left.scss', 'dist/css');
mix.copy('src/fonts', 'dist/fonts');
mix.styles('src/icomoon/style.css', 'dist/css/icomoon.css')
mix.copy('src/icomoon/fonts', 'dist/fonts');
