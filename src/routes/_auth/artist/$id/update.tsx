import type { GetArtistInfoByIdQuery, UpdateArtistsMutation } from '$lib/graphql/__generated__/graphql';
import type { UploadCoverPayload } from '$feature/Account/types';
import type { CustomError } from '$lib/error/customError';
import { createFileRoute } from '@tanstack/react-router'

import { useTranslation } from 'react-i18next';
import { useApolloClient, useMutation, useQuery } from '@apollo/client';

import toast from 'react-hot-toast';
import { metaDataMutationErrorHandler } from '$lib/error/handler';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
import { executeMutateMetaData } from '$feature/metaData/eventHandler';

import { getArtistInfoById_QUERY } from '$feature/Artist/graphql/query';
import { updateArtist_MUTATION } from '$feature/metaData/graphql';
import { upload_SUPABASE } from '$lib/supabase';
import { evictCacheById } from '$lib/utils';

import MetaDataUpdate from '$feature/metaData/components/Update';

export const Route = createFileRoute('/_auth/artist/$id/update')({
    component: UpdateArtist
})

function UpdateArtist() {
    const { t } = useTranslation()
    const params = Route.useParams()
    const apolloClient = useApolloClient()
    const category = "artists"

    const { data } = useQuery<GetArtistInfoByIdQuery>(getArtistInfoById_QUERY, {
        variables: { 
            id: params.id, 
        }
    })
    const item = getFirstNodeOfCollection(data?.artistsCollection)

    const [artistMutation] = useMutation<UpdateArtistsMutation>(updateArtist_MUTATION)

    const evictCache = () => {
        evictCacheById({
            cache: apolloClient.cache,
            id: params.id,
            entity: "Artists"
        })
    }

    const handleMutation = (data: FormData) => {
        const response = metaDataMutationErrorHandler(
            () => executeMutateMetaData({
                id: params.id,
                data,
                mutationFunc: (opts) => artistMutation({
                    variables: opts?.variables
                }),
            })
        )

        toast.promise(response, {
            loading: t(`metaData.${category}.toast.loading.update`),
            success: t(`metaData.${category}.toast.success.update`),
            error: (err: CustomError) => t(err.i18nKey)
        })

        response.then(() => {
            evictCache()
        })
    }

    const handleUploadCover = (payload: UploadCoverPayload) => {
        const response = new Promise((resolve, reject) => {
            const response = upload_SUPABASE({
                ...payload,
                id: item?.id,
                bucket: category
            })
            response.then(({ data }) => {
                if (data) resolve(true)
                reject()
            })
        })

        toast.promise(response, {
            loading: t('metaData.cover.toast.loading'),
            success: t('metaData.cover.toast.success'),
            error: (err: CustomError) => t(err.i18nKey)
        })

        response.then(() => {
            evictCache()
        })
    }

    return (
        <MetaDataUpdate
            category={category}
            title={t(`metaData.${category}.title.update`)}
            placeholders={{
                title: t(`metaData.${category}.placeholder.title`),
                description: t(`metaData.${category}.placeholder.description`),
            }}
            initialValues={{
                title: item?.name,
                description: item?.bio
            }}
            eventHandler={{
                handleMutation,
                handleUploadCover,
            }}
        />
    )
}
