import { LevelRange } from '../../components/Skill';

export type AboutPageData = {
  aboutPage: {
    frontmatter: {
      aboutPageTitle?: string;
      aboutPageDescription?: string;
      aboutPageImage?: {
        publicURL?: string;
      };
      description: string;
      socialMedia: {
        technologies?: {
          technologyName: string;
          technologyValue: LevelRange;
        }[];
        tools?: {
          toolName: string;
          toolValue: LevelRange;
        }[];
        otherSkills?: {
          otherSkillName: string;
          otherSkillValue: LevelRange;
        }[];
      };
      testimonials?: {
        testimonialText: string;
        testimonialImage: {
          publicURL: string;
        };
        testimonialName: string;
        testimonialJob: string;
      }[];
    };
  };
};
