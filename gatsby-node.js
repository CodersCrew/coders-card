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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter @infer {
      aboutPageTitle: String
      resumePageTitle: String
      portfolioPageTitle: String
      contactPageTitle: String
      aboutPageDescription: String
      resumePageDescription: String
      portfolioPageDescription: String
      contactPageDescription: String
      aboutPageImage: File @fileByRelativePath
      resumePageImage: File @fileByRelativePath
      portfolioPageImage: File @fileByRelativePath
      contactPageImage: File @fileByRelativePath
      testimonials: [MarkdownRemarkFrontmatterTestimonial]
    }

    type MarkdownRemarkFrontmatterTestimonial {
      testimonialText: String
      testimonialImage: File @fileByRelativePath
      testimonialName: String
      testimonialJob: String
    }

    type MarkdownRemarkFrontmatterSocialMedia {
      twitter: String
      github: String
      instagram: String
      facebook: String
      technologies: [MarkdownRemarkFrontmatterSocialMediaTechnologies]
      tools: [MarkdownRemarkFrontmatterSocialMediaTools]
      otherSkills: [MarkdownRemarkFrontmatterSocialMediaOtherSkills]
    }

    type MarkdownRemarkFrontmatterSocialMediaTechnologies {
      technologyName: String
      technologyValue: Int
    }

    type MarkdownRemarkFrontmatterSocialMediaTools {
      toolName: String
      toolValue: Int
    }

    type MarkdownRemarkFrontmatterSocialMediaOtherSkills {
      otherSkillName: String
      otherSkillValue: Int
    }
  `;

  createTypes(typeDefs);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};
