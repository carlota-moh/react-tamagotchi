/* dev configuration */
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map', /* for generating source maps */
    plugins : [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('cmonedero-dev')
        })
    ]
}