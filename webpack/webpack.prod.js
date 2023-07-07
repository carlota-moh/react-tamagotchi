/* production configuration */
const webpack = require('webpack')


module.exports = {
    mode: 'production',
    devtool: 'source-map', /* for generating source maps */
    plugins : [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('cmonedero-prod')
        })
    ]
}