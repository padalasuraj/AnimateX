import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the premium ui marketplace hero heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    name: /build faster with premium ui kits for every landing page/i,
  });
  expect(heading).toBeInTheDocument();
});
