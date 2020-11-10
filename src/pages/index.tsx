import React, { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SectionTitle } from '../components/SectionTitle';
import { LevelRange } from '../components/Skill';
import { SkillsSection } from '../components/SkillsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { useDeveloperProfile } from '../containers/DeveloperProfile';
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
  title: {
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },

    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 2, 4, 0),
    },
  },
}));

const About: FC<{ data: AboutPageData }> = ({ data }) => {
  const aboutData = data.aboutPage.frontmatter;
  const classes = useStyles();
  const developerProfile = useDeveloperProfile();

  type DynamicSkill = {
    [key: string]: string | LevelRange;
  };

  const skillMapper = (skillName: string, skills?: DynamicSkill[]) =>
    skills?.map((skill) => ({
      name: skill[`${skillName}Name`] as string,
      value: skill[`${skillName}Value`] as LevelRange,
    }));

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
          <SkillsSection
            title="Technologies"
            skills={skillMapper('technology', aboutData.socialMedia.technologies)}
            renderCondition={!!aboutData.socialMedia.technologies?.length}
          />
          <SkillsSection
            title="Tools"
            skills={skillMapper('tool', aboutData.socialMedia.tools)}
            renderCondition={!!aboutData.socialMedia.tools?.length}
          />
          <SkillsSection
            title="Other skills"
            skills={skillMapper('otherSkill', aboutData.socialMedia.otherSkills)}
            renderCondition={!!aboutData.socialMedia.otherSkills?.length}
          />
        </Box>
        <TestimonialsSection testimonials={aboutData.testimonials} />
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
