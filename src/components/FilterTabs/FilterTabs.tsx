import React, { ComponentProps, useState } from 'react';
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
      <FilterTab label="All" />
      <FilterTab label="Mobile" />
      <FilterTab label="Web" />
      <FilterTab label="Other" />
    </MuiTabs>
  );
};
