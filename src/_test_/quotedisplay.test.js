import React from 'react';
import { render } from '@testing-library/react';
import QuoteDisplay from '../components/QuoteDisplay';

describe('Tests Quote component ', () => {
  it('renders correctly', () => {
    const tree = render(<QuoteDisplay />);
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    render(<QuoteDisplay />);
  });
});
