import React, { useState } from 'react';
import { Menu as MenuIcon } from 'react-feather';
import { Box, IconButton, makeStyles, Menu, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { transformImage } from '@/utils/image';

import type { NavbarProps } from './Navbar';
import { renderNavItems } from './renderNavItems';

type NavbarMobileProps = Omit<NavbarProps, 'type' | 'resumeLink'>;

const AVATAR_SIZE = 40;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    overflow: 'hidden',
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: 8,
    marginRight: theme.spacing(1),
  },
  menu: {
    padding: 0,

    '& .MuiMenuItem-root': {
      minWidth: 160,
      justifyContent: 'flex-start',
    },
  },
}));

export const NavbarMobile = ({ className, fullName, image, position, ...props }: NavbarMobileProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const classes = useStyles();

  const avatar = transformImage(image, { width: AVATAR_SIZE, height: AVATAR_SIZE });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box {...props} className={clsx(className, classes.root)}>
        <Box display="flex" alignItems="center">
          <img className={classes.avatar} src={avatar} alt={fullName} />
          <Box>
            <Typography variant="h5">{fullName}</Typography>
            <Typography variant="subtitle2">{position}</Typography>
          </Box>
        </Box>
        <IconButton aria-controls="navigation-menu" aria-haspopup="true" size="small" onClick={handleClick}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Menu
        id="navigation-menu"
        className={classes.menu}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
        variant="menu"
      >
        {renderNavItems(handleClose)}
      </Menu>
    </>
  );
};
