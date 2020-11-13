import React from 'react';
import { Box, makeStyles, MenuList } from '@material-ui/core';
import clsx from 'clsx';

import { CFC } from '../../typings/components';
import { NavbarProps } from './Navbar';
import { renderNavItems } from './renderNavItems';

type DesktopNavbarProps = Omit<NavbarProps, 'type' | 'fullName' | 'image' | 'position' | 'resumeLink'>;

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

export const DesktopNavbar: CFC<DesktopNavbarProps> = ({ className, withoutBlogPage, ...props }) => {
  const classes = useStyles();

  return (
    <Box {...props} className={clsx(className, classes.root)}>
      <MenuList variant="menu" className={classes.menu}>
        {renderNavItems(undefined, withoutBlogPage)}
      </MenuList>
    </Box>
  );
};
