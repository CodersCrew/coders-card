import React from 'react';
import { Box } from '@material-ui/core';

import { Layout } from '@/components/Layout';
import { SectionTitle } from '@/components/SectionTitle';
import { LevelRange } from '@/components/Skill';
import { SkillsSection } from '@/components/SkillsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { useDeveloperProfile } from '@/hooks/useDeveloperProfile';

import { useAboutQuery } from './About.query';
import { useAboutStyles } from './About.styles';

type DynamicSkill = Record<string, string | LevelRange>;

const skillMapper = (skillName: string, skills?: DynamicSkill[]) =>
  skills?.map((skill) => ({
    name: skill[`${skillName}Name`] as string,
    value: skill[`${skillName}Value`] as LevelRange,
  }));

export const About = () => {
  const data = useAboutQuery();
  const classes = useAboutStyles();
  const developerProfile = useDeveloperProfile();

  return (
    <Layout
      developerProfile={developerProfile}
      meta={{
        title: data.aboutPageTitle,
        description: data.aboutPageDescription,
        imageUrl: data.aboutPageImage?.publicURL,
      }}
      variant="withDetailsCard"
    >
      <Box className={classes.aboutContentContainer}>
        <SectionTitle className={classes.title}>About me</SectionTitle>
        <Box className={classes.content} dangerouslySetInnerHTML={{ __html: data.description }} />
        <SectionTitle className={classes.title}>My skills</SectionTitle>
        <Box className={classes.content}>
          <SkillsSection
            title="Technologies"
            skills={skillMapper('technology', data.socialMedia.technologies)}
            renderCondition={!!data.socialMedia.technologies?.length}
          />
          <SkillsSection
            title="Tools"
            skills={skillMapper('tool', data.socialMedia.tools)}
            renderCondition={!!data.socialMedia.tools?.length}
          />
          <SkillsSection
            title="Other skills"
            skills={skillMapper('otherSkill', data.socialMedia.otherSkills)}
            renderCondition={!!data.socialMedia.otherSkills?.length}
          />
        </Box>
        <TestimonialsSection testimonials={data.testimonials} />
      </Box>
    </Layout>
  );
};
