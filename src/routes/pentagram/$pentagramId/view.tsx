import type { GetPentagramSelectInfoByIdQuery } from '$lib/graphql/__generated__/graphql';
import { Outlet, createFileRoute } from '@tanstack/react-router'

import { useQuery } from '@apollo/client';
import { usePentagramNavigate } from '$feature/Pentagram/hooks';

import { getPentagramSelectInfoById_QUERY } from '$feature/Pentagram/graphql';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';

import PentagramSelectView from '$feature/Pentagram/components/PentagramSelectView';

export const Route = createFileRoute('/pentagram/$pentagramId/view')({
    component: PentagramUpdate,
})

function PentagramUpdate() {
    const { pentagramId } = Route.useParams()

    const { data } = useQuery<GetPentagramSelectInfoByIdQuery>(getPentagramSelectInfoById_QUERY, {
        variables: { id: pentagramId }
    })

    const firstNode = getFirstNodeOfCollection(data?.pentagramsCollection)
    const navigate = usePentagramNavigate();

    const eventHandler = {
        node: (nodeId: string) => navigate.nodeDetail(pentagramId, nodeId),
        interaction: () => navigate.selectInteraction(pentagramId),
        revision: (revisionId: string) => navigate.revisionDetail(pentagramId, revisionId)
    }

    // TODO THROW ERROR + AUTH
    if (!firstNode) return <></>

    return (
        <>
            <PentagramSelectView 
                item={firstNode} 
                renderConfig={{
                    metaInfo: true,
                    mainPentagon: true,
                    description: true,
                    revision: true
                }}
                options={{
                    horizontalMain: false,
                }}
                eventHandler={eventHandler}
            />
            <Outlet />
        </>
    )
}