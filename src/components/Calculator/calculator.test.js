import { render, screen } from '@testing-library/react';
import Calculator from './Calculator.js';

test('has a display', () => {
  render(<Calculator />);
  const calcDisplay = screen.getByTestId('number-display');
  expect(calcDisplay).toBeInTheDocument();
});

test('has a number button with specific id', () => {
  render(<Calculator />);
  const numbButton = screen.getByTestId('number-button-1');
  expect(numbButton).toBeInTheDocument();
  expect(numbButton.innerHTML).toEqual('1');
});

test('has two buttons with different ids', () => {
  render(<Calculator />);
  const numbButton1 = screen.getByTestId('number-button-1');
  const numbButton2 = screen.getByTestId('number-button-2');
  expect(numbButton1.innerHTML).toEqual('1');
  expect(numbButton2.innerHTML).toEqual('2');
});
