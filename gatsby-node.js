exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      blogPost: [MarkdownRemarkFrontmatterBlogPost]
      testimonials: [MarkdownRemarkFrontmatterTestimonial]
    }

    type MarkdownRemarkFrontmatterTestimonial {
      testimonialText: String
      testimonialImage: File
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
      blogImage: File
    }
  `;
  createTypes(typeDefs);
};
