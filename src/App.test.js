import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Add-Button', () => {
  render(<App />);
  const linkElement = screen.getByText('+');
  expect(linkElement).toBeInTheDocument();
});
