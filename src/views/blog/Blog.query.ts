import { graphql, useStaticQuery } from 'gatsby';

export type SingleBlogPost = {
  blogTitle: string;
  blogLabel: string;
  blogBody: string;
  blogDescription: string;
  blogImage: {
    publicURL: string;
  };
  publishDate: string;
};

type BlogData = {
  blogPageTitle?: string;
  blogPageDescription?: string;
  blogPageImage?: {
    publicURL?: string;
  };
  blogPost?: SingleBlogPost[];
};

type QueryResult = {
  markdownRemark: {
    blogPage: BlogData;
  };
};

export const useBlogQuery = () => {
  const result: QueryResult = useStaticQuery(graphql`
    query BlogPage {
      markdownRemark(fileAbsolutePath: { regex: "/blog/index.md/" }) {
        blogPage: frontmatter {
          blogPageTitle
          blogPageDescription
          blogPageImage {
            publicURL
          }
          blogPost {
            blogTitle
            blogLabel
            blogBody
            blogDescription
            blogImage {
              publicURL
            }
            publishDate
          }
        }
      }
    }
  `);

  return result.markdownRemark.blogPage;
};
