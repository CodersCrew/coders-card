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
  const data = useAboutQuery();
  const classes = useAboutStyles();

  const categorizedSkills = data.skills.reduce<Record<string, Skill[]>>((skills, skill) => {
    const key = skill.skillCategory;
    return skills[key] ? { ...skills, [key]: [...skills[key], skill] } : { ...skills, [key]: [skill] };
  }, {});

  return (
    <Layout variant="withDetailsCard">
      <Box className={classes.aboutContentContainer}>
        <SectionTitle className={classes.title}>About me</SectionTitle>
        <Box className={classes.content} dangerouslySetInnerHTML={{ __html: data.description }} />
        <SectionTitle className={classes.title}>My skills</SectionTitle>
        <Box className={classes.content}>
          {Object.keys(categorizedSkills).map((skillSectionTitle) => (
            <SkillsSection title={skillSectionTitle} skills={categorizedSkills[skillSectionTitle]} />
          ))}
        </Box>
        <TestimonialsSection testimonials={data.testimonials} />
      </Box>
    </Layout>
  );
};
