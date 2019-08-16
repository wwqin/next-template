const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require("path");

module.exports = withCSS(withLess({
  webpack(config, options) {
    config.module.rules.push(
      {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    });
    config.plugins.push(
      new MonacoWebpackPlugin()
    );
    return config
  },
  useFileSystemPublicRoutes: false,//文件路由
  generateEtags: false,
  distDir: 'build',
  generateBuildId: async () => {
    return 'my-build-id'
  },
  pageExtensions: ['jsx', 'js']
}))

