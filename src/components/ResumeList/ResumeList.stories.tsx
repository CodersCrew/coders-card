import React, { FC } from 'react';
import { ResumeList } from './ResumeList';
import { BoxProps } from './type';

export default {
  title: 'ResumeList',
  component: 'ResumeList',
  excludeStories: /.*Data$/,
};

const basePropsData: BoxProps = {
  labelText: '02.2020-current',
  headerText: 'Senior front-end developer',
  title: 'Google',
  description:
    'In tristique vulputate augue vel egestas. Quisque ac imperdiet tortor, at lacinia ex. Duis vel ex hendrerit, commodo odio sed, aliquam enim. Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi. Nunc malesuada leo et est iaculis facilisis. Fusce eu urna ut magna malesuada fringilla.',
};

export const ResumeListDefault: FC<BoxProps> = () => {
  return <ResumeList mobile {...basePropsData} />;
};

export const ResumeListMobile: FC<BoxProps> = () => {
  return <ResumeList {...basePropsData} />;
};
