import type { GetGenreInfoByIdQuery } from "$lib/graphql/__generated__/graphql";
import type { GenreEventHandler } from "$feature/Genre/types";
import type { OeuvreEventHandler } from "$feature/Oeuvre/types";
import type { BaseEventHandler } from "$lib/types/components";
import { useQuery } from "@apollo/client";
import { useOeuvreNavigate, useRedirectOnError } from "$feature/navigate/hooks";
import { t as translate } from 'i18next'
import { getFirstNodeOfCollection } from "$lib/utils/graphql";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { getGenreInfoById_QUERY } from "$feature/Genre/graphql/query";
import { NETWORK } from "$lib/constants";
import GenreSelectView from "$feature/Genre/components/GenreSelectView";

export const Route = createFileRoute('/_public/genre/$id')({
    component: Genre,
    beforeLoad: () => {
        return {
            getTitle: () => translate('genre.title.index')
        }
    },
})

function Genre() {
    const params = Route.useParams()
    const { data, error, fetchMore } = useQuery<GetGenreInfoByIdQuery>(getGenreInfoById_QUERY, {
        variables: { 
            id: params.id, 
            cursor: null,
            limit: NETWORK.readLimit
        }
    })
    const item = getFirstNodeOfCollection(data?.genresCollection)

    const oeuvreNavigate = useOeuvreNavigate()
    useRedirectOnError(Boolean(
        (data && !item) 
        || error
    ))
    
    const eventHandler: BaseEventHandler & GenreEventHandler & OeuvreEventHandler = {
        handleLoadMore: () => fetchMore({
            variables: {
                cursor: item?.oeuvres_genresCollection?.pageInfo?.endCursor,
                limit: NETWORK.readLimit,
                id: params.id
            }
        }),
        selectOeuvre: (oeuvre) => oeuvreNavigate.select(oeuvre.id),
    }

    if (!item)  return null

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