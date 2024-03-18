import type { GetGenreInfoByIdQuery } from "$lib/graphql/__generated__/graphql";
import type { GenreEventHandler } from "$feature/Genre/types";
import type { OeuvreEventHandler } from "$feature/Oeuvre/types";
import { useQuery } from "@apollo/client";
import { useOeuvreNavigate } from "$feature/navigate/hooks";
import { getFirstNodeOfCollection } from "$lib/utils/graphql";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { getGenreInfoById_QUERY } from "$feature/Genre/graphql/query";
import GenreSelectView from "$feature/Genre/components/GenreSelectView";

export const Route = createFileRoute('/_public/genre/$id')({
    component: Genre
})

function Genre() {
    const params = Route.useParams()
    const oeuvreNavigate = useOeuvreNavigate()
    const { data } = useQuery<GetGenreInfoByIdQuery>(getGenreInfoById_QUERY, {
        variables: { id: params.id }
    })
    const item = getFirstNodeOfCollection(data?.genresCollection)
    
    if (!item) return <></>    

    const eventHandler: GenreEventHandler & OeuvreEventHandler = {
        selectOeuvre: (id: string) => oeuvreNavigate.select(id)
    }

    return (
        <div className="profile-container">
            <GenreSelectView
                item={item}
                eventHandler={eventHandler}
            />
            <Outlet />
        </div>
    )
}