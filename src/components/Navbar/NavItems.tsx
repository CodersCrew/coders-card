/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { FileText, Folder, MessageCircle, Type, User } from 'react-feather';
import { Divider } from '@material-ui/core';

import { CFC } from '../../typings/components';
import { NavItem, NavItemProps } from '../NavItem';

type NavItemsProps = {
  onClick?: NavItemProps['onClick'];
};

const NavItems: CFC<NavItemsProps> = ({ onClick }) => {
  return (
    <>
      <NavItem to="/" onClick={onClick} icon={User}>
        About
      </NavItem>
      <Divider flexItem orientation="vertical" />
      <NavItem to="/resume" onClick={onClick} icon={FileText}>
        Resume
      </NavItem>
      <Divider flexItem orientation="vertical" />
      <NavItem to="/portfolio" onClick={onClick} icon={Folder}>
        Portfolio
      </NavItem>
      <Divider flexItem orientation="vertical" />
      <NavItem to="/blog" onClick={onClick} icon={Type}>
        Blog
      </NavItem>
      <Divider flexItem orientation="vertical" />
      <NavItem to="/contact" onClick={onClick} icon={MessageCircle}>
        Contact
      </NavItem>
    </>
  );
};

NavItems.defaultProps = {
  onClick: () => {},
};

export default NavItems;
