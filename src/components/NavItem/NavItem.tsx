import React, { ComponentProps, forwardRef } from 'react';
import { makeStyles, MenuItem, Typography } from '@material-ui/core';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FeatherIcon } from '@/typings';

export type NavItemProps = ComponentProps<typeof MenuItem> & {
  to: string;
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
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2, 2.5),
    textDecoration: 'none',
    transition: 'all 0.225s',

    '&.active': {
      '& .MuiTypography-root, & > svg': {
        color: theme.palette.primary.main,
      },
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.primary,
  },
}));

export const NavItem = forwardRef<HTMLLIElement, NavItemProps>(({ icon, children, to, className, ...props }, ref) => {
  const classes = useStyles();
  const { pathname } = useRouter();

  const Icon = icon;

  return (
    <MenuItem {...props} className={clsx(className, classes.root)} ref={ref}>
      <Link href={to}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={clsx(classes.link, { active: pathname === to })}>
          <Icon size={24} className={classes.icon} />
          <Typography variant="subtitle1" color="textPrimary">
            {children}
          </Typography>
        </a>
      </Link>
    </MenuItem>
  );
});
