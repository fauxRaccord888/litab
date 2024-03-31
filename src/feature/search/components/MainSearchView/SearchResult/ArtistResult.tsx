import type { QueryResults } from "../../../types"
import type { ArtistEventHandler } from "$feature/Artist/types"
import { useTranslation } from "react-i18next"
import ArtistInfoCard from "$feature/Artist/components/common/ArtistInfoCard"

type ArtistResultProps = {
    queryResults: QueryResults
    eventHandler: ArtistEventHandler
}

export default function ArtistResult(props: ArtistResultProps) {
    const { queryResults, eventHandler } = props
    const { data } = queryResults.artists
    const { t } = useTranslation()
    if (!(data && "artistsCollection" in data))  return null

    const items = data.artistsCollection?.edges

    return (
        <div className="search-result-component__inner-container">
            {items?.map((artist) => (
                <div key={artist.node.id} className="search-result-component__result-outer-container">
                    <div className="search-result-component__result-inner-container">
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