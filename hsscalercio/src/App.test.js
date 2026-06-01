import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HS Uniformes home page', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /HS Uniformes/i })).toBeInTheDocument();
  expect(screen.getByText(/Solicitar orcamento/i)).toBeInTheDocument();
});
