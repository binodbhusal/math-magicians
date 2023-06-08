import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom/extend-expect';

test('Expect homepage to match working snapshot', () => {
  const { asFragment } = render(<Calculator />);
  expect(asFragment()).toMatchSnapshot();
});
