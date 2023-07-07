/* merge common config with dev/prod config files */
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = (envVars) => {
    const { env } = envVars; // why do we destructure this? 
    const envConfig = require(`./webpack.${env}.js`);
    const config = merge(commonConfig, envConfig);
    return config;
}
