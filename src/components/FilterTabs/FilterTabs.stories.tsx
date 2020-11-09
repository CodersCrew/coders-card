import React from 'react';

import { FilterTabs } from '.';
import { FilterTabsType } from './FilterTabs';

export default {
  title: 'FilterTabs',
  component: FilterTabs,
  excludeStories: /.*Data$/,
};

const baseTabsPropsData: Partial<FilterTabsType> = {
  indicatorColor: 'primary',
  textColor: 'primary',
};

export const BaseFilterTabs = (): JSX.Element => {
  return (
    <>
      <FilterTabs
        {...baseTabsPropsData}
        handleChange={() => {
          console.log('');
        }}
        navbarTitle={0}
        projectLabelsTitles={['test1', 'test2']}
      />
      ;
    </>
  );
};
