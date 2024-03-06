import type { GetPentagramRevisionsInfoByIdQuery } from '$lib/graphql/__generated__/graphql';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { usePentagramNavigate } from '$feature/Pentagram/hooks';
import { createFileRoute } from '@tanstack/react-router'
import { getPentagramRevisionsInfoById_QUERY } from '$feature/Pentagram/graphql';
import { getUnionedChanges } from '$feature/Pentagram/utils';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';

import ChangeLogModal from '$feature/Pentagram/components/PentagramSelectView/Modal/ChangeLogModal';

export const Route = createFileRoute('/pentagram/$pentagramId/view/revision/$revisionId')({
    component: RevisionModalDetail
})

function RevisionModalDetail() {
    const { pentagramId, revisionId } = Route.useParams()
    const { data } = useQuery<GetPentagramRevisionsInfoByIdQuery>(getPentagramRevisionsInfoById_QUERY, {
        variables: { id: revisionId }
    })
    const firstNode = getFirstNodeOfCollection(data?.pentagram_revisionsCollection)
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