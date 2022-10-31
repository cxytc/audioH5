module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    // https: true,
    proxy: {
      "/monitor": {
        target: "http://122.112.234.240:9007", // 这里填入你要请求的接口的前缀

        ws: true, // 代理websocked

        changeOrigin: true, // 虚拟的站点需要更换origin

        secure: false, // 是否https接口，我用的http但是我变成false他打包后会报错，所以先true
        pathRewrite: {
          "^/monitor": "monitor", // 重写路径
        },
      },
    },
  },

  css: {
    // loaderOptions: {
    //   css: {},
    //   postcss: {
    //     plugins: [
    //       require("postcss-px2rem")({
    //         remUnit: 37.5,
    //       }),
    //     ],
    //   },
    // },
  },
};
