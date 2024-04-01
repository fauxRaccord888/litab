import type { DBProfiles } from "$feature/Profile/types";
import { useTranslation } from "react-i18next";
import MiniProfile from "$feature/Profile/components/MiniProfile";
import './style/followRecommendation.scss'

type FeedListProps = {
    recommendedUsers: DBProfiles[] | null | undefined,
}

export default function FollowRecommendation(props: FeedListProps) {
    const { recommendedUsers } = props
    const { t } = useTranslation()

    return (
        <>
            {(recommendedUsers && recommendedUsers.length !== 0) &&            
                <div className="follow-recommendation-component">
                    <div className="follow-recommendation-component__inner-container">
                        <span className="follow-recommendation-component__message">
                            {t('feed.message.empty')}
                        </span>
                        <div className="follow-recommendation-component__user-list-container">
                            {recommendedUsers.map((user) => (
                                <div key={user.id} className="follow-recommendation-component__user-container">
                                    <div className="follow-recommendation-component__user-inner-container">
                                        <MiniProfile
                                            item={user}
                                            options={{
                                                displayFollow: true
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}