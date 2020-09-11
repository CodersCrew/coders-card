import React, { ComponentProps } from 'react';
import { makeStyles, MenuItem, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { GatsbyLinkProps, Link } from 'gatsby';

import { CFC, FeatherIcon } from '../../typings/components';

export type NavItemProps = ComponentProps<typeof MenuItem> & {
  to: GatsbyLinkProps<unknown>['to'];
  icon: FeatherIcon;
  children: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2, 2.5),
    textDecoration: 'none',
    transition: 'all 0.225s',

    '&.active': {
      '& .MuiTypography-root': {
        color: theme.palette.primary.main,
      },
      '& > svg': {
        color: theme.palette.primary.main,
      },
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.primary,
  },
}));

export const NavItem: CFC<NavItemProps> = ({ icon, children, to, className, ...props }) => {
  const classes = useStyles();

  const Icon = icon;

  return (
    <MenuItem {...props} className={clsx(className, classes.root)}>
      <Link to={to} className={classes.link} activeClassName="active">
        <Icon size={24} className={classes.icon} />
        <Typography variant="subtitle1" color="textPrimary">
          {children}
        </Typography>
      </Link>
    </MenuItem>
  );
};
