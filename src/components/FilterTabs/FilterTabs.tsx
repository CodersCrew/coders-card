import React, { ComponentProps, useState } from 'react';
import { Tabs as MuiTabs } from '@material-ui/core';

import { FilterTab } from '../FilterTab/FilterTab';

export type TabsProps = ComponentProps<typeof MuiTabs>;
export type BasicFilterTypes = {
  handleChange: TabsProps['onChange'];
  navbarTitle: number;
};
export type FilterTabsType = TabsProps & BasicFilterTypes;

export const FilterTabs = (props: FilterTabsType) => {
  return (
    <MuiTabs {...props} onChange={props.handleChange} value={props.navbarTitle}>
      <FilterTab label="All" />
      <FilterTab label="Mobile" />
      <FilterTab label="Web" />
      <FilterTab label="Other" />
    </MuiTabs>
  );
};
