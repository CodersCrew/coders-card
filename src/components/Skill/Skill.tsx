import React from 'react';
import { Box, BoxProps, makeStyles, Typography } from '@material-ui/core';

const SKILL_LEVELS = [1, 2, 3, 4, 5] as const;

type Value = typeof SKILL_LEVELS[number];

export type SkillProps = BoxProps & {
  name: string;
  icon?: string;
  value: Value;
};

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

export const Skill = ({ name, icon, value, ...props }: SkillProps) => {
  const classes = useStyles();

  return (
    <Box {...props} height={40} minWidth={176}>
      <Box display="flex" alignItems="center" mb={1} pl={1 / 4}>
        {icon && <img className={classes.icon} src={icon} alt={name} width={20} height={20} />}
        <Typography variant="subtitle2">{name}</Typography>
      </Box>
      <div className={classes.tiles}>
        {SKILL_LEVELS.map((tileLevel) => (
          <Box
            key={tileLevel}
            justifySelf="stretch"
            borderRadius={2}
            bgcolor={tileLevel <= value ? 'text.secondary' : 'divider'}
          />
        ))}
      </div>
    </Box>
  );
};
