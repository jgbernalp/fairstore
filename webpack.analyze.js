const config = require('./webpack.config');
const merge = require('webpack-merge');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(config, {
  plugins: [
    new BundleAnalyzer({
      analyzerPort: 8090,
      openAnalyzer: true,
      defaultSizes: 'gzip',
    }),
  ],
});
