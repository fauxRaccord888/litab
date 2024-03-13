import type { GetPentagramSelectInfoByIdQuery } from '$lib/graphql/__generated__/graphql';
import { Outlet, createFileRoute } from '@tanstack/react-router'

import { useQuery } from '@apollo/client';
import { usePentagramNavigate } from '$feature/Pentagram/hooks';

import { getPentagramSelectInfoById_QUERY } from '$feature/Pentagram/graphql';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';

import PentagramSelectView from '$feature/Pentagram/components/PentagramSelectView';

export type PentagramSelectRoute = typeof Route

export const Route = createFileRoute('/_public/pentagram/$pentagramId/view')({
    component: PentagramSelect,
})

function PentagramSelect() {
    const params = Route.useParams()
    const context = Route.useRouteContext()
    const { data } = useQuery<GetPentagramSelectInfoByIdQuery>(getPentagramSelectInfoById_QUERY, {
        variables: { id: params.pentagramId }
    })

    const firstNode = getFirstNodeOfCollection(data?.pentagramsCollection)
    const navigate = usePentagramNavigate();

    const eventHandler = {
        node: (nodeId: string) => navigate.nodeSelectDetail(nodeId, Route.fullPath, params),
        interaction: (pentagramId: string) => navigate.selectInteraction(pentagramId, Route.fullPath, params),
        revision: (revisionId: string) => navigate.revisionDetail(revisionId, Route.fullPath, params)
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
                timestamp={new Date()}
                context={context}
            />
            <Outlet />
        </>
    )
}