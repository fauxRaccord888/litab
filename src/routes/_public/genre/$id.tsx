import type { GetGenreInfoByIdQuery } from "$lib/graphql/__generated__/graphql";
import { useQuery } from "@apollo/client";
import { useTranslation } from 'react-i18next';
import { useOeuvreNavigate } from "$feature/navigate/hooks";
import { getFirstNodeOfCollection } from "$lib/utils/graphql";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { getGenreInfoById_QUERY } from "$feature/Genre/graphql/query";
import GenreSelectView from "$feature/Genre/components/GenreSelectView";
import OeuvreInfoCard from "$feature/Oeuvre/components/common/OeuvreInfoCard";

export const Route = createFileRoute('/_public/genre/$id')({
    component: Genre
})

function Genre() {
    const params = Route.useParams()
    const oeuvreNavigate = useOeuvreNavigate()
    const { t } = useTranslation()
    const { data } = useQuery<GetGenreInfoByIdQuery>(getGenreInfoById_QUERY, {
        variables: { id: params.id }
    })
    const item = getFirstNodeOfCollection(data?.genresCollection)

    
    if (!item) return <></>

    const onClickOeuvre = (id: string) => {
        oeuvreNavigate.select(id)
    }

    const tabItems = [
        {
            label: t("genre.tab.oeuvre"),
            items: item?.oeuvres_genresCollection?.edges.map((edge) => (
                <OeuvreInfoCard
                    item={edge.node.oeuvres}
                    renderConfig={{
                        coverImage: true,
                        title: true,
                        mainInfo: false,
                        subInfo: false
                    }}
                    options={{
                        miniView: true
                    }}
                    handleClickItem={() => onClickOeuvre(edge.node.oeuvres.id)}
                />
            )) || []
        },
        {
            label: t("genre.tab.user"),
            items: [<span>미구현</span>]
        },
    ]
    
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
                tabItems={tabItems}
            />
            <Outlet />
        </div>
    )
}