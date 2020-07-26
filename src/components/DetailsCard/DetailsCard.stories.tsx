import React from 'react';
import { Box } from '@material-ui/core';

import DetailsCard from '.';

export default {
  title: 'DetailsCard',
  component: DetailsCard,
  excludeStories: /.*Data$/,
};

export const Desktop = () => {
  return (
    <Box style={{ width: 280, height: 556 }}>
      <DetailsCard type="desktop" />
    </Box>
  );
};

export const Tablet = () => {
  return (
    <Box style={{ width: 720, height: 288 }}>
      <DetailsCard type="tablet" />
    </Box>
  );
};

export const Mobile = () => {
  return (
    <Box style={{ width: 280, height: 488 }}>
      <DetailsCard type="mobile" />
    </Box>
  );
};
