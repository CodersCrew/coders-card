import React, { lazy, Suspense } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core/';
import { FC } from '../../typings/components';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    marginLeft: theme.spacing(1),
  },
  icon: {
    height: 16,
    width: 16,
  },
}));

type Props = { label: string; icon: string; className?: string; isLink?: boolean; href?: string };

export const DetailsItem: FC<Props> = ({ label, icon, className = '', isLink = false, href }) => {
  const classes = useStyles();
  const renderIcon = () => {
    const SelectedIcon = lazy(() => import(`react-feather/dist/icons/${icon}.js`));
    return <SelectedIcon className={classes.icon} />;
  };
  return (
    <Typography
      className={`${classes.wrapper} ${className}`}
      variant="body2"
      component={isLink ? 'a' : 'span'}
      href={href}
    >
      <Suspense fallback={null}>{renderIcon()}</Suspense>
      <Box className={classes.label}>{label}</Box>
    </Typography>
  );
};
