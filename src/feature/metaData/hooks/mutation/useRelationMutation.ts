import type { DeleteOeuvresArtistsRelationMutation, DeleteOeuvresGenresRelationMutation, InsertOeuvresArtistsRelationMutation, InsertOeuvresGenresRelationMutation } from '$lib/graphql/__generated__/graphql';
import type { FetchResult } from '@apollo/client';
import { useApolloClient, useMutation } from '@apollo/client';
import { OeuvreRelationPayload } from '$feature/metaData/types';
import { deleteOeuvresArtistsRelation_MUTATION, deleteOeuvresGenresRelation_MUTATION, insertOeuvresArtistsRelation_MUTATION, insertOeuvresGenresRelation_MUTATION } from '$feature/metaData/graphql';
import { CustomUnknownError } from '$lib/error/customError';
import { evictCacheById } from '$lib/utils';

// COMMENT 별도 리턴 타이핑을 하지 않으면 Promise<T> | Promise<K>로 나뉘어서 에러 발생
type CreateReturn = Promise<
    FetchResult<InsertOeuvresArtistsRelationMutation>
    | FetchResult<InsertOeuvresGenresRelationMutation>
> 

type DeleteReturn = Promise<
    FetchResult<DeleteOeuvresArtistsRelationMutation>
    | FetchResult<DeleteOeuvresGenresRelationMutation>
> 

export function useRelationMutation() {
    const [createArtistRelation] = useMutation<InsertOeuvresArtistsRelationMutation>(insertOeuvresArtistsRelation_MUTATION);
    const [createGenreRelation] = useMutation<InsertOeuvresGenresRelationMutation>(insertOeuvresGenresRelation_MUTATION);
    const [deleteArtistRelation] = useMutation<DeleteOeuvresArtistsRelationMutation>(deleteOeuvresArtistsRelation_MUTATION);
    const [deleteGenreRelation] = useMutation<DeleteOeuvresGenresRelationMutation>(deleteOeuvresGenresRelation_MUTATION);
    const apolloClient = useApolloClient()

    const evictCache = (payload: OeuvreRelationPayload) => {
        evictCacheById({
            cache: apolloClient.cache,
            entity: "oeuvres",
            id: payload.oeuvreId
        })
    }

    const createRelation = (payload: OeuvreRelationPayload): CreateReturn => {
        if (payload.key === 'artists') {
            const res = createArtistRelation({
                variables: payload
            });
            res.then(() => {
                evictCache(payload)
            })
            return res
        }
        if (payload.key === 'genres') {
            const res = createGenreRelation({
                variables: payload
            });
            res.then(() => {
                evictCache(payload)
            })
            return res
        }
        throw new CustomUnknownError()
    };

    const deleteRelation = (payload: OeuvreRelationPayload): DeleteReturn => {
        if (payload.key === 'artists') {
            const res = deleteArtistRelation({
                variables: payload,
            });
            res.then(() => {
                evictCache(payload)
            })
            return res
        }
        if (payload.key === 'genres') {
            const res = deleteGenreRelation({
                variables: payload
            });
            res.then(() => {
                evictCache(payload)
            })
            return res
        }
        throw new CustomUnknownError()
    };

    return { createRelation, deleteRelation };
}