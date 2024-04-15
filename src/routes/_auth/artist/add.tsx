import type { InsertArtistsMutation } from '$lib/graphql/__generated__/graphql';
import type { CustomError } from '$lib/error/customError';
import { createFileRoute } from '@tanstack/react-router'

import { useArtistNavigate } from '$feature/navigate/hooks';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';

import toast from 'react-hot-toast';
import { metaDataMutationErrorHandler } from '$lib/error/handler';
import { executeMutateMetaData } from '$feature/metaData/eventHandler';
import { insertArtist_MUTATION } from '$feature/metaData/graphql';

import MetaDataInsert from '$feature/metaData/components/Insert';

export const Route = createFileRoute('/_auth/artist/add')({
    component: AddArtist
})

function AddArtist() {
    const { t } = useTranslation()
    const category = "artists"

    const [artistMutation] = useMutation<InsertArtistsMutation>(insertArtist_MUTATION)
    const artistNavigate = useArtistNavigate()

    const handleMutation = (data: FormData) => {
        const response = metaDataMutationErrorHandler(
            () => executeMutateMetaData({
                data,
                mutationFunc: (opts) => artistMutation({
                    variables: opts?.variables
                }),
            })
        )

        toast.promise(response, {
            loading: t(`metaData.${category}.toast.loading.insert`),
            success: t(`metaData.${category}.toast.success.insert`),
            error: (err: CustomError) => t(err.i18nKey)
        })

        response.then((res) => {
            artistNavigate.select(res.id)
        })
    }

    return (
        <MetaDataInsert
            category={category}
            title={t(`metaData.${category}.title.insert`)}
            placeholders={{
                title: t(`metaData.${category}.placeholder.title`),
                description: t(`metaData.${category}.placeholder.description`),
            }}
            eventHandler={{
                handleMutation,
            }}
        />
    )
}
