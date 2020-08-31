import React, { FC } from 'react';

import PortfolioProjectDialogMobile from './PortfolioProjectMobile';
import PortfolioProjectDialogDesktop from './PortfolioProjectDesktop';
import PortfolioProjectDialogTablet from './PortfolioProjectTablet';

export type PortfolioProjectDialogProps = {
  title: string;
  subtitle: string;
  tagtitle: string;
  contentHeader: string;
  imgurl: string;
  contentMainDescription: string;
  contentMainRole: string;
  isOpen: boolean;
};

type DetailsPortfolioProjectDialogType = PortfolioProjectDialogProps & {
  type: 'mobile' | 'tablet' | 'desktop';
};

export const PortfolioProjectDialog: FC<DetailsPortfolioProjectDialogType> = ({ type, ...props }) => {
  if (type === 'mobile') return <PortfolioProjectDialogMobile {...props} />;
  else if (type === 'desktop') return <PortfolioProjectDialogDesktop {...props} />;
  return <PortfolioProjectDialogTablet {...props} />;
};
