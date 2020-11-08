import React, { ComponentProps, useState } from 'react';
import { Tabs as MuiTabs } from '@material-ui/core';

import { FilterTab } from '../FilterTab/FilterTab';

export type TabsProps = ComponentProps<typeof MuiTabs>;
type BasicFilterTypes = {
  handleChange: TabsProps['onChange'];
  navbarTitle: number;
};
type FilterTabsType = TabsProps & BasicFilterTypes;

export const FilterTabs = (props: FilterTabsType) => {
  const { handleChange, navbarTitle, ...rest } = props;

  return (
    <MuiTabs {...rest} onChange={handleChange} value={navbarTitle}>
      <FilterTab label="All" />
      <FilterTab label="Mobile" />
      <FilterTab label="Web" />
      <FilterTab label="Other" />
    </MuiTabs>
  );
};
