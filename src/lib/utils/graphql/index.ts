import type { Collections } from '$lib/types/graphql';

export const calcCollectionLength = (collections: Collections) => {
    if (!collections) return 0
    if (!collections.edges) return 0
    return collections.edges?.length
}