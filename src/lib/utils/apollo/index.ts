import type { ApolloCache } from "@apollo/client"

export function evictCacheById<T> (payload: {
    cache: ApolloCache<T>, 
    entity: 'users' | 'pentagrams' | 'oeuvres' | 'artists' |'genres' ,
    id: string | null | undefined
}) {
    const { cache, entity, id } = payload
    if (!id) return
    cache.evict({
        id: `${entity}:${id}`
    })
}