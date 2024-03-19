import type { GetOeuvreExtensiveInfoByIdQuery } from "$lib/graphql/__generated__/graphql";
import type { OeuvreEventHandler } from "$feature/Oeuvre/types";
import type { PentagramEventHandler } from "$feature/Pentagram/types";
import { useQuery } from "@apollo/client";
import { useArtistNavigate, useGenreNavigate, useOeuvreNavigate, usePentagramNavigate } from "$feature/navigate/hooks";
import { getOeuvreExtensiveInfoById_QUERY } from "$feature/Oeuvre/graphql";
import { getFirstNodeOfCollection } from "$lib/utils/graphql";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { getProcessedContext } from "$feature/navigate/utils";
import OeuvreSelectView from "$feature/Oeuvre/components/OeuvreSelectView";

export type OeuvreSelectRoute = typeof Route

export const Route = createFileRoute('/_public/oeuvre/$id')({
    component: Oeuvre
})

function Oeuvre() {
    const params = Route.useParams()
    const unprocessedContext = Route.useRouteContext()
    const context = getProcessedContext(unprocessedContext)
    const pentagramNavigate = usePentagramNavigate()
    const oeuvreNavigate = useOeuvreNavigate()
    const artistNavigate = useArtistNavigate()
    const genreNavigate = useGenreNavigate()
    const { data } = useQuery<GetOeuvreExtensiveInfoByIdQuery>(getOeuvreExtensiveInfoById_QUERY, {
        variables: { id: params.id }
    })
    const item = getFirstNodeOfCollection(data?.oeuvresCollection)

    if (!item) return <></>

    const eventHandler: OeuvreEventHandler & PentagramEventHandler = {
        pentagramInteractionModal: (id: string) => pentagramNavigate.pentagramSelectDetail(id, Route.fullPath, params),
        nodeDetailModal: (nodeId: string) => pentagramNavigate.nodeSelectDetail(nodeId, Route.fullPath, params),
        revisionDetailModal: (revisionId: string) => pentagramNavigate.revisionSelectDetail(revisionId, Route.fullPath, params),
        selectOeuvre: (oeuvreId: string) => oeuvreNavigate.select(oeuvreId),
        selectArtistTag: (artistId: string) => artistNavigate.select(artistId),
        selectGenreTag: (genreId: string) => genreNavigate.select(genreId)
    }

    return (
        <div className="profile-container">
            <OeuvreSelectView
                item={item}
                context={context}
                eventHandler={eventHandler}
            />
            <Outlet />
        </div>
    )
}