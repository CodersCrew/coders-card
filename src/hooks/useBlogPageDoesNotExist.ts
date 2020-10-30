import { graphql, useStaticQuery } from 'gatsby';

import { BlogGQL } from '../views/blog-page/types';

export const useBlogPageDoesNotExist = (): boolean => {
  const data: BlogGQL = useStaticQuery(
    graphql`
      query BlogPageExists {
        markdownRemark(fileAbsolutePath: { regex: "/blog/index-1.md/" }) {
          blogPage: frontmatter {
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
    `,
  );

  return data.markdownRemark.blogPage.blogPost?.length === 0;
};
