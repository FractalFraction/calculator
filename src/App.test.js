import { render, screen } from '@testing-library/react';
import App from './App.js'

test('displays the header', () => {
  render(<App />);
  const header = screen.getByTestId('header');
  expect(header).toBeInTheDocument();
});