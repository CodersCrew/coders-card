export type ProjectGQL = {
  portfolioPage: {
    frontmatter: {
      portfolioPageTitle: string;
      portfolioPageDescription: string;
      portfolioPageImage: {
        publicURL: string;
      };
      projects: {
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
      }[];
    };
  };
};
