const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const enhanceWebpackConfig = (config) => {
  config.module.rules.push({
    test: /\.md$/,
    loader: 'frontmatter-markdown-loader',
  });

  return config;
};

module.exports = withBundleAnalyzer({
  future: { webpack5: true },
  webpack: enhanceWebpackConfig,
});
