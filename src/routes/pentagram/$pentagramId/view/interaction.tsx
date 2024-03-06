import type { GetPentagramSelectInfoByIdQuery } from '$lib/graphql/__generated__/graphql';
import { createFileRoute } from '@tanstack/react-router'

import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useUserData } from '$feature/auth/hooks/useUserData';
import { usePentagramNavigate } from '$feature/Pentagram/hooks';

import { getPentagramSelectInfoById_QUERY } from '$feature/Pentagram/graphql';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';

import PentagramInteractionModal from '$feature/Pentagram/components/PentagramSelectView/Modal/PentagramInteractionModal';


export const Route = createFileRoute('/pentagram/$pentagramId/view/interaction')({
    component: PentagramNodeDetail
})

function PentagramNodeDetail() {
    const { pentagramId } = Route.useParams()
    const { data } = useQuery<GetPentagramSelectInfoByIdQuery>(getPentagramSelectInfoById_QUERY, {
        variables: { id: pentagramId }
    })
    const firstNode = getFirstNodeOfCollection(data?.pentagramsCollection)
    const { user } = useUserData()

    
    const { t } = useTranslation()
    const navigate = usePentagramNavigate()
    
    const title = t("modal.title.interaction")
    const isAuthor = (user?.id === firstNode?.users.id && user?.id !== undefined)
    
    const handleClickClose = () => {
        navigate.view(pentagramId)
    }

    const handleClickUpdate = () => {
        navigate.update(pentagramId)
    }

    return (
        <PentagramInteractionModal
            title={title}
            handleClickClose={handleClickClose}
            isAuthor={isAuthor}
            handleClickUpdate={handleClickUpdate}
        />
    )
}