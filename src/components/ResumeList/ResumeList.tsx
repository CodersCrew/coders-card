import React, { FC } from 'react';
import ResumeListDefault from './ResumeListDefault';
import ResumeListMobile from './ResumeListMobile';

export type ResumeListProps = {
  labelText: string;
  headerText: string;
  title: string;
  description: string;
};

type ResumeListPropsMobile = ResumeListProps & { isMobile: boolean };

export const ResumeList: FC<ResumeListPropsMobile> = ({ isMobile, ...props }) => {
  return isMobile === true ? <ResumeListMobile {...props} /> : <ResumeListDefault {...props} />;
};
