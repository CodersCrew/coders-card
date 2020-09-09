import { useMediaQuery, useTheme } from '@material-ui/core';

export const useComponentType = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = !isMobile && !isTablet;
  const componentType: 'mobile' | 'tablet' | 'desktop' = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';
  return { componentType, isMobile, isTablet, isDesktop };
};
