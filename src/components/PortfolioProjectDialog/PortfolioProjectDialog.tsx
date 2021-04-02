import React from 'react';

import type { PortfolioProjectDialogProps } from './PortfolioProjectDialog.types';
import { PortfolioProjectDialogDesktop } from './PortfolioProjectDialogDesktop';
import { PortfolioProjectDialogMobile } from './PortfolioProjectDialogMobile';

export const PortfolioProjectDialog = ({ type, ...props }: PortfolioProjectDialogProps) => {
  if (type === 'mobile') return <PortfolioProjectDialogMobile {...props} />;

  return <PortfolioProjectDialogDesktop {...props} />;
};
