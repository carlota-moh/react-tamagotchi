/* dev configuration */
const webpack = require('webpack')
const ReactRefresgWbpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development',
    devServer : {
        hot: true,
        open: true
    },
    devtool: 'cheap-module-source-map', /* for generating source maps */
    plugins : [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('cmonedero-dev')
        }),
        new ReactRefresgWbpackPlugin()
    ]
}