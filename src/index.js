import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ApolloProvider } from "react-apollo";
import registerServiceWorker from "./registerServiceWorker";
import ApolloClient from "apollo-boost";
import App from "./components/App";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />,
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
