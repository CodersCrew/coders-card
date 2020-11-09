import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { FC } from '../../typings/components';
import { LevelRange, Skill } from '../Skill/Skill';

export type SkillsSectionProps = {
  title: string;
  skills?: {
    name: string;
    value: LevelRange;
  }[];
  renderCondition: boolean;
};

const useStyles = makeStyles((theme) => ({
  skillsHeader: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
  },
  skills: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridRowGap: theme.spacing(4),
    marginBottom: theme.spacing(4),
    gridGap: theme.spacing(5),

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },

    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}));

export const SkillsSection: FC<SkillsSectionProps> = ({ title, skills, renderCondition }) => {
  const classes = useStyles();

  return (
    <>
      {renderCondition ? (
        <>
          <Typography variant="h6" className={classes.skillsHeader}>
            {title}
          </Typography>
          <Box className={classes.skills}>
            {skills?.map((skill) => (
              <Skill key={skill.name} level={skill.value}>
                {skill.name}
              </Skill>
            ))}
          </Box>
        </>
      ) : null}
    </>
  );
};
