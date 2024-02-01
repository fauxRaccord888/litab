/* types */
import type { DBProfiles } from "$feature/Profile/types"
import type { PropsWithChildren } from "react";
/* hooks */
import { useMutualFollowers, useProfileNavigation } from "../hooks";
/* constants */
import PROFILE from "$feature/Profile/constants"
/* styles */
import "./style/description.scss"
/* locale */
import { Trans } from 'react-i18next';

interface DescriptionInfoProps extends DBProfiles {
    nickname?: string | null,
    description?: string | null
}

export default function DescriptionInfo(props: DescriptionInfoProps) {
    const { id, mutable_id, nickname, followers, description } = props
    const mutualFollowers = useMutualFollowers(id, followers)
    const { mutualFollowers: handleShowMutualFollowers } = useProfileNavigation()
    
    const mutualFollowerDisplayCount = PROFILE.DEFAULT_VALUES.mutualFollowerDisplayCount
    const totalMutualFollowerCount = mutualFollowers.length
    const displayedMutualFollowers = mutualFollowers
        .slice(0, mutualFollowerDisplayCount)
        .map((edge) => edge.node.mutable_id)
    const additionalCount = Math.max(totalMutualFollowerCount - mutualFollowerDisplayCount, 0)

    const handleShowMutualFollowing = () => {
        handleShowMutualFollowers(mutable_id)
    }

    return (
        <div className="description-info-container">
            {nickname &&
                <span className="nickname"><em>{nickname}</em></span>
            }
            {description &&
                <span className="description">{description}</span>
            }
            {mutualFollowers && !!mutualFollowers?.length && 
                <span className="mutual-follower">
                    <button onClick={handleShowMutualFollowing}>
                        <Trans
                            i18nKey="header.followedBy" 
                            values={{ 
                                additionalCount,
                                mutualFollowers: displayedMutualFollowers, 
                            }}
                            count={additionalCount}
                            components={[<MutualFollowerSplitHelper />]}
                        />
                    </button>
                </span>
            }
        </div>
    )
}

// i18n에서 받는 문자열로 받는 자녀를 찢어서 span으로 처리하는 컴포넌트
const MutualFollowerSplitHelper = (props: PropsWithChildren) => {
    const stringifiedItems = (props.children && Array.isArray(props.children)) 
        ? String(props?.children?.[0])
        : ''
    const unstringifiedItems = stringifiedItems.split(',');
    return (
        <>
            {unstringifiedItems && 
                unstringifiedItems.map((item) => <span key={item}>{item}</span>)
            }
            {!unstringifiedItems &&
                props.children
            }
        </>
    )
}