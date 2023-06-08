import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../components/Home';

describe('Tests Home component ', () => {
  it('renders correctly', () => {
    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    render(<Home />);
  });
  test('renders "Welcome to our page" text', () => {
    render(<Home />);

    const textElement = screen.getByText(/WelCome to Our Page/i);
    expect(textElement).toBeInTheDocument();
  });

  test('renders "We are here to unlock the world of arithmetic for you and provide a dose of math-inspired inspiration" text', () => {
    render(<Home />);

    const textElement = screen.getByText(/We are here to unlock the world of arithmetic for you and provide a dose of math-inspired inspiration/i);
    expect(textElement).toBeInTheDocument();
  });

  
  });
