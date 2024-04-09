import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"

export function useAccountNavigate() {
    const navigate = useNavigate()

    const registerNavigator = useCallback(() => {
        navigate({ 
            search: (prev) => ({
                page: prev.page,
                initiated: prev.initiated,
                redirect: prev.redirect,
                register: true
            }),
        })
    }, [navigate])

    const signInNavigator = useCallback(() => {
        navigate({
            search: (prev) => ({
                page: prev.page,
                initiated: prev.initiated,
                redirect: prev.redirect,
                signIn: true
            }),
        })
    }, [navigate])

    const updateNavigator = useCallback(() => {
        navigate({ to: '/account/update'})
    }, [navigate])

    const signOutNavigator = useCallback(() => {
        navigate({ 
            to: '/account/signout',
        })
    }, [navigate])

    const acocuntMenuModalNavigator = useCallback((payload?: {redirect?: string}) => {
        navigate({ 
            search: (prev) => ({
                redirect: payload?.redirect,
                page: prev.page,
                initiated: prev.initiated,
                accountMenu: true
            }),
        })
    }, [navigate])

    return {
        register: registerNavigator,
        signIn: signInNavigator,
        update: updateNavigator,
        signOut: signOutNavigator,

        accountMenuModal: acocuntMenuModalNavigator
    }
}