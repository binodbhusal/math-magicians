import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

test('Expect homepage to match working snapshot', () => {
  const homepage = renderer.create(<Home />).toJSON();
  expect(homepage).toMatchSnapshot();
});
