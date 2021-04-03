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
            code
            description
            role
            previewNote
            app
            startDate
            finishDate
            mockups
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
