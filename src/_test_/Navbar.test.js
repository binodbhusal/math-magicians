import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom/extend-expect';

test('Navbar renders correctly', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  const homeLink = screen.getByText('Home');
  const calculatorLink = screen.getByText('Calculator');
  const quoteLink = screen.getByText('Qoute');

  expect(homeLink).toBeInTheDocument();
  expect(calculatorLink).toBeInTheDocument();
  expect(quoteLink).toBeInTheDocument();
});
