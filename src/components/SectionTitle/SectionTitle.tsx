import React from 'react';
import useMeasure from 'react-use/lib/useMeasure';
import { Box, BoxProps, Divider, makeStyles, Typography } from '@material-ui/core';

export type SectionTitleProps = BoxProps;

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'inline-block',
  },
  divider: {
    height: 2,
    marginTop: theme.spacing(1.25),
  },
}));

export const SectionTitle = ({ children, ...props }: SectionTitleProps) => {
  const [textRef, { width: textWidth }] = useMeasure();
  const classes = useStyles();

  return (
    <Box {...props}>
      <Typography className={classes.title} variant="h3" color="textPrimary" innerRef={textRef}>
        {children}
      </Typography>
      <Divider component="div" className={classes.divider}>
        <Box height={2} bgcolor="primary.main" width={textWidth} />
      </Divider>
    </Box>
  );
};
