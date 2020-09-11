import { LevelRange } from '../../components/Skill';

export type AboutPageData = {
  aboutPage: {
    frontmatter: {
      about_page_title: string;
      description: string;
      social_media: {
        technologies: {
          technology_name: string;
          technology_value: LevelRange;
        }[];
        tools: {
          tool_name: string;
          tool_value: LevelRange;
        }[];
        other_skills: {
          other_skill_name: string;
          other_skill_value: LevelRange;
        }[];
      };
      testimonials: {
        testimonial_text: string;
        testimonial_image: {
          publicURL: string;
        };
        testimonial_name: string;
        testimonial_job: string;
      }[];
    };
  };
};
