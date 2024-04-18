import type { ApolloCache } from "@apollo/client"

export function evictCacheById<T> (payload: {
    cache: ApolloCache<T>, 
    entity: 'Users' | 'Pentagrams' | 'Oeuvres' | 'Artists' |'Genres' | 'Feed',
    id: string | null | undefined
}) {
    const { cache, entity, id } = payload
    if (!id) return
    cache.evict({
        id: `${entity}:${id}`
    })
}