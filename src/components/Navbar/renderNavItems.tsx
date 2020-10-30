/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { FileText, Folder, MessageCircle, Type, User } from 'react-feather';

import { FeatherIcon } from '../../typings/components';
import { NavItem, NavItemProps } from '../NavItem';

type NavItemConfig = {
  to: string;
  icon: FeatherIcon;
  label: string;
};

const navItems: NavItemConfig[] = [
  {
    to: '/',
    icon: User,
    label: 'About',
  },
  {
    to: '/resume',
    icon: FileText,
    label: 'Resume',
  },
  {
    to: '/portfolio',
    icon: Folder,
    label: 'Portfolio',
  },
  {
    to: '/blog',
    icon: Type,
    label: 'Blog',
  },
  {
    to: '/contact',
    icon: MessageCircle,
    label: 'Contact',
  },
];

export const renderNavItems = (onClick: NavItemProps['onClick'] = () => {}, withoutBlogPage?: boolean) =>
  navItems.map((item) =>
    item.to === '/blog' && withoutBlogPage ? null : (
      <NavItem key={item.label} to={item.to} onClick={onClick} icon={item.icon}>
        {item.label}
      </NavItem>
    ),
  );
