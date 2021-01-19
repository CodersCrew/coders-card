import React from 'react';
import { action } from '@storybook/addon-actions';

import { FilterTabs, FilterTabsProps } from './FilterTabs';

export default {
  title: 'FilterTabs',
  component: FilterTabs,
};

const baseTabsPropsData: Partial<FilterTabsProps> = {
  indicatorColor: 'primary',
  textColor: 'primary',
};

export const BaseFilterTabs = () => {
  return (
    <FilterTabs
      {...baseTabsPropsData}
      handleChange={action('handleChange')}
      navbarTitle={0}
      projectLabels={['test1', 'test2']}
    />
  );
};
