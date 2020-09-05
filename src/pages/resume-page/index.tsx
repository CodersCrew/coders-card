import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Container, Box, makeStyles, Card, useTheme, useMediaQuery, Divider } from '@material-ui/core';

import { DetailsCard } from '../../components/DetailsCard';
import { SectionTitle } from '../../components/SectionTitle';
import { ResumeList } from '../../components/ResumeList';

import { ResumePageData } from '../../views/resume-page/types';
import { dataResumePage } from '../../views/resume-page/utils';

const portfolioPageItemShadow = '0 40px 50px 0 rgba(103, 118, 128, 0.1)';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      padding: theme.spacing(8, 2, 0, 2),
    },
  },
  aside: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      position: 'sticky',
      top: theme.spacing(8),
      height: 668,
      width: 280,
      marginRight: theme.spacing(4),
    },
  },
  main: {
    [theme.breakpoints.up('lg')]: {
      width: '100%',
    },
  },
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 16,
    margin: theme.spacing(0, 0, 7, 0),

    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, 3, 7, 3),
    },

    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(0, 0, 7, 0),
      boxShadow: portfolioPageItemShadow,
    },
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: portfolioPageItemShadow,
    borderRadius: 8,
    height: 120,
    width: '100%',
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(4),
    },

    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(7),
      height: 56,
    },
  },
  projectsContainer: {
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
      margin: theme.spacing(0, 2, 4, 2),
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

const IndexPage: FC<{ data: ResumePageData }> = ({ data }) => {
  const { title, education, workexperience } = dataResumePage(data);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = !isMobile && !isTablet;
  return (
    <Container className={classes.container} maxWidth="lg">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {isDesktop && (
        <Box className={classes.aside}>
          <DetailsCard type="desktop" />
        </Box>
      )}
      <Box className={classes.main}>
        <Card className={classes.navbar}>navbar</Card>
        <Box className={classes.mainContent}>
          <Box className={classes.projectsContainer}>
            <SectionTitle className={classes.title}>Work Experience</SectionTitle>
            <Box className={classes.project}>
              {workexperience.map((item, index) => (
                <Box key={index}>
                  <Divider className={classes.divider} orientation="vertical" />
                  <ResumeList isMobile={isMobile ? true : false} {...item} />
                  <Divider className={classes.divider} orientation="vertical" />
                </Box>
              ))}
            </Box>
            <SectionTitle className={classes.title}>Education</SectionTitle>
            {education.map((item, index) => (
              <Box key={index}>
                <Divider className={classes.divider} orientation="vertical" />
                <ResumeList isMobile={isMobile ? true : false} {...item} />
                <Divider className={classes.divider} orientation="vertical" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default IndexPage;

export const resumePageQuery = graphql`
  {
    resumePage: markdownRemark(fileAbsolutePath: { regex: "/resume/index-1.md/" }) {
      frontmatter {
        resumePageTitle
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

// developerProfile: markdownRemark(fileAbsolutePath: { regex: "/developer-profile/index-1.md/" }) {
//   frontmatter {
//     firstName
//     lastName
//     isFreelancer
//     email
//     country
//     city
//     phone
//     avatar {
//       publicURL
//     }
//     socialMedia {
//       facebook
//       github
//       instagram
//       twitter
//     }
//     position
//     cv
//   }
// }
