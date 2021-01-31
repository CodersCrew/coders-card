import { useMediaQuery, useTheme } from '@material-ui/core';

import { ScreenSize } from '@/typings';

const getComponentType = (isMobile: boolean, isTablet: boolean): ScreenSize => {
  if (isMobile) return 'mobile';
  if (isTablet) return 'tablet';

  return 'desktop';
};

export const useComponentType = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = !isMobile && !isTablet;

  const componentType = getComponentType(isMobile, isTablet);

  return { componentType, isMobile, isTablet, isDesktop };
};
