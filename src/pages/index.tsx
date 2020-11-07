import React, { FC } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SectionTitle } from '../components/SectionTitle';
import { Skill } from '../components/Skill';
import { Testimonial } from '../components/Testimonial';
import { useDeveloperProfile } from '../containers/DeveloperProfile';
import { useComponentType } from '../hooks/useComponentType';
import { AboutPageData } from '../views/about/types';

const useStyles = makeStyles((theme) => ({
  aboutContentContainer: {
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
  const { isMobile } = useComponentType();

  const hasTechnologies = aboutData.socialMedia.technologies && aboutData.socialMedia.technologies.length > 0;
  const hasTools = aboutData.socialMedia.tools && aboutData.socialMedia.tools.length > 0;
  const hasOtherSkills = aboutData.socialMedia.otherSkills && aboutData.socialMedia.otherSkills.length > 0;
  const hasTestimonials = aboutData.testimonials && aboutData.testimonials.length > 0;

  return (
    <Layout
      developerProfile={developerProfile}
      meta={{
        title: aboutData.aboutPageTitle,
        description: aboutData.aboutPageDescription,
        imageUrl: aboutData.aboutPageImage.publicURL,
      }}
      variant="withDetailsCard"
    >
      <Box className={classes.aboutContentContainer}>
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
    </Layout>
  );
};

export default About;

export const aboutPageQuery = graphql`
  {
    aboutPage: markdownRemark(fileAbsolutePath: { regex: "/about-me/index-1.md/" }) {
      frontmatter {
        aboutPageTitle
        aboutPageDescription
        aboutPageImage {
          publicURL
        }
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
