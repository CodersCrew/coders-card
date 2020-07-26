import React, { FC } from 'react';
import { BoxProps } from './type';

import ResumeListDefault from './ResumeListDefault';
import ResumeListMobile from './ResumeListMobile';

export const ResumeList: FC<BoxProps> = ({ ...props }) => {
  if (props.mobile) return <ResumeListMobile {...props} />;
  else return <ResumeListDefault {...props} />;
};
