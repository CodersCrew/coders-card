import { graphql, useStaticQuery } from 'gatsby';

import type { Education, WorkExperience } from '@/typings';

type ResumeData = {
  workExperience: WorkExperience[];
  education: Education[];
};

type QueryResult = {
  resumePage: {
    frontmatter: ResumeData;
  };
};

export const useResumeQuery = () => {
  const result: QueryResult = useStaticQuery(graphql`
    {
      resumePage: markdownRemark(fileAbsolutePath: { regex: "/resume.md/" }) {
        frontmatter {
          workExperience {
            jobName
            jobDescription
            companyName
            startDate
            finishDate
          }
          education {
            schoolName
            course
            description
            startDate
            finishDate
          }
        }
      }
    }
  `);

  return result.resumePage.frontmatter;
};
