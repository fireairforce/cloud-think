const getRelPath = path => __dirname + path;

export default {
    treeShaking: false,
    disableCSSModules: false,
    plugins: [
        [
            'umi-plugin-react',
            {
                antd: true,
                dva: true,
                dynamicImport: {
                  webpackChunkName: true,
                  loadingComponent: '/components/loading.js',
                  level: 1
                },
                title: '云想开始估值',
                dll: false,
                routes: {
                    exclude: [
                        /models\//,
                        /services\//,
                        /model\.(t|j)sx?$/,
                        /service\.(t|j)sx?$/,
                        /components\//,
                    ],
                },
            },
        ],
    ],
    alias: {
        utils: getRelPath('/src/utils'),
        components: getRelPath('/src/components'),
        assets: getRelPath('/src/assets'),
    },
};
