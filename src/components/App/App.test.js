import { render, screen } from '@testing-library/react';
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import { LoginProvider } from '../../contexts/loginContext';
import { UserProvider } from '../../contexts/userContext';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const client = new ApolloClient({
  uri: "https://squeakr-be.fly.dev/graphql/",
  cache: new InMemoryCache(),
});

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