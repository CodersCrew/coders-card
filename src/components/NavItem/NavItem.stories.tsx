import React from 'react';
import { User } from 'react-feather';
import { Box } from '@material-ui/core';

import { NavItem } from './NavItem';

export default {
  title: 'NavItem',
  component: NavItem,
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
