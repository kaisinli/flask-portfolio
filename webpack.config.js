
module.exports = {
    entry: [
        './app/js/app.jsx'
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            { 
                test: /\.css$/, 
                use: [ 'style-loader', 'css-loader' ] 
            },
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/app/static'
    }
}