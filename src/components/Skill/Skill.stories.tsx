import React from 'react';
import { Skill, SkillProps } from ".";

export default {
    title: 'Skill',
    component: Skill,
    excludeStories: /.*Data$/,
};

const basePropsData: Partial<SkillProps> = {
    component: "div",
    label: "Example skill",
    level: 0
}

export const NoSkill = () => {
    return <Skill {...basePropsData} />
}

export const MediumSkill = () => {
    return <Skill {...{ ...basePropsData, level: 3 }} />
}

export const HardSkill = () => {
    return <Skill {...{ ...basePropsData, level: 5 }} />
}