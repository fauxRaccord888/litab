import type { QueryResults } from "../../../types"
import type { GenreEventHandler } from "$feature/Genre/types"
import { useTranslation } from "react-i18next"
import GenreInfoCard from "$feature/Genre/components/common/GenreInfoCard"

type GenreResultProps = {
    queryResults: QueryResults
    eventHandler: GenreEventHandler
}

export default function GenreResult(props: GenreResultProps) {
    const { queryResults, eventHandler } = props
    const { data } = queryResults.genres
    const { t } = useTranslation()
    if (!(data && "genresCollection" in data))  return null

    const items = data.genresCollection?.edges

    return (
        <div className="search-result-component__inner-container">
            {items?.map((genre) => (
                <div key={genre.node.id} className="search-result-component__result-outer-container">
                    <div className="search-result-component__result-inner-container">
                        <GenreInfoCard
                            key={genre.node.id}
                            item={genre.node}
                            eventHandler={eventHandler}
                            renderConfig={{
                                coverImage: false,
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