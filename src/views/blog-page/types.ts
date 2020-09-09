export type BlogGQL = {
  markdownRemark: {
    blogPage: {
      blog_page_title: string;
      blog_post: {
        blog_title: string;
        blog_label: string;
        blog_body: string;
        blog_image: {
          publicURL: string;
        };
        publish_date: string;
      }[];
    };
  };
};
