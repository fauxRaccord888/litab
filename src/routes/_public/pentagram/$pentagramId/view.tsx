import type { GetPentagramSelectInfoByIdQuery } from '$lib/graphql/__generated__/graphql';
import type { PentagramEventHandler } from '$feature/Pentagram/types';
import type { OeuvreEventHandler } from '$feature/Oeuvre/types';
import { useQuery } from '@apollo/client';
import { useNavigate } from "@tanstack/react-router"
import { useOeuvreNavigate, usePentagramNavigate } from "$feature/navigate/hooks"
import { t as translate } from 'i18next'
import { getPentagramSelectInfoById_QUERY } from '$feature/Pentagram/graphql';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
import { Outlet, createFileRoute } from '@tanstack/react-router'
import PentagramSelectView from '$feature/Pentagram/components/PentagramSelectView';

export const Route = createFileRoute('/_public/pentagram/$pentagramId/view')({
    component: PentagramSelect,
    beforeLoad: () => {
        return {
            getTitle: () => translate('pentagram.title.view')
        }
    },
})

function PentagramSelect() {
    const params = Route.useParams()
    const context = Route.useRouteContext()
    const { data, error } = useQuery<GetPentagramSelectInfoByIdQuery>(getPentagramSelectInfoById_QUERY, {
        variables: { id: params.pentagramId }
    })

    const firstNode = getFirstNodeOfCollection(data?.pentagramsCollection)
    const navigate = useNavigate()
    const pentagramNavigate = usePentagramNavigate();
    const oeuvreNavigate = useOeuvreNavigate();

    const eventHandler: PentagramEventHandler & OeuvreEventHandler = {
        pentagramMenuModal: (pentagramId: string) => pentagramNavigate.pentagramSelectModal(pentagramId),
        nodeSelectModal: (nodeId: string) => pentagramNavigate.nodeSelectModal(nodeId),
        revisionSelectModal: (revisionId: string) => pentagramNavigate.revisionSelectModal(revisionId),
        selectOeuvre: (oeuvreId: string) => oeuvreNavigate.select(oeuvreId),
    }

    if (!firstNode) {
        if (error) {
            navigate({
                to: "/error"
            })
        }
        return null
    }

    return (
        <>
            <PentagramSelectView 
                item={firstNode} 
                eventHandler={eventHandler}
                context={context}
            />
            <Outlet />
        </>
    )
}