import type { PentagramEventHandler } from '$feature/Pentagram/types';
import type { OeuvreEventHandler } from '$feature/Oeuvre/types';
import { useFeed } from '$feature/feed/hooks';
import { useOeuvreNavigate, usePentagramNavigate } from "$feature/navigate/hooks"
import { Outlet, createFileRoute } from '@tanstack/react-router'

import FeedList from '$feature/feed/components/FeedList';

export const Route = createFileRoute('/_auth/feed/')({
    component: Feed,
})

function Feed() {
    const { feed, recommendedUsers } = useFeed()
    const navigate = usePentagramNavigate();
    const oeuvreNavigate = useOeuvreNavigate()
    const context = Route.useRouteContext()

    const eventHandler: PentagramEventHandler & OeuvreEventHandler = {
        pentagramMenuModal: (pentagramId: string) => navigate.pentagramSelectModal(pentagramId),
        nodeSelectModal: (nodeId: string) => navigate.nodeSelectModal(nodeId),
        revisionSelectModal: (revisionId: string) => navigate.revisionSelectModal(revisionId),
        selectOeuvre: (oeuvreId: string) => oeuvreNavigate.select(oeuvreId)
    }

    const items = feed ? feed.edges.map((edge) => edge.node) : []

    return (
        <>
            <FeedList
                items={items}
                recommendedUsers={recommendedUsers}
                renderConfig={{
                    message: true,
                    item: true
                }}
                options={{
                    showMessage: true
                }}
                eventHandler={eventHandler}
                context={context}
            />
            <Outlet />
        </>
    )
}