const path = require('path')
const { override } = require('customize-cra');

const rewiredSourceMap = () => config => {
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
  // 这里要用path.resolve，不能直接 './src'
  config.resolve.alias['@'] = path.resolve(__dirname, './src')
  return config;
};

module.exports = override(
  // new BundleAnalyzerPlugin(),
  rewiredSourceMap()
);
