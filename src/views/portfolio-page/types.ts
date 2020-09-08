export type ProjectGQL = {
  portfolioPage: {
    frontmatter: {
      portfolio_page_title: string;
      projects: {
        project_label: string;
        project_code: string;
        project_preview_image: {
          publicURL: string;
        };
        project_description: string;
        project_role: string;
        project_preview_note: string;
        project_app: string;
        project_start_date: string;
        project_finish_date: string;
        project_mockups: string;
        project_technologies: {
          technology_name: string;
        }[];
        project_name: string;
      }[];
    };
  };
};
