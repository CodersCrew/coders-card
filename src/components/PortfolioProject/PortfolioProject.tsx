import React, { FC } from 'react';

import PortfolioProjectDialogMobile from './PortfolioProjectMobile';
import PortfolioProjectDialogDesktop from './PortfolioProjectDesktop';
import PortfolioProjectDialogTablet from './PortfolioProjectTablet';

export type BlogPostDialogProps = {
  title: string;
  subtitle: string;
  tagtitle: string;
  contentheader: string;
  imgurl: string;
  contentmain: string;
  isOpen: boolean;
};

type DetailsBlogPostDialogType = BlogPostDialogProps & {
  type: 'mobile' | 'tablet' | 'desktop';
};

export const PortfolioProjectDialog: FC<DetailsBlogPostDialogType> = ({ type, ...props }) => {
  if (type === 'mobile') return <PortfolioProjectDialogMobile {...props} />;
  else if (type === 'desktop') return <PortfolioProjectDialogDesktop {...props} />;
  else return <PortfolioProjectDialogTablet {...props} />;
};
