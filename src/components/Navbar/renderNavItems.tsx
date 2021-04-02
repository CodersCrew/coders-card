/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { FileText, Folder, MessageCircle, User } from 'react-feather';

import type { FeatherIcon } from '@/typings';

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
    to: '/contact',
    icon: MessageCircle,
    label: 'Contact',
  },
];

export const renderNavItems = (onClick?: NavItemProps['onClick']) =>
  navItems.map((item) => (
    <NavItem key={item.label} to={item.to} onClick={onClick} icon={item.icon}>
      {item.label}
    </NavItem>
  ));
