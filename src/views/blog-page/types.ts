export type BlogGQL = {
  markdownRemark: {
    blogPage: {
      blogPostTitle?: string;
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
