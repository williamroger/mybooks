const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8888',
    pathRewrite: { '^/api': '' }
  }
];
module.exports = proxy;