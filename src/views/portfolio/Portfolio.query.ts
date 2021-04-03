import { graphql, useStaticQuery } from 'gatsby';

import type { Project } from '@/typings';

export type PortfolioData = {
  projects: Project[];
};

type QueryResult = {
  portfolioPage: {
    frontmatter: PortfolioData;
  };
};

export const usePortfolioQuery = () => {
  const result: QueryResult = useStaticQuery(graphql`
    query IndexPageQuery {
      portfolioPage: markdownRemark(fileAbsolutePath: { regex: "/portfolio.md/" }) {
        frontmatter {
          projects {
            name
            label
            description
            role
            previewNote
            startDate
            finishDate
            buttons {
              name
              icon
              url
            }
            previewImage {
              publicURL
            }
            technologies {
              name
            }
          }
        }
      }
    }
  `);

  return result.portfolioPage.frontmatter;
};
