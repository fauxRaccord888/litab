import type { GetPentagramNodesInfoByIdQuery } from '$lib/graphql/__generated__/graphql';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { usePentagramNavigate } from '$feature/Pentagram/hooks';
import { createFileRoute } from '@tanstack/react-router'
import { getPentagramNodesInfoById_QUERY } from '$feature/Pentagram/graphql';
import { getUnionedChanges } from '$feature/Pentagram/utils';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';

import ChangeLogModal from '$feature/Pentagram/components/PentagramSelectView/Modal/ChangeLogModal';

export const Route = createFileRoute('/pentagram/$pentagramId/view/node/$nodeId')({
    component: PentagramNodeDetail
})

function PentagramNodeDetail() {
    const { pentagramId, nodeId } = Route.useParams()
    const { data } = useQuery<GetPentagramNodesInfoByIdQuery>(getPentagramNodesInfoById_QUERY, {
        variables: { id: nodeId }
    })
    const firstNode = getFirstNodeOfCollection(data?.pentagram_nodesCollection)
    const changes = getUnionedChanges(firstNode)

    const { t } = useTranslation()
    const navigate = usePentagramNavigate()

    const title = t("modal.title.details")

    const handleClickClose = () => {
        navigate.view(pentagramId)
    }

    return (
        <ChangeLogModal
            changes={changes}
            title={title}
            handleClickClose={handleClickClose}
        />
    )
}