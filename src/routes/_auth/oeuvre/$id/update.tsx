import type { GetOeuvreInfoByIdQuery, UpdateOeuvresMutation } from '$lib/graphql/__generated__/graphql';
import type { OeuvreRelationPayload } from '$feature/metaData/types';
import type { UploadCoverPayload } from '$feature/Account/types';
import type { CustomError } from '$lib/error/customError';
import { createFileRoute } from '@tanstack/react-router'

import { useTranslation } from 'react-i18next';
import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useRelationMutation } from '$feature/metaData/hooks';

import toast from 'react-hot-toast';
import { metaDataMutationErrorHandler } from '$lib/error/handler';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
import { executeMutateMetaData } from '$feature/metaData/eventHandler';

import { getOeuvreInfoById_QUERY } from '$feature/Oeuvre/graphql';
import { updateOeuvres_MUTATION } from '$feature/metaData/graphql';
import { upload_SUPABASE } from '$lib/supabase';
import { evictCacheById } from '$lib/utils';
import MetaDataUpdate from '$feature/metaData/components/Update';

export const Route = createFileRoute('/_auth/oeuvre/$id/update')({
    component: UpdateOeuvre
})


function UpdateOeuvre() {
    const { t } = useTranslation()
    const params = Route.useParams()
    const apolloClient = useApolloClient()
    const category = "oeuvres"

    const { data } = useQuery<GetOeuvreInfoByIdQuery>(getOeuvreInfoById_QUERY, {
        variables: { 
            id: params.id, 
        }
    })
    const item = getFirstNodeOfCollection(data?.oeuvresCollection)

    const [oeuvreMutation] = useMutation<UpdateOeuvresMutation>(updateOeuvres_MUTATION)
    const { createRelation, deleteRelation } = useRelationMutation();

    const evictCache = () => {
        evictCacheById({
            cache: apolloClient.cache,
            id: params.id,
            entity: "Oeuvres"
        })
    }

    const handleMutation = (data: FormData) => {
        const response = metaDataMutationErrorHandler(
            () => executeMutateMetaData({
                id: params.id,
                data,
                mutationFunc: (opts) => oeuvreMutation({
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

    const handleCreateRelation = (payload: OeuvreRelationPayload) => {
        const response = metaDataMutationErrorHandler(
            () => createRelation(payload)
        )

        toast.promise(response, {
            loading: t(`metaData.${category}.toast.loading.relationCreate`),
            success: t(`metaData.${category}.toast.success.relationCreate`),
            error: (err: CustomError) => t(err.i18nKey)
        })

        response.then(() => {
            evictCache()
        })
    }

    const handleDeleteRelation = (payload: OeuvreRelationPayload) => {
        const response = metaDataMutationErrorHandler(
            () => deleteRelation(payload)
        )

        toast.promise(response, {
            loading: t(`metaData.${category}.toast.loading.relationDelete`),
            success: t(`metaData.${category}.toast.success.relationDelete`),
            error: (err: CustomError) => t(err.i18nKey)
        })

        response.then(() => {
            evictCache()
        })
    }

    return (
        <MetaDataUpdate
            record={item}
            category={category}
            title={t(`metaData.${category}.title.update`)}
            placeholders={{
                title: t(`metaData.${category}.placeholder.title`),
                description: t(`metaData.${category}.placeholder.description`),
            }}
            initialValues={{
                title: item?.title,
                description: item?.description
            }}
            eventHandler={{
                handleMutation,
                handleUploadCover,
                handleCreateRelation,
                handleDeleteRelation
            }}
        />
    )
}
