const getRelPath = path => __dirname + path

export default {
  treeShaking: true,
  disableCSSModules:false,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
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
    }],
  ],
  alias:{
    utils: getRelPath('/src/utils'),
    components: getRelPath('/src/components')
  }
}
