import { graphql, useStaticQuery } from 'gatsby';

export type Project = {
  projectLabel: string;
  projectCode?: string;
  projectPreviewImage: {
    publicURL: string;
  };
  projectDescription: string;
  projectRole: string;
  projectPreviewNote: string;
  projectApp?: string;
  projectStartDate: string;
  projectFinishDate: string;
  projectMockups?: string;
  projectTechnologies: {
    technologyName: string;
  }[];
  projectName: string;
};

export type PortfolioData = {
  portfolioPageTitle?: string;
  portfolioPageDescription?: string;
  portfolioPageImage?: {
    publicURL?: string;
  };
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
          portfolioPageTitle
          portfolioPageDescription
          portfolioPageImage {
            publicURL
          }
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
