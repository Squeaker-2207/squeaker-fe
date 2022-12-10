import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders squeakr app', () => {
  render(
    <Router>
    <ApolloProvider client={client}>
      <LoginProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </LoginProvider>
    </ApolloProvider>
  </Router>
  );
  const linkElement = screen.getByText('SQUEAKR');
  expect(linkElement).toBeInTheDocument();
});