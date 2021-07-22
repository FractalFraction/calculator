import Display from './Display.js'
import { render, screen } from '@testing-library/react';

test('has a display that contains whatever values are passed to it', () => {
  render(<Display displayStr='111'/>);
  const calcDisplay = screen.getByTestId('number-display')
  expect(calcDisplay).toHaveTextContent('111')
});

export default Display
