import React from 'react';
import { Box } from '@material-ui/core';

import { Layout } from '@/components/Layout';
import { SectionTitle } from '@/components/SectionTitle';
import { SkillsSection } from '@/components/SkillsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import type { Skill } from '@/typings';

import { useAboutQuery } from './About.query';
import { useAboutStyles } from './About.styles';

export const About = () => {
  const { description, skills, testimonials } = useAboutQuery();
  const classes = useAboutStyles();

  const categorizedSkills = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const { category } = skill;

    return acc[category] ? { ...acc, [category]: [...acc[category], skill] } : { ...acc, [category]: [skill] };
  }, {});

  return (
    <Layout variant="withDetailsCard">
      <Box className={classes.aboutContentContainer}>
        <SectionTitle className={classes.title}>About me</SectionTitle>
        <Box className={classes.content} dangerouslySetInnerHTML={{ __html: description }} />
        <SectionTitle className={classes.title}>My skills</SectionTitle>
        <Box className={classes.content}>
          {Object.keys(categorizedSkills).map((skillSectionTitle) => (
            <SkillsSection title={skillSectionTitle} skills={categorizedSkills[skillSectionTitle]} />
          ))}
        </Box>
        {testimonials?.length ? <TestimonialsSection testimonials={testimonials} /> : null}
      </Box>
    </Layout>
  );
};
