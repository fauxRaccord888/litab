/* hooks */
import type { FormatProps } from '$lib/types/components';
import { useTranslation } from "react-i18next"
import { useProfileNavigation } from "../hooks";
/* types */
import type { DBProfiles } from "$feature/Profile/types"
/* utils */
import { calcCollectionLength } from "$lib/utils/graphql"
/* styles */
import "./style/following.scss"

export default function FollowingInfo(props: FormatProps<DBProfiles>) {
    const { item } = props
    const { mutable_id, followingsCollection, followersCollection, postsCollection } = item
    const { t } = useTranslation()
    const showModalHandler = useProfileNavigation()
    const items = {
        posts: {
            item: postsCollection,
            onClick: () => {}
        }, 
        followings: {
            item: followingsCollection,
            onClick: showModalHandler.followings
        }, 
        followers: {
            item: followersCollection,
            onClick: showModalHandler.followers
        }
    }

    return (
        <div className="following-info-container">
            {Object.entries(items).map(([key, value]) => {
                const disabled = (value.item?.edges.length === 0) || (value.item?.__typename !== 'followingsConnection')
                return (
                    <div key={key} className="following-info" >
                        <button disabled={disabled} onClick={() => value?.onClick(mutable_id)}>
                            <span>{t(`header.count.${key}`)}</span>
                            <span><em>{calcCollectionLength(value?.item)}</em></span>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
