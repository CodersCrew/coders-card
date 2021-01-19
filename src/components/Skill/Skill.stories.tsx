import React from 'react';

import { Skill } from './Skill';

export default {
  title: 'Skill',
  component: Skill,
};

export const NoSkill = () => {
  return (
    <div style={{ width: '176px' }}>
      <Skill level={0}>Example skill</Skill>
    </div>
  );
};

export const MediumSkill = () => {
  return (
    <div style={{ width: '176px' }}>
      <Skill level={3}>Example skill</Skill>
    </div>
  );
};

export const HardSkill = () => {
  return (
    <div style={{ width: '176px' }}>
      <Skill level={5}>Example skill</Skill>
    </div>
  );
};
