import type { Collections, ResponseCollections } from '$lib/types/graphql';

export const calcCollectionLength = (collections: Collections) => {
    if (!collections) return 0
    if (!collections.edges) return 0
    return collections.edges?.length
}

export function getFirstNodeOfCollection<T>(collection: Collections<T>){
    return collection?.edges?.[0]?.node || null
}

export function getFirstRecordOfResponse<T>(response: ResponseCollections<T>) {
    return response?.records?.[0]
}