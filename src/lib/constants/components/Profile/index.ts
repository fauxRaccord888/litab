import type { ProfileForeignTableKeys } from '$lib/types/components/Profile/Header';
import type { SettingsLangOption } from '$lib/types/settings'
import type { ReactElement } from 'react';

// TODO 상수 관리 베스트 프랙티스

// 테이블에 키로 조회해서 카운트를 봐야하므로 타입 세이프티 필요
// TODO 이중역할 - 팔로잉 정보 TABLE에서 조회하는 KEY의 역할과 로컬라이징 역할을 함께 수행하는 문제
type IFollowingInfoConstants = Partial<Record<ProfileForeignTableKeys, SettingsLangOption>>
const FOLLOWING_INFO: IFollowingInfoConstants= {
    posts: {
        kr: '게시물',
        en: 'posts'
    },
    followings: {
        kr: '팔로우',
        en: 'following'
    },
    followers: {
        kr: '팔로워',
        en: 'followers'
    }
}

const BUTTON_LABEL: Record<string, SettingsLangOption> = {
    follow: {
        kr: '팔로우',
        en: 'follow'
    },
}

const MUTUAL_FOLLOWER: Record<string, SettingsLangOption> = {
    followedBy: {
        kr: '이 팔로우하고 있습니다',
        en: "Followed by "
    },
    unit: {
        kr: '명',
        en: ' more'
    },
    prefix: {
        kr: ' 외 ',
        en: ' + '
    }
}

// TODO 로컬라이징 프랙티스 최적화
const MESSAGE_HELPER = {
    mutualFollower: (
        totalMutualFollower:number, 
        mutualFollowers: ReactElement[], 
        lang: keyof SettingsLangOption
    ) =>  {
        const extraFollowerCount = totalMutualFollower - DEFAULT_VALUES.mutualFollowShowCount
        const hasExtraFollower = extraFollowerCount > 0
        
        const prefix = MUTUAL_FOLLOWER.prefix[lang]
        const unit = MUTUAL_FOLLOWER.unit[lang]
        
        const followedByMessage = MUTUAL_FOLLOWER.followedBy[lang]
        const extraMessage = hasExtraFollower ? `${prefix}${extraFollowerCount}${unit}` : ''

        // [<span>foo</span>, <span>bar</span>, '님 외 baz명', '이 팔로우하고 있습니다']
        if (lang === 'kr') return [mutualFollowers, extraMessage, followedByMessage]
        // ['Followed by ', <span>foo</span>, <span>bar</span>, ' + baz more']
        return [followedByMessage, mutualFollowers, extraMessage]
    }
} 

const DEFAULT_VALUES = {
    buttonColor: [128, 128, 128],
    mutualFollowShowCount: 2
}

const PROFILE = {
    FOLLOWING_INFO,
    BUTTON_LABEL,
    MESSAGE_HELPER,
    DEFAULT_VALUES
}

export default PROFILE