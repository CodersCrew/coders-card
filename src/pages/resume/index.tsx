import React, { FC } from 'react';
import { Box, Divider, makeStyles } from '@material-ui/core';
import { graphql } from 'gatsby';

import { Layout } from '../../components/Layout';
import { ResumeList } from '../../components/ResumeList';
import { SectionTitle } from '../../components/SectionTitle';
import { useDeveloperProfile } from '../../containers/DeveloperProfile';
import { useComponentType } from '../../hooks/useComponentType';
import { ResumePageData } from '../../views/resume-page/types';

const useStyles = makeStyles((theme) => ({
  resumePageContainer: {
    borderRadius: 16,
    padding: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      padding: theme.spacing(4),
    },
  },
  title: {
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },

    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 2, 4, 0),
    },
  },
  divider: {
    height: 16,
    width: 2,
    backgroundColor: theme.palette.divider,
  },
  project: {
    marginBottom: theme.spacing(5),
  },
}));

const ResumePage: FC<{ data: ResumePageData }> = ({ data }) => {
  const resumeData = data.resumePage.frontmatter;
  const classes = useStyles();
  const developerProfile = useDeveloperProfile();
  const { isMobile } = useComponentType();

  return (
    <Layout
      developerProfile={developerProfile}
      meta={{
        title: resumeData.resumePageTitle,
        description: resumeData.resumePageDescription,
        imageUrl: resumeData.resumePageImage.publicURL,
      }}
    >
      <Box className={classes.resumePageContainer}>
        <SectionTitle className={classes.title}>Work Experience</SectionTitle>
        <Box className={classes.project}>
          {resumeData.workExperience.map((item) => (
            <Box key={`${item.companyName}-${item.jobTitle}`}>
              <Divider className={classes.divider} orientation="vertical" />
              <ResumeList
                isMobile={isMobile}
                labelText={`${item.startJobDate} - ${item.finishJobDate}`}
                headerText={item.jobTitle}
                title={item.companyName}
                description={item.jobDescription}
              />
              <Divider className={classes.divider} orientation="vertical" />
            </Box>
          ))}
        </Box>
        <SectionTitle className={classes.title}>Education</SectionTitle>
        {resumeData.education.map((item) => (
          <Box key={`${item.schoolName}-${item.educationDescription}`}>
            <Divider className={classes.divider} orientation="vertical" />
            <ResumeList
              isMobile={isMobile}
              labelText={`${item.startSchoolDate} - ${item.finishSchoolDate}`}
              headerText={item.course}
              title={item.schoolName}
              description={item.educationDescription}
            />
            <Divider className={classes.divider} orientation="vertical" />
          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export default ResumePage;

export const resumePageQuery = graphql`
  {
    resumePage: markdownRemark(fileAbsolutePath: { regex: "/resume/index-1.md/" }) {
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
`;
