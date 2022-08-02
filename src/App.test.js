import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sign Up page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Getting Started With VR Creation/i);
  expect(linkElement).toBeInTheDocument();
});
