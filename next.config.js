const withPreact = (config, { dev, isServer }) => {
  if (!dev && !isServer) {
    Object.assign(config.resolve.alias, {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
    });
  }

  return config;
};

const enhanceWebpackConfig = (config) => {
  config.module.rules.push({
    test: /\.md$/,
    loader: 'frontmatter-markdown-loader',
  });

  return config;
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  future: { webpack5: true },
  target: 'serverless',
  webpack: (config, options) => {
    let enhancedConfig = withPreact(config, options);
    enhancedConfig = enhanceWebpackConfig(config);

    return enhancedConfig;
  },
});
