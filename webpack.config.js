var path = require('path');

var config = {
    entry: './src/main.js', // entry point
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js', // place where bundled app will be served
    },
    devServer: {
        inline: true, // autorefresh
        port: 8080 // development port server
    },
    module: {
        rules: [
        {
            test: /\.jsx?$/, // search for js files 
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-1']
            }
        }, 
        {
            test: /\.css?$/, // search for js files 
            loader: ['style-loader','css-loader']
        }
    ]
    },
    mode: 'none'
}
module.exports = config;