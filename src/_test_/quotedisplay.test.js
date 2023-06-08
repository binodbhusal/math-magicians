import React from 'react';
import renderer from 'react-test-renderer';
import QuoteDisplay from '../components/QuoteDisplay';

test('renders quote display correctly', () => {
  const loadingElement = renderer.create(<QuoteDisplay />).toJSON();
  expect(loadingElement).toMatchSnapshot();
});
