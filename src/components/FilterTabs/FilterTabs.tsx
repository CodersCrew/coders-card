import React, { ComponentProps } from 'react';
import { Tabs as MuiTabs } from '@material-ui/core';

import { FilterTab } from '@/components/FilterTab';

export type FilterTabsProps = ComponentProps<typeof MuiTabs> & {
  handleChange: FilterTabsProps['onChange'];
  navbarTitle: number;
  projectLabels: string[];
};

export const FilterTabs = ({ projectLabels, navbarTitle, handleChange, ...props }: FilterTabsProps) => {
  return (
    <MuiTabs {...props} onChange={handleChange} value={navbarTitle}>
      {projectLabels.map((projectLabel) => (
        <FilterTab key={projectLabel} label={projectLabel} />
      ))}
    </MuiTabs>
  );
};
