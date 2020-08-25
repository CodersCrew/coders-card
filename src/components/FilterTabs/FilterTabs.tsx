import React, { useState } from 'react';
import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from '@material-ui/core';
import { FilterTab } from '../FilterTab/FilterTab';
export type TabsProps = MuiTabsProps;

export const FilterTabs = (props: TabsProps) => {
  const [value, setValue] = useState(1);

  const handleChange: MuiTabsProps['onChange'] = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MuiTabs {...props} onChange={handleChange} value={value}>
      <FilterTab label="All"></FilterTab>
      <FilterTab label="Mobile"></FilterTab>
      <FilterTab label="Web"></FilterTab>
      <FilterTab label="Other"></FilterTab>
    </MuiTabs>
  );
};
