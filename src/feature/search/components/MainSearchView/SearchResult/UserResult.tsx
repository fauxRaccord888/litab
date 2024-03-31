import type { QueryResults } from "../../../types"
import type { UnprocessedContext } from "$lib/types/components"
import { useTranslation } from "react-i18next"
import MiniProfile from "$feature/Profile/components/MiniProfile"

type UserResultProps = {
    queryResults: QueryResults
    context: UnprocessedContext
}

export default function UserResult(props: UserResultProps) {
    const { queryResults, context } = props
    const { data } = queryResults.users
    const { t } = useTranslation()
    if (!(data && "usersCollection" in data)) return null

    const items = data.usersCollection?.edges

    return (
        <div className="search-result-component__inner-container">
            {items?.map((user) => (
                <div key={user.node.id} className="search-result-component__result-outer-container">
                    <div className="search-result-component__result-inner-container">
                        <MiniProfile
                            item={user.node}
                            context={context}
                            options={{
                                displayFollow: true,
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