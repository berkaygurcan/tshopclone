import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Header} from '../../src/components';

//mock for navigation
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(() => ({})),
  };
});

it('renders BASIC correctly', () => {
  render(<Header title={''} />);
});

it('renders with title prop correctly', () => {
  render(<Header title={'test'} />);
  const titleElement = screen.getByText('test');
  expect(titleElement).toBeTruthy();
});
