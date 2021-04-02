import React from 'react';
import { Box, makeStyles, MenuList } from '@material-ui/core';
import clsx from 'clsx';

import type { NavbarProps } from './Navbar';
import { renderNavItems } from './renderNavItems';

type NavbarDesktopProps = Omit<NavbarProps, 'type' | 'fullName' | 'image' | 'position' | 'resumeLink'>;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    boxShadow: theme.shadows[3],
    overflow: 'hidden',
  },
  menu: {
    display: 'flex',
    padding: 0,
  },
}));

export const NavbarDesktop = ({ className, ...props }: NavbarDesktopProps) => {
  const classes = useStyles();

  return (
    <Box {...props} className={clsx(className, classes.root)}>
      <MenuList variant="menu" className={classes.menu}>
        {renderNavItems()}
      </MenuList>
    </Box>
  );
};
