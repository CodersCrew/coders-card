import React from 'react';

import { ResumeListProps } from '.';
import { ResumeList } from './ResumeList';

export default {
  title: 'ResumeList',
  component: ResumeList,
  excludeStories: /.*Data$/,
};

const basePropsData: ResumeListProps = {
  labelText: '02.2020-current',
  headerText: 'Senior front-end developer',
  title: 'Google',
  description:
    'In tristique vulputate augue vel egestas. Quisque ac imperdiet tortor, at lacinia ex. Duis vel ex hendrerit, commodo odio sed, aliquam enim. Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi. Nunc malesuada leo et est iaculis facilisis. Fusce eu urna ut magna malesuada fringilla.',
};

export const ResumeListMobile = (): JSX.Element => {
  return <ResumeList isMobile {...basePropsData} />;
};

export const ResumeListDefault = (): JSX.Element => {
  return <ResumeList isMobile={false} {...basePropsData} />;
};
