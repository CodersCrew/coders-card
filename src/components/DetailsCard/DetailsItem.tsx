import React from 'react';
import { Check, Download, Mail, MapPin, Phone } from 'react-feather';
import { Box, makeStyles, Typography } from '@material-ui/core';

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

type DetailItemIcon = 'map-pin' | 'check' | 'download' | 'phone' | 'mail';

type DetailsItemProps = { label: string; icon: DetailItemIcon; className?: string; isLink?: boolean; href?: string };

export const DetailsItem = ({ label, icon, className = '', isLink = false, href }: DetailsItemProps) => {
  const classes = useStyles();
  const renderIcon = () => {
    if (icon === 'map-pin') return <MapPin className={classes.icon} />;
    if (icon === 'check') return <Check className={classes.icon} />;
    if (icon === 'download') return <Download className={classes.icon} />;
    if (icon === 'phone') return <Phone className={classes.icon} />;
    return <Mail className={classes.icon} />;
  };
  return (
    <Typography
      className={`${classes.wrapper} ${className}`}
      variant="body2"
      component={isLink ? 'a' : 'span'}
      href={href}
    >
      {renderIcon()}
      <Box className={classes.label}>{label}</Box>
    </Typography>
  );
};
