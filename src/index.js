import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import * as serviceWorker from './serviceWorker'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'

const configLink = {
    uri: `https://worldcup-2018.now.sh/`,
    credentials: 'include'
  }

const link = new BatchHttpLink(configLink)

const graphqlClient = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

ReactDOM.render(<Root graphqlClient={graphqlClient} />, document.getElementById('root'))

serviceWorker.unregister()
