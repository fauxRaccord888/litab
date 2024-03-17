import type { GetOeuvreExtensiveInfoByIdQuery } from "$lib/graphql/__generated__/graphql";
import { useQuery } from "@apollo/client";
import { useTranslation } from 'react-i18next';
import { usePentagramNavigate } from "$feature/navigate/hooks";
import { getOeuvreExtensiveInfoById_QUERY } from "$feature/Oeuvre/graphql";
import { getFirstNodeOfCollection } from "$lib/utils/graphql";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { TIME } from "$feature/Pentagram/constants";
import OeuvreSelectView from "$feature/Oeuvre/components/OeuvreSelectView";
import PentagramSelectView from "$feature/Pentagram/components/PentagramSelectView";

export type OeuvreSelectRoute = typeof Route

export const Route = createFileRoute('/_public/oeuvre/$id')({
    component: Oeuvre
})

function Oeuvre() {
    const params = Route.useParams()
    const context = Route.useRouteContext() 
    const pentagramNavigate = usePentagramNavigate()
    const { t } = useTranslation()
    const { data } = useQuery<GetOeuvreExtensiveInfoByIdQuery>(getOeuvreExtensiveInfoById_QUERY, {
        variables: { id: params.id }
    })
    const item = getFirstNodeOfCollection(data?.oeuvresCollection)

    if (!item) return <></>

    const onInteraction = (id: string) => {
        pentagramNavigate.pentagramSelectDetail(id, Route.fullPath, params)
    }

    const onClickNode = (nodeId: string) => {
        pentagramNavigate.nodeSelectDetail(nodeId, Route.fullPath, params)
    }


    const tabItems = [
        {
            label: t("oeuvre.tab.pentagram"),
            items: item?.pentagram_nodesCollection?.edges.map((edge) => (
                <PentagramSelectView
                    item={edge.node.pentagrams}
                    renderConfig={{
                        metaInfo: true,
                        mainPentagon: true,
                        description: false,
                        revision: false
                    }}
                    eventHandler={{
                        'interaction': () => onInteraction(edge.node.pentagrams.id),
                        'node': onClickNode,
                    }}
                    options={{}}
                    timestamp={new Date(Date.now() + TIME.NOW_OFFSET)}
                    context={context}
                />
            )) || []
        },
        {
            label: t("oeuvre.tab.user"),
            items: [<span>미구현</span>]
        },
    ]
    
    return (
        <div className="profile-container">
            <OeuvreSelectView
                item={item}
                renderConfig={{
                    coverImage: true,
                    title: true,
                    mainInfo: true,
                    subInfo: true
                }}
                tabItems={tabItems}
            />
            <Outlet />
        </div>
    )
}