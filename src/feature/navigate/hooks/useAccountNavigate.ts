import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"

export function useAccountNavigate() {
    const navigate = useNavigate()

    const registerNavigator = useCallback(() => {
        navigate({ 
            params: {},
            search: {
                register: true
            },
        })
    }, [navigate])

    const signInNavigator = useCallback(() => {
        navigate({ 
            params: {},
            search: {
                signIn: true
            },
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

    const acocuntMenuModalNavigator = useCallback(() => {
        navigate({ 
            params: {},
            search: {
                accountMenu: true
            },
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