import React from 'react'
import ReactDom from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { App } from './App.js'
import { AppProvider } from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server-carlos-alvarez.vercel.app/graphql',
  cache: new InMemoryCache()
})



ReactDom.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>,
  document.getElementById('app'))
