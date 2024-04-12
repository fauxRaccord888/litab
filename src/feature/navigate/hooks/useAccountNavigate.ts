import { closeModal, setAccountMenu, setRegister, setSignIn } from "$feature/portal/store/modalSlice"
import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"
import { useDispatch } from "react-redux"

export function useAccountNavigate() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const registerNavigator = useCallback(() => {
        dispatch(setRegister())
    }, [dispatch])

    const signInNavigator = useCallback(() => {
        dispatch(setSignIn())
    }, [dispatch])

    const updateNavigator = useCallback(() => {
        navigate({ to: '/account/update'})
        dispatch(closeModal())
    }, [dispatch, navigate])

    const signOutNavigator = useCallback(() => {
        navigate({ 
            to: '/account/signout',
        })
    }, [navigate])

    const acocuntMenuModalNavigator = useCallback(() => {
        dispatch(setAccountMenu())
    }, [dispatch])

    return {
        register: registerNavigator,
        signIn: signInNavigator,
        update: updateNavigator,
        signOut: signOutNavigator,

        accountMenuModal: acocuntMenuModalNavigator
    }
}