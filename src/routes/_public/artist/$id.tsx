import type { GetArtistInfoByIdQuery } from "$lib/graphql/__generated__/graphql";
import { useQuery } from "@apollo/client";
import { getFirstNodeOfCollection } from "$lib/utils/graphql";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { getArtistInfoById_QUERY } from "$feature/Artist/graphql/query";
import ArtistSelectView from "$feature/Artist/components/ArtistSelectView";

export const Route = createFileRoute('/_public/artist/$id')({
    component: Artist
})

function Artist() {
    const params = Route.useParams()
    const { data } = useQuery<GetArtistInfoByIdQuery>(getArtistInfoById_QUERY, {
        variables: { id: params.id }
    })
    const item = getFirstNodeOfCollection(data?.artistsCollection)

    if (!item) return <></>
    
    return (
        <div className="profile-container">
            <ArtistSelectView
                item={item}
                renderConfig={{
                    coverImage: true,
                    title: true,
                    mainInfo: true,
                    subInfo: true
                }}
            />
            <Outlet />
        </div>
    )
}