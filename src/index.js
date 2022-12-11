import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { LoginProvider } from "./contexts/loginContext";
import { UserProvider } from "./contexts/userContext";
import "./components/App/App.css"

const client = new ApolloClient({
  uri: "https://squeakr-be.fly.dev/graphql/",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
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
