import React, { ComponentProps } from 'react';
import { Tabs as MuiTabs } from '@material-ui/core';

import { FilterTab } from '../FilterTab/FilterTab';

export type TabsProps = ComponentProps<typeof MuiTabs>;
type BasicFilterTypes = {
  handleChange: TabsProps['onChange'];
  navbarTitle: number;
  projectLabelsTitles: string[];
};
export type FilterTabsType = TabsProps & BasicFilterTypes;

export const FilterTabs = (props: FilterTabsType) => {
  const { projectLabelsTitles, navbarTitle, handleChange, ...rest } = props;

  return (
    <MuiTabs {...rest} onChange={handleChange} value={navbarTitle}>
      {projectLabelsTitles.map((projectLabel: string) => (
        <FilterTab key={projectLabel} label={projectLabel} />
      ))}
    </MuiTabs>
  );
};
