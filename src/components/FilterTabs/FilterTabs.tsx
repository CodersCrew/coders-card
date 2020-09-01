import React, { useState, ComponentProps } from 'react';
import { Tabs as MuiTabs } from '@material-ui/core';
import { FilterTab } from '../FilterTab/FilterTab';
export type TabsProps = ComponentProps<typeof MuiTabs>;

export const FilterTabs = (props: TabsProps) => {
  const [value, setValue] = useState(1);

  const handleChange: TabsProps['onChange'] = (event, newValue) => {
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
