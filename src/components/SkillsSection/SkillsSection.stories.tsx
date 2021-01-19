import React from 'react';
import { Box } from '@material-ui/core';

import { SkillsSection, SkillsSectionProps } from './SkillsSection';

export default {
  title: 'SkillsSection',
  component: SkillsSection,
};

const basePropsData = (title: string): SkillsSectionProps => ({
  title,
  skills: [
    { name: 'HTML', value: 3 },
    { name: 'CSS', value: 3 },
    { name: 'JS', value: 3 },
  ],
  renderCondition: true,
});

export const Technologies = () => {
  return (
    <Box style={{ width: '100%', height: 188 }}>
      <SkillsSection {...basePropsData('Technologies')} />
    </Box>
  );
};

export const Tools = () => {
  return (
    <Box style={{ width: '100%', height: 188 }}>
      <SkillsSection {...basePropsData('Tools')} />
    </Box>
  );
};

export const OtherSkills = () => {
  return (
    <Box style={{ width: '100%', height: 188 }}>
      <SkillsSection {...basePropsData('Other skills')} />
    </Box>
  );
};
