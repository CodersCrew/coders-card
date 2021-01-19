import React from 'react';

import type { PortfolioProjectDialogProps } from './PortfolioProjectDialog.types';
import { PortfolioProjectDialogDesktop } from './PortfolioProjectDialogDesktop';
import { PortfolioProjectDialogMobile } from './PortfolioProjectDialogMobile';
import { PortfolioProjectDialogTablet } from './PortfolioProjectDialogTablet';

export const PortfolioProjectDialog = ({ type, ...props }: PortfolioProjectDialogProps) => {
  if (type === 'mobile') return <PortfolioProjectDialogMobile {...props} />;
  if (type === 'desktop') return <PortfolioProjectDialogDesktop {...props} />;
  return <PortfolioProjectDialogTablet {...props} />;
};
