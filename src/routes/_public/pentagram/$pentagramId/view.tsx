import type { GetPentagramSelectInfoByIdQuery } from '$lib/graphql/__generated__/graphql';
import type { PentagramEventHandler } from '$feature/Pentagram/types';
import type { OeuvreEventHandler } from '$feature/Oeuvre/types';

import { useQuery } from '@apollo/client';
import { useOeuvreNavigate, usePentagramNavigate } from "$feature/navigate/hooks"

import { getPentagramSelectInfoById_QUERY } from '$feature/Pentagram/graphql';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
import { getProcessedContext } from '$feature/navigate/utils';
import { Outlet, createFileRoute } from '@tanstack/react-router'
import { TIME } from '$feature/Pentagram/constants';

import PentagramSelectView from '$feature/Pentagram/components/PentagramSelectView';

export const Route = createFileRoute('/_public/pentagram/$pentagramId/view')({
    component: PentagramSelect,
})

function PentagramSelect() {
    const params = Route.useParams()
    const unprocessedContext = Route.useRouteContext()
    const context = getProcessedContext(unprocessedContext)
    const { data } = useQuery<GetPentagramSelectInfoByIdQuery>(getPentagramSelectInfoById_QUERY, {
        variables: { id: params.pentagramId }
    })

    const firstNode = getFirstNodeOfCollection(data?.pentagramsCollection)
    const navigate = usePentagramNavigate();
    const oeuvreNavigate = useOeuvreNavigate();

    const eventHandler: PentagramEventHandler & OeuvreEventHandler = {
        pentagramMenuModal: (pentagramId: string) => navigate.pentagramSelectModal(pentagramId),
        nodeSelectModal: (nodeId: string) => navigate.nodeSelectModal(nodeId),
        revisionSelectModal: (revisionId: string) => navigate.revisionSelectModal(revisionId),
        selectOeuvre: (oeuvreId: string) => oeuvreNavigate.select(oeuvreId),
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
                timestamp={new Date(Date.now() + TIME.NOW_OFFSET)}
                context={context}
            />
            <Outlet />
        </>
    )
}