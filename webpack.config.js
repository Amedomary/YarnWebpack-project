const path = require('path');
const devServer = require('webpack-dev-server');

const PATHS = {
    source: path.join(__dirname, 'soucre'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: PATHS.source + '/index.html',
    output: {
        path: PATHS.build,
        filename: '[name].html'
    },
    plugins: [
        new devServer({
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 9000
        })
    ]
};