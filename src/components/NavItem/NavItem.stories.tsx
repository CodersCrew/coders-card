import React from 'react';
import { NavItem } from './NavItem';
import { User } from 'react-feather';
import { Box } from '@material-ui/core';

export default {
  title: 'NavItem',
  component: NavItem,
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return (
    <Box width={200}>
      <NavItem to="/" icon={User}>
        About
      </NavItem>
    </Box>
  );
};
