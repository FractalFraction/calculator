import { render, screen } from '@testing-library/react';
import Button from './Button.js'

test('has a display that contains whatever values are passed to it', () => {
  render(<Button value='2'/>);
  const calcButton = screen.getByTestId('number-button')
  expect(calcButton).toHaveTextContent('2')
});
 