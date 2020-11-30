/* eslint-disable no-param-reassign*/
const remark = require('remark');
const remarkHTML = require('remark-html');

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

    if (node.frontmatter.blogPost) {
      node.frontmatter.blogPost.forEach((post) => {
        const markdown = post.blogBody;
        post.blogBody = convertMarkdown(markdown);
      });
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
      blogPageTitle: String
      resumePageTitle: String
      portfolioPageTitle: String
      contactPageTitle: String
      aboutPageDescription: String
      blogPageDescription: String
      resumePageDescription: String
      portfolioPageDescription: String
      contactPageDescription: String
      aboutPageImage: File @fileByRelativePath
      blogPageImage: File @fileByRelativePath
      resumePageImage: File @fileByRelativePath
      portfolioPageImage: File @fileByRelativePath
      contactPageImage: File @fileByRelativePath
      blogPost: [MarkdownRemarkFrontmatterBlogPost]
      testimonials: [MarkdownRemarkFrontmatterTestimonial]
    }

    type MarkdownRemarkFrontmatterTestimonial {
      testimonialText: String
      testimonialImage: File @fileByRelativePath
      testimonialName: String
      testimonialJob: String
    }

    type MarkdownRemarkFrontmatterBlogPost {
      publishDate(
        difference: String
        formatString: String
        fromNow: Boolean
        locale: String
      ): Date
      blogTitle: String
      blogLabel: String
      blogDescription: String
      blogBody: String
      blogImage: File @fileByRelativePath
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
