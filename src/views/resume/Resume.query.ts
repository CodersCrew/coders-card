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
            startJobDate
            finishJobDate
            jobTitle
            companyName
            jobDescription
          }
          education {
            startSchoolDate
            finishSchoolDate
            schoolName
            course
            educationDescription
          }
        }
      }
    }
  `);

  return result.resumePage.frontmatter;
};
