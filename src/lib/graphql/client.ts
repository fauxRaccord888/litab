import type { IConnection } from "$lib/types/graphql"
import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    defaultDataIdFromObject,
} from '@apollo/client'

import { setContext } from '@apollo/client/link/context'
import { supabaseClient } from '../supabase/client'
import { mergeCacheUtil } from "$lib/utils"

// COMMENT 
// DEBUG
// https://community.apollographql.com/t/nested-relaystylepagination-is-broken/5582
// 중첩되는 경우, relay style의 pagination이 망가지는 경우가 존재함 -> 경우에 따라 커스터마이징 필요
// relay 페이지네이션 사용 시, 잘못된 merge로 인해 다른 작품, 다른 작가 페이지로 이동한 경우에도 0번 간선(edge)가 유지되어 작품 변경이 일어나지 않음
// 이를 방지하기 위해 mergeCacheUtil 함수 사용이 반드시 필요
// 이외에도 같은 엔티티에 대해 강제적인 merge가 진행되므로, 주의가 필요함

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
                usersCollection: {
                    keyArgs: ["filter"],
                    merge(existing: IConnection, incoming: IConnection){
                        return mergeCacheUtil(existing, incoming)
                    }
                },
                oeuvresCollection: {
                    keyArgs: ["filter"],
                    merge(existing: IConnection, incoming: IConnection){
                        return mergeCacheUtil(existing, incoming)
                    }
                },
                artistsCollection: {
                    keyArgs: ["filter"],
                    merge(existing: IConnection, incoming: IConnection){
                        return mergeCacheUtil(existing, incoming)
                    }
                },
                genresCollection: {
                    keyArgs: ["filter"],
                    merge(existing: IConnection, incoming: IConnection){
                        return mergeCacheUtil(existing, incoming)
                    }
                },
            },
        },
        oeuvres: {
            fields: {
                pentagram_nodesCollection: {
                    keyArgs: false,
                    merge(existing: IConnection, incoming: IConnection){
                        return mergeCacheUtil(existing, incoming)
                    }
                }
            }
        },
        genres: {
            fields: {
                oeuvres_genresCollection: {
                    keyArgs: false,
                    merge(existing: IConnection, incoming: IConnection){
                        return mergeCacheUtil(existing, incoming)
                    }
                }
            }
        },
        artists: {
            fields: {
                oeuvres_artistsCollection:{
                    keyArgs: false,
                    merge(existing: IConnection, incoming: IConnection){
                        return mergeCacheUtil(existing, incoming)
                    }
                }
            }
        },
        users: {
            fields: {
                followingsCollection: {
                    merge(_existing, incoming) {
                        return incoming
                    }
                },
                pentagramsCollection: {
                    keyArgs: false,
                    merge(existing: IConnection, incoming: IConnection){
                        return mergeCacheUtil(existing, incoming)
                    }
                },
                pentagram_revisionsCollection: {
                    keyArgs: false,
                    merge(existing: IConnection, incoming: IConnection){
                        return mergeCacheUtil(existing, incoming)
                    }
                }
            }
        },
        feed: {
            fields: {
                items: {
                    keyArgs: false,
                    merge(existing: IConnection, incoming: IConnection){
                        return mergeCacheUtil(existing, incoming)
                    }
                }
            }
        }

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

