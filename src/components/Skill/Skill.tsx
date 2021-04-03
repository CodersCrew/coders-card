import React from 'react';
import { Box, BoxProps, makeStyles, Typography } from '@material-ui/core';

import type { Skill as SkillType } from '@/typings';

export type SkillProps = BoxProps & {
  skill: SkillType;
};

const SKILL_LEVELS = [1, 2, 3, 4, 5];

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  tiles: {
    width: '100%',
    height: 8,
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: '0 8px',
  },
}));

export const Skill = ({ skill: { skillName, skillIcon, skillValue }, ...props }: SkillProps) => {
  const classes = useStyles();

  return (
    <Box {...props} height={40} minWidth={176}>
      <Box display="flex" alignItems="center" mb={1} pl={1 / 4}>
        {skillIcon && <img className={classes.icon} src={skillIcon.publicURL} alt={skillName} width={20} height={20} />}
        <Typography variant="subtitle2">{skillName}</Typography>
      </Box>
      <div className={classes.tiles}>
        {SKILL_LEVELS.map((tileLevel) => (
          <Box
            key={skillName}
            justifySelf="stretch"
            borderRadius={2}
            bgcolor={tileLevel <= skillValue ? 'text.secondary' : 'divider'}
          />
        ))}
      </div>
    </Box>
  );
};
