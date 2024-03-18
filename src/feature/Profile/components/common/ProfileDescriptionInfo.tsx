/* types */
import type { MouseEvent, PropsWithChildren } from "react";
import type { DBProfiles, ProfileEventHandler } from "../../types"
import type { calcMutualFollowers } from "$feature/Profile/util/calcMutualFollower";
/* utils */
import { Trans } from 'react-i18next';
import { PROFILE } from "$feature/Profile/constants"
/* styles */
import "./style/profileDescriptionInfo.scss"

type ProfileDescriptionInfoProps = {
    mutable_id: DBProfiles["mutable_id"]
    nickname: DBProfiles["nickname"], 
    description: DBProfiles["description"]
    mutualFollowers: ReturnType<typeof calcMutualFollowers>

    eventHandler: ProfileEventHandler
}

export default function ProfileDescriptionInfo(props: ProfileDescriptionInfoProps) {
    const { mutable_id, nickname, mutualFollowers, description, eventHandler } = props
    const mutualFollowerDisplayCount = PROFILE.MUTUAL_FOLLOWER_DISPLAY_COUNT
    const totalMutualFollowerCount = mutualFollowers.length
    const displayedMutualFollowers = mutualFollowers
        .slice(0, mutualFollowerDisplayCount)
        .map((node) => node.follower_id.mutable_id)
    const additionalCount = Math.max(totalMutualFollowerCount - mutualFollowerDisplayCount, 0)

    const onClickMutualFollowing = (e: MouseEvent) => {
        e.stopPropagation()
        if (eventHandler.mutualFollowersModal) eventHandler.mutualFollowersModal(mutable_id)
    }

    return (
        <div className="profile-description-info-component">
            {nickname &&
                <span className="profile-description-info-component__nickname"><em>{nickname}</em></span>
            }
            {description &&
                <span className="profile-description-info-component__description">{description}</span>
            }
            {mutualFollowers && Boolean(mutualFollowers?.length) && 
                <span 
                    onClick={onClickMutualFollowing}
                    className="profile-description-info-component__mutual-followers-list"
                >
                    <Trans
                        i18nKey="header.followedBy" 
                        values={{ 
                            additionalCount,
                            mutualFollowers: displayedMutualFollowers, 
                        }}
                        count={additionalCount}
                        components={[<MutualFollowerSplitHelper />]}
                    />
                </span>
            }
        </div>
    )
}

// COMMENT i18n에서 받는 문자열로 받는 자녀를 찢어서 span으로 처리하는 컴포넌트
const MutualFollowerSplitHelper = (props: PropsWithChildren) => {
    const stringifiedItems = (props.children && Array.isArray(props.children)) 
        ? String(props?.children?.[0])
        : ''
    const unstringifiedItems = stringifiedItems.split(',');
    return (
        <>
            {unstringifiedItems && 
                unstringifiedItems.map((item) => (
                    <span 
                        key={item}
                        className="profile-description-info-component__mutual-follower"
                    >
                        {item}
                    </span>
                ))
            }
            {!unstringifiedItems &&
                props.children
            }
        </>
    )
}