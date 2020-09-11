import React from 'react';
import { Download } from 'react-feather';
import { Box, Divider, makeStyles, MenuList, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { CFC } from '../../typings/components';
import { Button } from '../Button';
import { NavbarProps } from './Navbar';
import NavItems from './NavItems';

type TabletNavbarProps = Omit<NavbarProps, 'type'>;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: theme.spacing(1.5),
  },
  menu: {
    display: 'flex',
    padding: 0,
  },
}));

export const TabletNavbar: CFC<TabletNavbarProps> = ({
  className,
  fullName,
  image,
  position,
  resumeLink,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Box {...props} className={clsx(className, classes.root)}>
      <Box display="flex" alignItems="center" justifyContent="space-between" px={4} py={1}>
        <Box display="flex" alignItems="center">
          <img className={classes.image} src={image} alt={fullName} />
          <Box>
            <Typography variant="h5">{fullName}</Typography>
            <Typography variant="subtitle2">{position}</Typography>
          </Box>
        </Box>
        {resumeLink && (
          <Button size="small" variant="contained" color="primary" href={resumeLink} startIcon={<Download size={16} />}>
            Download CV
          </Button>
        )}
      </Box>
      <Divider />
      <MenuList className={classes.menu} variant="menu">
        <NavItems />
      </MenuList>
    </Box>
  );
};
