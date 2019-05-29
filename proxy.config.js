const proxy = [
  {
    context: '/',
    target: 'http://localhost:8080',
    pathRewrite: { '^/api': '' }
  }
];
module.exports = proxy;
