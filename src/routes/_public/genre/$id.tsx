import type { GetGenreInfoByIdQuery } from "$lib/graphql/__generated__/graphql";
import { useQuery } from "@apollo/client";
import { getFirstNodeOfCollection } from "$lib/utils/graphql";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { getGenreInfoById_QUERY } from "$feature/Genre/graphql/query";
import GenreSelectView from "$feature/Genre/components/GenreSelectView";

export const Route = createFileRoute('/_public/genre/$id')({
    component: Genre
})

function Genre() {
    const params = Route.useParams()
    const { data } = useQuery<GetGenreInfoByIdQuery>(getGenreInfoById_QUERY, {
        variables: { id: params.id }
    })
    const item = getFirstNodeOfCollection(data?.genresCollection)

    if (!item) return <></>
    
    return (
        <div className="profile-container">
            <GenreSelectView
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