import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';

import {Card} from '../../src/components';

//mock for navigation
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(() => ({})),
  };
});

const testProduct = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};
it('renders BASIC correctly', () => {
  render(<Card onPress={() => {}} product={testProduct} />);
});

it('has a true title and price text', () => {
  render(
    <Card onPress={() => {}} titleNumberOfLines={10} product={testProduct} />,
  );

  const textTitle = screen.getByTestId('card-title-text');
  const priceTitle = screen.getByText('109.95 TL');

  expect(textTitle.props.children).toEqual(
    'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  );
  expect(priceTitle).toBeTruthy(); // var mı
});

it('can not click when btn is disabled', () => {
  const clickCount = 0;
  render(
    <Card
      product={testProduct}
      onPress={() => {
        clickCount + 1;
      }}
      disablePress
    />,
  );
  const btnTouchable = screen.getByTestId('card-touchable');
  fireEvent.press(btnTouchable);
  expect(clickCount).toBe(0);
});

it('has a true container style ', () => {
  render(
    <Card
      product={testProduct}
      onPress={() => {}}
      containerStyle={{marginTop: 10}}
    />,
  );
  const btnTouchable = screen.getByTestId('card-touchable');
  const {style} = btnTouchable.props;

  expect(style).toEqual({gap: 8, marginTop: 10, opacity: 1});
});
