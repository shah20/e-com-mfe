const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                // products: 'products@http://localhost:8081/remoteEntry.js',
                // cart: 'cart@http://localhost:8082/remoteEntry.js'
                // curriculumMap: 'curriculum_map@http://localhost:8002/remoteEntry.js',
                curriculumMap: 'curriculum_map@https://mfe-ii-261.s3.amazonaws.com/remoteEntry.js'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
};
