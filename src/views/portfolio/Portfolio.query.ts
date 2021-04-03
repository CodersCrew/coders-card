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
            projectName
            projectLabel
            projectCode
            projectDescription
            projectRole
            projectPreviewNote
            projectApp
            projectStartDate
            projectFinishDate
            projectMockups
            projectPreviewImage {
              publicURL
            }
            projectTechnologies {
              technologyName
            }
          }
        }
      }
    }
  `);

  return result.portfolioPage.frontmatter;
};
