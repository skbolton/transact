import React from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"
import "./index.scss"

const client = new ApolloClient({
  uri: "http://localhost:4000/graph"
})

export default () => (
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>
)
