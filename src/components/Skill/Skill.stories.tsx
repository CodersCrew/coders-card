import React from 'react';
import { Skill } from ".";

export default {
    title: 'Skill',
    component: Skill,
    excludeStories: /.*Data$/,
};

export const NoSkill = () => {
    return <div style={{ width: "176px" }}><Skill label="Example skill" level={0} /></div>
}

export const MediumSkill = () => {
    return <div style={{ width: "176px" }}><Skill label="Example skill" level={3} /></div>
}

export const HardSkill = () => {
    return <div style={{ width: "176px" }}><Skill label="Example skill" level={5} /></div>
}