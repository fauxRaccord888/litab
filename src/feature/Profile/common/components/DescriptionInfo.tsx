/* types */
import type { DBProfiles, IHeaderProfileProps } from "$feature/Profile/types"
import type { PropsWithChildren } from "react";
/* constants */
import PROFILE from "$feature/Profile/common/constants"
/* styles */
import "./style/description.scss"
/* locale */
import { Trans } from 'react-i18next';

interface DescriptionInfoProps extends DBProfiles {
    id: string,
    nickname?: string | null,
    description?: string | null
}

export default function DescriptionInfo(props: IHeaderProfileProps<DescriptionInfoProps>) {
    const { profile, action, mutualFollowers } = props
    const mutualFollowerDisplayCount = PROFILE.DEFAULT_VALUES.mutualFollowerDisplayCount

    const totalMutualFollowerCount = mutualFollowers?.length ?? 0
    const displayedMutualFollowers = mutualFollowers?.slice(0, mutualFollowerDisplayCount)
    const additionalCount = Math.max(totalMutualFollowerCount - mutualFollowerDisplayCount, 0)

    return (
        <div className="description-info-container">
            {profile?.nickname &&
                <span className="nickname"><em>{profile?.nickname}</em></span>
            }
            {profile?.description &&
                <span className="description">{profile?.description}</span>
            }
            {mutualFollowers && !!mutualFollowers?.length && action?.handleShowMutualFollowing &&
                <span className="mutual-follower">
                    <button onClick={action.handleShowMutualFollowing}>
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