var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry:{
        app:'./src/app-entry.js'
    },
    output:{
        filename:'src/assets/js/[name].js'
    },
    resolve:{
        root:[
            path.resolve('src/components'),
            path.resolve('src/template'),
            path.resolve('src/assets'),
        ],
        extensions:['', '.js', '.vue']
    },
    resolveLoader:{
        root:path.resolve('node_modules')
    },
    module:{
        loaders:[
            {
                text:/\.vue$/,
                loader:'vue',
                include:path.resolve('src/components')
            }
        ]
    }
}