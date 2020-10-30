export type BlogGQL = {
  markdownRemark: {
    blogPage: {
      blogPageTitle?: string;
      blogPageDescription: string;
      blogPageImage: {
        publicURL: string;
      };
      blogPost?: {
        blogTitle: string;
        blogLabel: string;
        blogBody: string;
        blogDescription: string;
        blogImage: {
          publicURL: string;
        };
        publishDate: string;
      }[];
    };
  };
};
