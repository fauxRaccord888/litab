import type { QueryResults } from "../../../types"
import type { OeuvreEventHandler } from "$feature/Oeuvre/types"
import { useTranslation } from "react-i18next"
import OeuvreInfoCard from "$feature/Oeuvre/components/common/OeuvreInfoCard"

type OeuvreResultProps = {
    queryResults: QueryResults
    eventHandler: OeuvreEventHandler
}

export default function OeuvreResult(props: OeuvreResultProps) {
    const { queryResults, eventHandler } = props
    const { data } = queryResults.oeuvres
    const { t } = useTranslation()
    if (!(data && "oeuvresCollection" in data))  return null

    const items = data.oeuvresCollection?.edges

    return (
        <div className="search-result-component__inner-container">
            {items?.map((oeuvre) => (
                <div key={oeuvre.node.id} className="search-result-component__result-outer-container">
                    <div className="search-result-component__result-inner-container">
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