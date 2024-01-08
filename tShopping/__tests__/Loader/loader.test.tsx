import React from 'react';
import {render} from '@testing-library/react-native';

import {Loader} from '../../src/components';

it('renders BASIC correctly', () => {
  render(<Loader />);
});
