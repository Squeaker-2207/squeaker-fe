import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders squeakr app', () => {
  render(
  <Router>
    <App />
  </Router>
  );
  const linkElement = screen.getByText('SQUEAKR');
  expect(linkElement).toBeInTheDocument();
});