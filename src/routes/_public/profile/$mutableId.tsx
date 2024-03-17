/* route */
import { Outlet, createFileRoute } from "@tanstack/react-router";
/* types */
import type { GetProfileByMutableIdQuery } from "$lib/graphql/__generated__/graphql";
/* hooks */
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";
import { usePentagramNavigate, useProfileNavigate } from "$feature/navigate/hooks";
import { useHandleFollow } from "$feature/Profile/hooks";
/* fetch */
import { getProfileByMutableId_QUERY } from "$feature/Profile/graphql";
/* utils */
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
import { TIME } from "$feature/Pentagram/constants";
/* components */
import ProfileSelectView from "$feature/Profile/components/ProfileSelctView";
import PentagramSelectView from "$feature/Pentagram/components/PentagramSelectView";
import FeedItem from "$feature/feed/components/FeedItem";

export type ProfileSelectRoute = typeof Route

export const Route = createFileRoute('/_public/profile/$mutableId')({
    component: Profile
})

function Profile() {
    const params = Route.useParams()
    const context = Route.useRouteContext()
    const { t } = useTranslation()
    const navigate = useProfileNavigate()
    const pentagramNavigate = usePentagramNavigate()
    const handleFollow = useHandleFollow()

    const { data } = useQuery<GetProfileByMutableIdQuery>(getProfileByMutableId_QUERY, {variables: {mutableId: params.mutableId }})
    const item = getFirstNodeOfCollection(data?.usersCollection)
    
    if (!item) return null
    
    const onInteraction = (id: string) => {
        pentagramNavigate.pentagramSelectDetail(id, Route.fullPath, params)
    }

    const onClickNode = (nodeId: string) => {
        pentagramNavigate.nodeSelectDetail(nodeId, Route.fullPath, params)
    }

    const tabItems = [
        {
            label: t("user.tab.pentagram"),
            items: item?.pentagramsCollection?.edges.map((edge) => (
                <PentagramSelectView
                    item={edge.node}
                    renderConfig={{
                        metaInfo: true,
                        mainPentagon: true,
                        description: true,
                        revision: false
                    }}
                    eventHandler={{
                        'interaction': () => onInteraction(edge.node.id),
                        'node': onClickNode,
                    }}
                    options={{
                        horizontalMain: true
                    }}
                    timestamp={new Date(Date.now() + TIME.NOW_OFFSET)}
                    context={context}
                />
            )) || []
        },
        {
            label: t("user.tab.feed"),
            items: item?.pentagram_revisionsCollection?.edges.map((edge) => (
                <FeedItem 
                    item={edge.node}
                    renderConfig={{
                        item: true,
                        message: false,
                    }}
                    eventHandler={{
                        'interaction': () => onInteraction(edge.node.id),
                        'node': onClickNode,
                    }}
                    context={context}
                />
            )) || []
        }
    ]

    return (
        <>
            <ProfileSelectView
                context={context}
                item={item}
                navigate={navigate}
                handleFollow={handleFollow}
                tabItems={tabItems}
            />
            <Outlet />
        </>
    )
}
