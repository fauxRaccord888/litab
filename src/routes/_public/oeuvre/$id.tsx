import type { GetOeuvreInfoByIdQuery } from "$lib/graphql/__generated__/graphql";
import type { BaseEventHandler } from "$lib/types/components";
import type { OeuvreEventHandler } from "$feature/Oeuvre/types";
import type { PentagramEventHandler } from "$feature/Pentagram/types";
import { useQuery } from "@apollo/client";
import { useNavigate } from "@tanstack/react-router";
import { useArtistNavigate, useGenreNavigate, useOeuvreNavigate, usePentagramNavigate } from "$feature/navigate/hooks";
import { t as translate } from 'i18next'
import { getOeuvreInfoById_QUERY } from "$feature/Oeuvre/graphql";
import { getFirstNodeOfCollection } from "$lib/utils/graphql";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { NETWORK } from "$lib/constants";
import OeuvreSelectView from "$feature/Oeuvre/components/OeuvreSelectView";

export const Route = createFileRoute('/_public/oeuvre/$id')({
    component: Oeuvre,
    beforeLoad: () => {
        return {
            getTitle: () => translate('oeuvre.title.index')
        }
    },
})

function Oeuvre() {
    const params = Route.useParams()
    const context = Route.useRouteContext()
    const navigate = useNavigate()
    const pentagramNavigate = usePentagramNavigate()
    const oeuvreNavigate = useOeuvreNavigate()
    const artistNavigate = useArtistNavigate()
    const genreNavigate = useGenreNavigate()

    const { data, error, fetchMore } = useQuery<GetOeuvreInfoByIdQuery>(getOeuvreInfoById_QUERY, {
        variables: { 
            id: params.id, 
            cursor: null,
            limit: NETWORK.readLimit
        }
    })

    const item = getFirstNodeOfCollection(data?.oeuvresCollection)

    if (!item) {
        if (error) {
            navigate({
                to: "/error"
            })
        }
        return null
    }

    const eventHandler: BaseEventHandler & OeuvreEventHandler & PentagramEventHandler = {
        handleLoadMore: () => fetchMore({
            variables: {
                cursor: item?.pentagram_nodesCollection?.pageInfo?.endCursor,
                limit: NETWORK.readLimit,
                id: params.id
            }
        }),
        pentagramMenuModal: (id: string) => pentagramNavigate.pentagramSelectModal(id),
        nodeSelectModal: (nodeId: string) => pentagramNavigate.nodeSelectModal(nodeId),
        revisionSelectModal: (revisionId: string) => pentagramNavigate.revisionSelectModal(revisionId),
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