import { render, screen } from '@testing-library/react';
import Button from './Button.js'

test('check the onClick function is called', () => {
  //Mock the onClick function
  const mockOnClick = jest.fn(() => '2');
  //Call the Button component with a value and the mocked onClick function
  render(<Button value='2' onClick= {mockOnClick} />);
  const calcButton = screen.getByTestId('number-button-2');
  calcButton.click();
  //Assert that the mocked function was called with the correct arguments
  expect(mockOnClick.mock.calls.length).toBe(1);
});

test('has a display that contains whatever values are passed to it', () => {
  const mockOnClick = jest.fn(() => '2');
  render(<Button value='2' onClick={mockOnClick}/>);
  const calcButton = screen.getByTestId('number-button-2')
  expect(calcButton).toHaveTextContent('2')
});






 
 