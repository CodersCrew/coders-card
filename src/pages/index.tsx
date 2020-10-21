import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import { graphql } from 'gatsby';

import { DetailsCard } from '../components/DetailsCard';
import { Navbar } from '../components/Navbar';
import { SectionTitle } from '../components/SectionTitle';
import { Skill } from '../components/Skill';
import { Testimonial } from '../components/Testimonial';
import { useDeveloperProfile } from '../containers/DeveloperProfile';
import { useComponentType } from '../hooks/useComponentType';
import { AboutPageData } from '../views/about/types';

const portfolioPageItemShadow = '0 40px 50px 0 rgba(103, 118, 128, 0.1)';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    display: 'grid',
    gridTemplateAreas: `
      "navbar"
      "aside"
      "main"`,
    [theme.breakpoints.up('lg')]: {
      gridTemplateAreas: `
      "aside navbar"
      "aside main"`,
      padding: theme.spacing(8, 2, 0, 2),
    },
  },
  aside: {
    gridArea: 'aside',
    display: 'block',
    width: '100%',
    height: 488,
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginBottom: theme.spacing(4),
      height: 288,
    },
    [theme.breakpoints.up('lg')]: {
      position: 'sticky',
      top: theme.spacing(8),
      marginRight: theme.spacing(4),
      width: 280,
      height: 668,
    },
  },
  main: {
    gridArea: 'main',
    width: '100%',
  },
  detailsCard: {
    margin: theme.spacing(0, 3, 4, 3),
    [theme.breakpoints.up('lg')]: {
      height: 668,
      width: 280,
      display: 'block',
      position: 'sticky',
      marginRight: theme.spacing(4),
    },
  },
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 16,
    marginBottom: theme.spacing(7),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(7),
    },

    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, 3, 7, 3),
    },

    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 0, 7, 0),
      display: 'flex',
      flexDirection: 'column',
      boxShadow: portfolioPageItemShadow,
    },
  },
  navbar: {
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },

    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(7),
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
  content: {
    marginBottom: theme.spacing(6),
  },
  skillsHeader: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
  },
  skills: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridRowGap: theme.spacing(4),
    marginBottom: theme.spacing(4),
    gridGap: theme.spacing(5),

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },

    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  project: {
    [theme.breakpoints.up('lg')]: {
      width: 400,
      height: 224,
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
  testimonials: {
    display: 'grid',
    justifyContent: 'center',
    justifyItems: 'center',
    gridTemplateColumns: '1fr',
    gridRowGap: theme.spacing(4),
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
}));

const About: FC<{ data: AboutPageData }> = ({ data }) => {
  const aboutData = data.aboutPage.frontmatter;
  const classes = useStyles();
  const developerProfile = useDeveloperProfile();
  const { componentType, isDesktop, isMobile } = useComponentType();

  const hasTechnologies = aboutData.socialMedia.technologies && aboutData.socialMedia.technologies.length > 0;
  const hasTools = aboutData.socialMedia.tools && aboutData.socialMedia.tools.length > 0;
  const hasOtherSkills = aboutData.socialMedia.otherSkills && aboutData.socialMedia.otherSkills.length > 0;
  const hasTestimonials = aboutData.testimonials && aboutData.testimonials.length > 0;

  return (
    <Container className={classes.container} maxWidth="lg">
      <Helmet>
        <title>{aboutData.aboutPageTitle}</title>
      </Helmet>
      {isDesktop ? (
        <>
          <Box className={classes.aside}>
            <DetailsCard type={componentType} />
          </Box>
          <Navbar
            className={classes.navbar}
            type={componentType}
            fullName={`${developerProfile.firstName} ${developerProfile.lastName}`}
            position={developerProfile.position}
            image={developerProfile.avatar.publicURL}
            resumeLink={developerProfile.cv}
          />
        </>
      ) : (
        <>
          <Navbar
            className={classes.navbar}
            type={componentType}
            fullName={`${developerProfile.firstName} ${developerProfile.lastName}`}
            position={developerProfile.position}
            image={developerProfile.avatar.publicURL}
            resumeLink={developerProfile.cv}
          />
          <Box className={classes.detailsCard}>
            <DetailsCard type={componentType} />
          </Box>
        </>
      )}
      <Box className={classes.main}>
        <Box className={classes.mainContent}>
          <Box className={classes.projectsContainer}>
            <SectionTitle className={classes.title}>About me</SectionTitle>
            <Box className={classes.content}>{aboutData.description}</Box>
            <SectionTitle className={classes.title}>My skills</SectionTitle>
            <Box className={classes.content}>
              {hasTechnologies ? (
                <>
                  <Typography variant="h6" className={classes.skillsHeader}>
                    Technologies
                  </Typography>
                  <Box className={classes.skills}>
                    {aboutData.socialMedia.technologies?.map((item) => (
                      <Skill key={item.technologyName} level={item.technologyValue}>
                        {item.technologyName}
                      </Skill>
                    ))}
                  </Box>
                </>
              ) : null}
              {hasTools ? (
                <>
                  <Typography variant="h6" className={classes.skillsHeader}>
                    Tools
                  </Typography>
                  <Box className={classes.skills}>
                    {aboutData.socialMedia.tools?.map((item) => (
                      <Skill key={item.toolName} level={item.toolValue}>
                        {item.toolName}
                      </Skill>
                    ))}
                  </Box>
                </>
              ) : null}
              {hasOtherSkills ? (
                <>
                  <Typography variant="h6" className={classes.skillsHeader}>
                    Other skills
                  </Typography>
                  <Box className={classes.skills}>
                    {aboutData.socialMedia.otherSkills?.map((item) => (
                      <Skill key={item.otherSkillName} level={item.otherSkillValue}>
                        {item.otherSkillName}
                      </Skill>
                    ))}
                  </Box>
                </>
              ) : null}
            </Box>
            {hasTestimonials ? (
              <>
                <SectionTitle className={classes.title}>Testimonials</SectionTitle>
                <Box className={classes.testimonials}>
                  {aboutData.testimonials?.map((item) => (
                    <Testimonial
                      key={item.testimonialName}
                      isMobile={isMobile}
                      image={item.testimonialImage.publicURL}
                      description={item.testimonialText}
                      labelBold={item.testimonialName}
                      label={item.testimonialJob}
                    />
                  ))}
                </Box>
              </>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default About;

export const aboutPageQuery = graphql`
  {
    aboutPage: markdownRemark(fileAbsolutePath: { regex: "/about-me/index-1.md/" }) {
      frontmatter {
        aboutPageTitle
        description
        socialMedia {
          technologies {
            technologyName
            technologyValue
          }
          tools {
            toolName
            toolValue
          }
          otherSkills {
            otherSkillName
            otherSkillValue
          }
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
`;
