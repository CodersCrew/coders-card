import React from 'react';

import { FilterTabs, TabsProps } from '.';

export default {
  title: 'FilterTabs',
  component: FilterTabs,
  excludeStories: /.*Data$/,
};

const baseTabsPropsData: Partial<TabsProps> = {
  indicatorColor: 'primary',
  textColor: 'primary',
};

export const BaseFilterTabs = (): JSX.Element => {
  return <FilterTabs {...baseTabsPropsData} />;
};
