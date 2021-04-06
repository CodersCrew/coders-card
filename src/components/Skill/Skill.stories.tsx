import React from 'react';

import { Skill } from './Skill';

export default {
  title: 'Skill',
  component: Skill,
};

export const NoSkill = () => {
  return (
    <div style={{ width: '176px' }}>
      <Skill name="Example skill" value={1} />
    </div>
  );
};

export const MediumSkill = () => {
  return (
    <div style={{ width: '176px' }}>
      <Skill name="Example skill" value={3} />
    </div>
  );
};

export const HardSkill = () => {
  return (
    <div style={{ width: '176px' }}>
      <Skill name="Example skill" value={5} />
    </div>
  );
};
