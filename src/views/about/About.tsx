import React from 'react';
import { Box } from '@material-ui/core';
import marked from 'marked';

import { SectionTitle } from '@/components/SectionTitle';
import { SkillsSection } from '@/components/SkillsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { aboutMe } from '@/data/about-me';
import type { Skill } from '@/typings';

import { useAboutStyles } from './About.styles';

const description = marked(aboutMe.description);

export const About = () => {
  const classes = useAboutStyles();

  const categorizedSkills = aboutMe.skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const { category } = skill;

    return acc[category] ? { ...acc, [category]: [...acc[category], skill] } : { ...acc, [category]: [skill] };
  }, {});

  return (
    <Box className={classes.aboutContentContainer}>
      <SectionTitle className={classes.title}>About me</SectionTitle>
      <Box className={classes.content} dangerouslySetInnerHTML={{ __html: description }} />
      <SectionTitle className={classes.title}>My skills</SectionTitle>
      <Box className={classes.content}>
        {Object.keys(categorizedSkills).map((skillSectionTitle) => (
          <SkillsSection
            key={skillSectionTitle}
            title={skillSectionTitle}
            skills={categorizedSkills[skillSectionTitle]}
          />
        ))}
      </Box>
      {aboutMe.testimonials?.length ? <TestimonialsSection testimonials={aboutMe.testimonials} /> : null}
    </Box>
  );
};
