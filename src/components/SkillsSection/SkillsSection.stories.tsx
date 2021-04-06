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
    { name: 'HTML', value: 3, category: title },
    { name: 'CSS', value: 5, category: title },
    { name: 'JS', value: 1, category: title },
  ],
});

export const Technologies = () => {
  return (
    <Box style={{ width: '100%', height: 188 }}>
      <SkillsSection {...basePropsData('Technologies')} />
    </Box>
  );
};
