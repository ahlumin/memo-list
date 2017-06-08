var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry:{
        app:path.resolve(__dirname, 'src/app-entry.js')
    },
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'[name].js'
    },
    resolve:{
        modules:[
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules')
        ],
        extensions:['.js', '.vue']
    },

    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
                include:[path.resolve(__dirname, 'src/components')]
            },
            {
                test:/\.js/,
                loader:'babel-loader',
                include:[path.resolve(__dirname, 'src')]
            }
        ]
    }
}
