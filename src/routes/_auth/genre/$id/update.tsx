import type { GetGenreInfoByIdQuery, UpdateGenresMutation } from '$lib/graphql/__generated__/graphql';
import type { CustomError } from '$lib/error/customError';
import { createFileRoute } from '@tanstack/react-router'

import { useTranslation } from 'react-i18next';
import { useApolloClient, useMutation, useQuery } from '@apollo/client';

import toast from 'react-hot-toast';
import { metaDataMutationErrorHandler } from '$lib/error/handler';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
import { executeMutateMetaData } from '$feature/metaData/eventHandler';

import { getGenreInfoById_QUERY } from '$feature/Genre/graphql/query';
import { updateGenres_MUTATION } from '$feature/metaData/graphql';
import { evictCacheById } from '$lib/utils';
import MetaDataUpdate from '$feature/metaData/components/Update';

export const Route = createFileRoute('/_auth/genre/$id/update')({
    component: UpdateGenre
})


function UpdateGenre() {
    const { t } = useTranslation()
    const params = Route.useParams()
    const apolloClient = useApolloClient()
    const category = "genres"

    const { data } = useQuery<GetGenreInfoByIdQuery>(getGenreInfoById_QUERY, {
        variables: { 
            id: params.id, 
        }
    })
    const item = getFirstNodeOfCollection(data?.genresCollection)

    const [genreMutation] = useMutation<UpdateGenresMutation>(updateGenres_MUTATION)

    const evictCache = () => {
        evictCacheById({
            cache: apolloClient.cache,
            id: params.id,
            entity: "Genres"
        })
    }

    const handleMutation = (data: FormData) => {
        const response = metaDataMutationErrorHandler(
            () => executeMutateMetaData({
                id: params.id,
                data,
                mutationFunc: (opts) => genreMutation({
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
                description: item?.description
            }}
            eventHandler={{
                handleMutation,
            }}
        />
    )
}
