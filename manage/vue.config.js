module.exports = {
    lintOnSave:'warning',
     devServer: {
    port: 8082, // 端口号
    https: false, // true 配置之后可使用生成 https://localhost:8080/
    hotOnly: false, // 热更新（webpack已实现了，这里false即可）
    
      proxy: { //多个
        // 配置跨域处理 可以设置多个
        '/api': {
          target: 'http://120.76.247.5:2003',
          ws: true,
          changeOrigin: true,
           pathRewrite: {
                    '^/api': '' // 需要rewrite的,
                }
        },
        
        '/sje': {
          target: 'http://1.12.227.140:8081',
          ws: true,
          changeOrigin: true,
           pathRewrite: {
                    '^/sje': '' // 需要rewrite的,
                }
        }
        
      }
    // before: app => {}
  },
}