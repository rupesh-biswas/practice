const webpack = require('webpack');

module.exports = function override(config, env) {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        buffer: require.resolve('buffer'),
    };
    config.resolve.extensions = [...config.resolve.extensions, '.ts', '.js'];
    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    ];
    config.module.rules.unshift({
        test: /\.m?js$/,
        resolve: {
            fullySpecified: false, // disable the behavior
        },
    });
    return config;
};