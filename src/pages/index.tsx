import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Typography, Container, Box, makeStyles, Card } from '@material-ui/core';

import { useComponentType } from '../hooks/useComponentType';
import { DetailsCard } from '../components/DetailsCard';
import { SectionTitle } from '../components/SectionTitle';
import { Skill } from '../components/Skill';
import { Testimonial } from '../components/Testimonial';

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
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 16,
    marginBottom: theme.spacing(7),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(7),
    },

    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: theme.spacing(7),
      boxShadow: portfolioPageItemShadow,
    },
  },
  navbar: {
    gridArea: 'navbar',
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
  const { componentType, isDesktop, isMobile } = useComponentType();

  return (
    <Container className={classes.container} maxWidth="lg">
      <Helmet>
        <title>{aboutData.about_page_title}</title>
      </Helmet>
      {isDesktop && (
        <Box className={classes.aside}>
          <DetailsCard type={componentType} />
        </Box>
      )}
      <Card className={classes.navbar}>navbar</Card>
      <Box className={classes.main}>
        <Box className={classes.mainContent}>
          <Box className={classes.projectsContainer}>
            <SectionTitle className={classes.title}>About me</SectionTitle>
            <Box className={classes.content}>{aboutData.description}</Box>
            <SectionTitle className={classes.title}>My skills</SectionTitle>
            <Box className={classes.content}>
              <Typography variant="h6" className={classes.skillsHeader}>
                Technologies
              </Typography>
              <Box className={classes.skills}>
                {aboutData.social_media.technologies.map((item) => (
                  <Skill level={item.technology_value}>{item.technology_name}</Skill>
                ))}
              </Box>
              <Typography variant="h6" className={classes.skillsHeader}>
                Tools
              </Typography>
              <Box className={classes.skills}>
                {aboutData.social_media.tools.map((item) => (
                  <Skill level={item.tool_value}>{item.tool_name}</Skill>
                ))}
              </Box>
              <Typography variant="h6" className={classes.skillsHeader}>
                Other skills
              </Typography>
              <Box className={classes.skills}>
                {aboutData.social_media.other_skills.map((item) => (
                  <Skill level={item.other_skill_value}>{item.other_skill_name}</Skill>
                ))}
              </Box>
            </Box>
            <SectionTitle className={classes.title}>Testimonials</SectionTitle>
            <Box className={classes.testimonials}>
              {aboutData.testimonials.map((item) => (
                <Testimonial
                  isMobile={isMobile}
                  image={item.testimonial_image.publicURL}
                  description={item.testimonial_text}
                  labelBold={item.testimonial_name}
                  label={item.testimonial_job}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default About;

export const aboutPageQuery = graphql`
  {
    aboutPage: markdownRemark(fileAbsolutePath: { regex: "/about/index-1.md/" }) {
      frontmatter {
        about_page_title
        description
        social_media {
          technologies {
            technology_name
            technology_value
          }
          tools {
            tool_name
            tool_value
          }
          other_skills {
            other_skill_name
            other_skill_value
          }
        }
        testimonials {
          testimonial_text
          testimonial_image {
            publicURL
          }
          testimonial_name
          testimonial_job
        }
      }
    }
  }
`;
