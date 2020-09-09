import { useMediaQuery, useTheme } from '@material-ui/core';

export const useComponentType = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const componentType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';
  return componentType;
};
