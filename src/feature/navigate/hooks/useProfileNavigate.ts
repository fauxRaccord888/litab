import { closeModal } from "$feature/portal/store/modalSlice"
import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"
import { useDispatch } from "react-redux"

export function useProfileNavigate() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const profileSelectNavigator = useCallback((mutableId?: string) => {
        if (mutableId) {
            navigate({ to: '/profile/$mutableId', params: { mutableId } })
        }
        dispatch(closeModal())
    }, [dispatch, navigate])

    const profileSelectMenuModalNavigator = useCallback((mutableId: string) => {
        navigate({ to: '/profile/$mutableId/menu', params: { mutableId } })
    }, [navigate])

    const mutualFollowersModalNavigator = useCallback((mutableId: string)=> {
        navigate({to: '/profile/$mutableId/mutualFollowers', params: { mutableId }})
    }, [navigate])

    const followingsModalNavigator = useCallback((mutableId: string)=> {
        navigate({to: '/profile/$mutableId/followings', params: { mutableId }})
    }, [navigate])

    const followersModalNavigator = useCallback((mutableId: string)=> {
        navigate({to: '/profile/$mutableId/followers', params: { mutableId }})
    }, [navigate])

    return {
        profileSelect: profileSelectNavigator,

        profileSelectMenuModal: profileSelectMenuModalNavigator,
        mutualFollowersModal: mutualFollowersModalNavigator,
        followingsModal: followingsModalNavigator,
        followersModal: followersModalNavigator,
    }
}