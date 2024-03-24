import type { PentagramEventHandler } from '$feature/Pentagram/types';
import { useFeed } from '$feature/feed/hooks';
import { usePentagramNavigate } from "$feature/navigate/hooks"
import { Outlet, createFileRoute } from '@tanstack/react-router'

import FeedList from '$feature/feed/components/FeedList';

export const Route = createFileRoute('/_auth/feed/')({
    component: Feed,
})

function Feed() {
    const { feed, recommendedUsers } = useFeed()
    const navigate = usePentagramNavigate();
    const context = Route.useRouteContext()

    const eventHandler: PentagramEventHandler = {
        pentagramMenuModal: (pentagramId: string) => navigate.pentagramSelectModal(pentagramId),
        nodeSelectModal: (nodeId: string) => navigate.nodeSelectModal(nodeId),
        revisionSelectModal: (revisionId: string) => navigate.revisionSelectModal(revisionId)
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