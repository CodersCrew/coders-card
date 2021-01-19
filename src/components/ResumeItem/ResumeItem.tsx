import React from 'react';

import type { ResumeItemProps } from './ResumeItem.types';
import { ResumeItemDefault } from './ResumeItemDefault';
import { ResumeItemMobile } from './ResumeItemMobile';

export const ResumeItem = ({ isMobile, ...props }: ResumeItemProps) => {
  return isMobile ? <ResumeItemMobile {...props} /> : <ResumeItemDefault {...props} />;
};
