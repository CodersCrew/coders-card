import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core/';
import { FC } from '../../typings/components';
import { MapPin, Download, Mail, Phone, Check } from 'react-feather';

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

type Props = { label: string; icon: DetailItemIcon; className?: string; isLink?: boolean; href?: string };

export const DetailsItem: FC<Props> = ({ label, icon, className = '', isLink = false, href }) => {
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
