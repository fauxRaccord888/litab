import type { SearchResults } from "../../types"
import type { ProfileEventHandler } from "$feature/Profile/types"
import type { PentagramEventHandler } from "$feature/Pentagram/types"
import type { OeuvreEventHandler } from "$feature/Oeuvre/types"
import type { ArtistEventHandler } from "$feature/Artist/types"
import type { GenreEventHandler } from "$feature/Genre/types"
import type { UnprocessedContext } from "$lib/types/components"
import { useTranslation } from "react-i18next"
import OeuvreInfoCard from "$feature/Oeuvre/components/common/OeuvreInfoCard"
import ArtistInfoCard from "$feature/Artist/components/common/ArtistInfoCard"
import GenreInfoCard from "$feature/Genre/components/common/GenreInfoCard"
import MiniProfile from "$feature/Profile/components/MiniProfile"
import "./style/searchResult.scss"

type MainSearchViewProps = {
    results: SearchResults | null
    context: UnprocessedContext
    eventHandler: ProfileEventHandler & PentagramEventHandler & OeuvreEventHandler & ArtistEventHandler & GenreEventHandler
}

export default function SearchResult(props: MainSearchViewProps) {
    const { results, context, eventHandler } = props
    const { t } = useTranslation()
    let items: JSX.Element[] | undefined

    if (results?.__typename === 'Query' && 'usersCollection' in results) {
        const users = results.usersCollection?.edges
        items = users?.map((user) => (
            <MiniProfile
                key={user.node.id}
                item={user.node}
                context={context}
                options={{
                    displayFollow: true,
                }}
            />
        ))
    }

    if (results?.__typename === 'Query' && 'oeuvresCollection' in results) {
        const oeuvres = results.oeuvresCollection?.edges
        items = oeuvres?.map((oeuvre) => (
            <OeuvreInfoCard
                key={oeuvre.node.id}
                item={oeuvre.node}
                eventHandler={eventHandler}
                renderConfig={{
                    coverImage: true,
                    title: true,
                    mainInfo: false,
                    subInfo: false
                }}
                options={{
                    miniView: true,
                    enableSelect: true,
                }}
            />
        ))
    }

    if (results?.__typename === 'Query' && 'artistsCollection' in results) {
        const artists = results.artistsCollection?.edges
        items = artists?.map((artist) => (
            <ArtistInfoCard
                key={artist.node.id}
                item={artist.node}
                eventHandler={eventHandler}
                renderConfig={{
                    coverImage: true,
                    title: true,
                    mainInfo: false,
                    subInfo: false
                }}
                options={{
                    miniView: true,
                    enableSelect: true,
                }}
            />
        ))
    }

    if (results?.__typename === 'Query' && 'genresCollection' in results) {
        const genres = results.genresCollection?.edges
        items = genres?.map((genre) => (
            <GenreInfoCard
                key={genre.node.id}
                item={genre.node}
                eventHandler={eventHandler}
                renderConfig={{
                    coverImage: true,
                    title: true,
                    mainInfo: false,
                    subInfo: false
                }}
                options={{
                    miniView: true,
                    enableSelect: true,
                }}
            />
        ))
    }

    return (
        <div className={[
            "search-result-component",
            results === null ? "search-result-component--disabled" : "",
        ].join(" ")}>
            {items?.map((item) => (
                <div key={item.key} className="search-result-component__result-outer-container">
                    <div className="search-result-component__result-inner-container">
                        {item}
                    </div>
                </div>
            ))}
            {items?.length === 0 &&
                <span className="search-result-component__empty-result-message" >
                    {t('search.result.empty')}
                </span>
            }
        </div>
    )
}

