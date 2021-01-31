import React from 'react';

import { ResumeItem } from './ResumeItem';
import type { ResumeItemVariantProps } from './ResumeItem.types';

export default {
  title: 'ResumeItem',
  component: ResumeItem,
};

const basePropsData: ResumeItemVariantProps = {
  labelText: '02.2020-current',
  headerText: 'Senior front-end developer',
  title: 'Google',
  description:
    'In tristique vulputate augue vel egestas. Quisque ac imperdiet tortor, at lacinia ex. Duis vel ex hendrerit, commodo odio sed, aliquam enim. Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi. Nunc malesuada leo et est iaculis facilisis. Fusce eu urna ut magna malesuada fringilla.',
};

export const ResumeItemMobile = () => {
  return <ResumeItem isMobile {...basePropsData} />;
};

export const ResumeItemDefault = () => {
  return <ResumeItem isMobile={false} {...basePropsData} />;
};
