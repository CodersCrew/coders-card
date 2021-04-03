import { graphql, useStaticQuery } from 'gatsby';

type WorkExperience = {
  startJobDate: string;
  finishJobDate: string;
  jobTitle: string;
  companyName: string;
  jobDescription: string;
};

type Education = {
  startSchoolDate: string;
  finishSchoolDate: string;
  schoolName: string;
  course: string;
  educationDescription: string;
};

type ResumeData = {
  resumePageTitle?: string;
  resumePageDescription?: string;
  resumePageImage?: {
    publicURL?: string;
  };
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
          resumePageTitle
          resumePageDescription
          resumePageImage {
            publicURL
          }
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
