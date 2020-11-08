import React, { ComponentProps, useState } from 'react';
import { Tabs as MuiTabs } from '@material-ui/core';
import { useDeveloperProfile } from '../../containers/DeveloperProfile';

import { FilterTab } from '../FilterTab/FilterTab';

export type TabsProps = ComponentProps<typeof MuiTabs>;

export const FilterTabs = (props: TabsProps) => {
  const { valueNavBar, setValueNavBar } = useDeveloperProfile();

  const handleChange: TabsProps['onChange'] = (event, newValue) => {
    setValueNavBar(newValue);
  };

  return (
    <MuiTabs {...props} onChange={handleChange} value={valueNavBar}>
      <FilterTab label="All" />
      <FilterTab label="Mobile" />
      <FilterTab label="Web" />
      <FilterTab label="Other" />
    </MuiTabs>
  );
};
