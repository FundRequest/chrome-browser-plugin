const webpack = require("webpack");
const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    entry: {
        popup: path.join(__dirname, '../src/Popup.ts'),
        options: path.join(__dirname, '../src/Options.ts'),
        background: path.join(__dirname, '../src/Background.ts'),
        github: path.join(__dirname, '../src/content_scripts/github/Github.ts'),
        fundrequest: path.join(__dirname, '../src/inject_scripts/fnd/FundRequest.ts')
    },
    output: {
        path: path.join(__dirname, '../dist/js'),
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: "initial"
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    'scss': 'vue-style-loader!css-loader!sass-loader',
                    'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                }
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.esm.js$/,
            loader: 'babel-loader',
            include: [
                path.resolve('node_modules', 'vue/dist'),
            ]
        }, {
            test: /\.scss?$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
        }, {
            test: /\.css?$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
        }, {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                appendTsSuffixTo: [/\.vue$/],
            }
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'jquery$': 'jquery/dist/jquery.min.js',
            'web3$': 'web3/dist/web3.min.js',
            'sweetalert2$': 'sweetalert2/dist/sweetalert2.all.min.js',
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        // exclude locale files in moment
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ]
};
