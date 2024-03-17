import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    defaultDataIdFromObject,
} from '@apollo/client'

import { setContext } from '@apollo/client/link/context'
import { supabaseClient } from '../supabase/client'

const API_KEY = import.meta.env.VITE_PUBLIC_DB_API_KEY
const GRAPHQL_END_POINT = import.meta.env.VITE_PUBLIC_GRAPHQL_ENDPOINT

const cache = new InMemoryCache({
    dataIdFromObject(responseObject) {
        if ('nodeId' in responseObject) {
            return `${responseObject.nodeId}`
        }
      return defaultDataIdFromObject(responseObject)
    },
    typePolicies: {
        Query: {
            fields: {
                node: {
                    read(_, { args, toReference }) {
                    const ref = toReference({
                        nodeId: args?.nodeId,
                    })
                    return ref
                    },
                },
            },
        },
    },
})

const httpLink = createHttpLink({
    uri: GRAPHQL_END_POINT,
})
  
const authLink = setContext(async (_, { headers }) => {
    const token = (await supabaseClient.auth.getSession()).data.session?.access_token
  
    return {
        headers: {
            ...headers,
            apiKey: API_KEY,
            Authorization: token ? `Bearer ${token}` : '',
        },
    }
})

const apolloClient = new ApolloClient({
    uri: GRAPHQL_END_POINT,
    link: authLink.concat(httpLink),
    cache,
})
  
export default apolloClient

