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
  developerProfile: {
    frontmatter: {
      last_name: string;
      is_freelancer: boolean;
      first_name: string;
      email: string;
      phone: string;
      country: string;
      city: string;
      avatar: {
        publicURL: string;
      };
      social_media: {
        facebook: string;
        github: string;
        instagram: string;
        twitter: string;
      };
      position: string;
      cv: string;
    };
  };
};
