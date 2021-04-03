import { graphql, useStaticQuery } from 'gatsby';

import type { Image } from '@/typings';

type HeadData = {
  meta: {
    frontmatter: {
      title: string;
      description: string;
      image: Image;
      favicon: Image;
      language: string;
    };
  };
  developer: {
    frontmatter: {
      firstName: string;
      lastName: string;
    };
  };
};

export const useHeadQuery = () => {
  const {
    meta: { frontmatter: meta },
    developer: { frontmatter: developer },
  }: HeadData = useStaticQuery(graphql`
    query {
      meta: markdownRemark(fileAbsolutePath: { regex: "/metadata.md/" }) {
        frontmatter {
          title
          description
          image {
            publicURL
          }
          favicon {
            publicURL
          }
          language
        }
      }
      developer: markdownRemark(fileAbsolutePath: { regex: "/developer.md/" }) {
        frontmatter {
          firstName
          lastName
        }
      }
    }
  `);

  return { meta, developer };
};
