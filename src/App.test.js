import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Add-Button', () => {
  render(<App />);
  const buttonElement = screen.getByText('+');
  expect(buttonElement).toBeInTheDocument();
});
