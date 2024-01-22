import type { Tables } from '$lib/database/types';
import type { SettingsLangOption } from '$lib/types/settings';

// TODO extends하는 것을 재검토 (두 테이블 이상의 결과를 관리하면 중복? )
// TODO mutual following 처리
// TODO following 목록을 상태로 관리해야 한다? - mutual following을 계속 계산?(비쌈)
export interface IProfileKeys extends Tables<'profiles'> {
    img_src: string,
    following: number
    follower: number
    post: number
    mutualFollowing: string[],
}

// TODO 너무 강한 타입 제약으로 인한 추후 확장성? 
// 현재로는 마우스오버 프로필 오버레이에서도 팔로우는 필요하므로 타당
// profile 대신에 data? => 쉽게 interface implements?
export interface IHeaderProfileProps {
    profile: IProfileKeys
    action: {
        handleFollow: () => void
        handleShowMore?: () => void
        handleShowMutualFollowing?: () => void
    }
    settings: {
        lang: keyof SettingsLangOption
    }
}