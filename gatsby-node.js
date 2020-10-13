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

    type MarkdownRemarkFrontmatterSocialMediaOtherSkills {}
      otherSkillName: String
      otherSkillValue: Int
    }
  `;
  createTypes(typeDefs);
};
