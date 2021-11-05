import React from 'react'
import { render, screen, queryByAttribute } from '@testing-library/react';
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

test('the clear button calls the clear function', () => {
  // Define a custom getById command if you want to, but have to write more lines of code.
  // See https://stackoverflow.com/questions/53003594/find-element-by-id-in-react-testing-library#53003981 for details (~ 22/07/2021)
  const getById = queryByAttribute.bind(null, 'id');  
  const mockClearDisplay = jest.fn(() => []);
  const dom = render( <button id="button-clear" onClick={mockClearDisplay}>AC</button>);
  const clearButton = getById(dom.container,'button-clear')
  clearButton.click();
  //Assert that the mocked function was called with the correct arguments
  expect(mockClearDisplay.mock.calls.length).toBe(1);
});

test('has a display', () => {
  render(<Calculator />);
  const calcDisplay = screen.getByTestId('number-display');
  const clearButton = screen.getByTestId('button-clear')
  const numbButton1 = screen.getByTestId('number-button-1')
  numbButton1.click()
  clearButton.click()
  expect(calcDisplay.innerHTML).toBe('');
});