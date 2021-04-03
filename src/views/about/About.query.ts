import { graphql, useStaticQuery } from 'gatsby';

import type { Skill, Testimonial } from '@/typings';

type AboutData = {
  description: string;
  skills: Skill[];
  testimonials?: Testimonial[];
};

type QueryResult = {
  aboutPage: {
    frontmatter: AboutData;
  };
};

export const useAboutQuery = () => {
  const result: QueryResult = useStaticQuery(graphql`
    {
      aboutPage: markdownRemark(fileAbsolutePath: { regex: "/about-me.md/" }) {
        frontmatter {
          description
          skills {
            skillName
            skillCategory
            skillIcon {
              publicURL
            }
            skillValue
          }
          testimonials {
            testimonialText
            testimonialImage {
              publicURL
            }
            testimonialName
            testimonialJob
          }
        }
      }
    }
  `);

  return result.aboutPage.frontmatter;
};
