import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '../../src/utils/theme';

export default function TopLayout(props) {
  return <ThemeProvider>{props.children}</ThemeProvider>;
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
