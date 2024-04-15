import type { GetPentagramSelectInfoByIdQuery } from '$lib/graphql/__generated__/graphql';
import type { PentagramEventHandler } from '$feature/Pentagram/types';
import type { OeuvreEventHandler } from '$feature/Oeuvre/types';
import { useQuery } from '@apollo/client';
import { useOeuvreNavigate, usePentagramNavigate, useRedirectOnError } from "$feature/navigate/hooks"
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
    const { data, error } = useQuery<GetPentagramSelectInfoByIdQuery>(getPentagramSelectInfoById_QUERY, {
        variables: { id: params.pentagramId }
    })
    const item = getFirstNodeOfCollection(data?.pentagramsCollection)

    const pentagramNavigate = usePentagramNavigate();
    const oeuvreNavigate = useOeuvreNavigate();
    useRedirectOnError(Boolean(
        (data && !item) 
        || error
    ))

    const eventHandler: PentagramEventHandler & OeuvreEventHandler = {
        pentagramMenuModal: (pentagramId: string) => pentagramNavigate.pentagramSelectModal(pentagramId),
        nodeSelectModal: (nodeId: string) => pentagramNavigate.nodeSelectModal(nodeId),
        revisionSelectModal: (revisionId: string) => pentagramNavigate.revisionSelectModal(revisionId),
        navigateToUpdate:(id: string) => pentagramNavigate.update(id),
        selectOeuvre: (oeuvre) => oeuvreNavigate.select(oeuvre.id),
    }

    if (!item) return null

    return (
        <>
            <PentagramSelectView 
                item={item} 
                eventHandler={eventHandler}
                options={{
                    enableAnimation: true
                }}
            />
            <Outlet />
        </>
    )
}