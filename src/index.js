import React from 'react'
import ReactDom from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink  } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { App } from './App.js'
import { AppProvider } from './Context'

const httpLink = createHttpLink({
  uri: 'https://petgram-server-carlos-alvarez.vercel.app/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})


/*const client = new ApolloClient({
  uri: 'https://petgram-server-carlos-alvarez.vercel.app/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token');
    const authorization = token ? `Bearer ${token}` : '';
    operation.setContext({
      headers: {
        authorization
      }
    })

  },
  onError: error => {
    const {networkError} = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token');
      window.location.href('/')
    }
  
  },
  cache: new InMemoryCache()
});*/



ReactDom.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>,
  document.getElementById('app'))
