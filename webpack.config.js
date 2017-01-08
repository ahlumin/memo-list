var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry:{
        app:['babel-polyfill', './src/app-entry.js']
    },
    output:{
        filename:'src/assets/js/[name].js'
    },
    resolve:{
        root:[
            path.resolve('src/components'),
            path.resolve('src/template'),
            path.resolve('src/assets'),
            path.resolve('src/store')
        ],
        extensions:['', '.js', '.vue']
    },
    resolveLoader:{
        root:path.resolve('node_modules')
    },
    module:{
        loaders:[
            {
                text:/\.js$/,
                loader:'babel',
                exclude:['node_modules', 'components']
            },
            {
                text:/\.vue$/,
                loader:'vue',
                include:path.resolve('src/components')
            }
        ]
    }
}