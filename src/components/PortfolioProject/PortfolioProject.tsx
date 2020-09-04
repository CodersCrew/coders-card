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
  codeUrl: string;
  mockupsUrl: string;
  projectUrl: string;
  handleClose: () => void;
  handleNext: () => void;
  handlePrev: () => void;
  tags: { name: string }[];
};

type DetailsPortfolioProjectDialogType = PortfolioProjectDialogProps & {
  type: 'mobile' | 'tablet' | 'desktop';
};

export const PortfolioProjectDialog: FC<DetailsPortfolioProjectDialogType> = ({ type, ...props }) => {
  if (type === 'mobile') return <PortfolioProjectDialogMobile {...props} />;
  if (type === 'desktop') return <PortfolioProjectDialogDesktop {...props} />;
  return <PortfolioProjectDialogTablet {...props} />;
};
