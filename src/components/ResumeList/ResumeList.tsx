import React, { FC } from 'react';
import { ResumeListProps } from './type';
import ResumeListDefault from './ResumeListDefault';
import ResumeListMobile from './ResumeListMobile';

type MobileProps = 'true' | 'false';
type ResumeListPropsMobile = ResumeListProps & { isMobile: MobileProps };

export const ResumeList: FC<ResumeListPropsMobile> = ({ isMobile, ...props }) => {
  return isMobile === 'true' ? <ResumeListMobile {...props} /> : <ResumeListDefault {...props} />;
};
