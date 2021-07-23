import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('has welcome text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/tell/i);
  expect(linkElement).toBeInTheDocument();
});
