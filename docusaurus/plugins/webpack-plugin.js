module.exports = function () {
    return {
        name: 'custom-webpack-plugin',
        configureWebpack() {
            return {
                resolve: {
                    fallback: {
                        path: false,
                        fs: false,
                        os: false,
                        crypto: false,
                        stream: false,
                        http: false,
                        https: false,
                        zlib: false,
                        url: false,
                        util: false,
                        buffer: false,
                        assert: false,
                    },
                },
            };
        },
    };
};
