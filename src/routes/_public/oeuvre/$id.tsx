import type { GetOeuvreInfoByIdQuery } from "$lib/graphql/__generated__/graphql";
import type { BaseEventHandler } from "$lib/types/components";
import type { OeuvreEventHandler } from "$feature/Oeuvre/types";
import type { PentagramEventHandler } from "$feature/Pentagram/types";
import { useQuery } from "@apollo/client";
import { useArtistNavigate, useGenreNavigate, useOeuvreNavigate, usePentagramNavigate, useProfileNavigate, useRedirectOnError } from "$feature/navigate/hooks";
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
    const { data, error, fetchMore } = useQuery<GetOeuvreInfoByIdQuery>(getOeuvreInfoById_QUERY, {
        variables: { 
            id: params.id, 
            cursor: null,
            limit: NETWORK.readLimit
        }
    })
    const item = getFirstNodeOfCollection(data?.oeuvresCollection)
    
    const pentagramNavigate = usePentagramNavigate()
    const oeuvreNavigate = useOeuvreNavigate()
    const artistNavigate = useArtistNavigate()
    const genreNavigate = useGenreNavigate()
    const profileNavigate = useProfileNavigate()

    useRedirectOnError(Boolean(
        (data && !item) 
        || error
    ))

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
        navigateToUpdate:(id: string) => pentagramNavigate.update(id),
        selectOeuvre: (oeuvre) => oeuvreNavigate.select(oeuvre.id),
        selectArtistTag: (artistId: string) => artistNavigate.select(artistId),
        selectGenreTag: (genreId: string) => genreNavigate.select(genreId),
        selectProfile: (profile) => profileNavigate.profileSelect(profile.mutable_id)
    }

    if (!item) return null

    return (
        <div className="profile-container">
            <OeuvreSelectView
                item={item}
                eventHandler={eventHandler}
            />
            <Outlet />
        </div>
    )
}