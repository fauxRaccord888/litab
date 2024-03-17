import type { GetArtistInfoByIdQuery } from "$lib/graphql/__generated__/graphql";
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";
import { useOeuvreNavigate } from "$feature/navigate/hooks";
import { getFirstNodeOfCollection } from "$lib/utils/graphql";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { getArtistInfoById_QUERY } from "$feature/Artist/graphql/query";
import ArtistSelectView from "$feature/Artist/components/ArtistSelectView";
import OeuvreInfoCard from "$feature/Oeuvre/components/common/OeuvreInfoCard";

export const Route = createFileRoute('/_public/artist/$id')({
    component: Artist
})

function Artist() {
    const params = Route.useParams()
    const oeuvreNavigate = useOeuvreNavigate()
    const { t } = useTranslation()
    const { data } = useQuery<GetArtistInfoByIdQuery>(getArtistInfoById_QUERY, {
        variables: { id: params.id }
    })
    const item = getFirstNodeOfCollection(data?.artistsCollection)

    if (!item) return <></>

    const onClickOeuvre = (id: string) => {
        oeuvreNavigate.select(id)
    }

    const tabItems = [
        {
            label: t("artist.tab.oeuvre"),
            items: item?.oeuvres_artistsCollection?.edges.map((edge) => (
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
            label: t("artist.tab.user"),
            items: [<span>미구현</span>]
        },
    ]
    
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
                tabItems={tabItems}
            />
            <Outlet />
        </div>
    )
}