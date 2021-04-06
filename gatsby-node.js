/* eslint-disable no-param-reassign */
const remark = require('remark');
const remarkHTML = require('remark-html');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const convertMarkdown = (markdown) => {
  return remark().use(remarkHTML).processSync(markdown).toString();
};

exports.onCreateNode = ({ node }) => {
  if (node.frontmatter) {
    if (node.frontmatter.description) {
      const markdown = node.frontmatter.description;
      node.frontmatter.description = convertMarkdown(markdown);
      return node;
    }

    if (node.frontmatter.projects) {
      node.frontmatter.projects.forEach((project) => {
        const markdownDescription = project.projectDescription;
        const markdownRole = project.projectRole;
        project.projectDescription = convertMarkdown(markdownDescription);
        project.projectRole = convertMarkdown(markdownRole);
      });
      return node;
    }
  }
  return node;
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};
