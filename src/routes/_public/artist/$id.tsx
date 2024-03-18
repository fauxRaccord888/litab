import type { GetArtistInfoByIdQuery } from "$lib/graphql/__generated__/graphql";
import type { ArtistEventHandler } from "$feature/Artist/types";
import type { OeuvreEventHandler } from "$feature/Oeuvre/types";
import { useQuery } from "@apollo/client";
import { useOeuvreNavigate } from "$feature/navigate/hooks";
import { getFirstNodeOfCollection } from "$lib/utils/graphql";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { getArtistInfoById_QUERY } from "$feature/Artist/graphql/query";
import ArtistSelectView from "$feature/Artist/components/ArtistSelectView";

export const Route = createFileRoute('/_public/artist/$id')({
    component: Artist
})

function Artist() {
    const params = Route.useParams()
    const oeuvreNavigate = useOeuvreNavigate()
    const { data } = useQuery<GetArtistInfoByIdQuery>(getArtistInfoById_QUERY, {
        variables: { id: params.id }
    })
    const item = getFirstNodeOfCollection(data?.artistsCollection)

    if (!item) return <></>

    const eventHandler: ArtistEventHandler & OeuvreEventHandler = {
        selectOeuvre: (id: string) => oeuvreNavigate.select(id)
    }
    
    return (
        <div className="profile-container">
            <ArtistSelectView
                item={item}
                eventHandler={eventHandler}
            />
            <Outlet />
        </div>
    )
}