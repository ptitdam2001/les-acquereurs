const { createProxyMiddleware } = require('http-proxy-middleware')

function onProxyRes(res) {
  // add custom header to request
  res.headers['Access-Control-Allow-Credentials'] = 'true'
  res.headers['Access-Control-Allow-Headers'] = 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type'
  res.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, DELETE'
  res.headers['Access-Control-Allow-Origin'] = '*'
}

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8888',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
      onProxyRes,
    })
  )
}
