module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:5000/api/auth',
          ws: true,
          changeOrigin: true
        }
      }
    }
}