import { useCurrentUser } from '$feature/auth/hooks'
import { useAccountNavigate } from '$feature/navigate/hooks'
import { createFileRoute } from '@tanstack/react-router'

import { Outlet } from '@tanstack/react-router'
import AuthGate from '$feature/navigate/components/AuthGate'
import LoadingSpinner from '$lib/components/common/LoadingSpinner'

export const Route = createFileRoute('/_auth')({
    component: Auth
})

function Auth() {
    const { loading, currentUser } = useCurrentUser()
    const accountNavigate = useAccountNavigate()

    if (loading) return <LoadingSpinner />
    if (!currentUser) return <AuthGate menuModal={accountNavigate.accountMenuModal} />
    return <Outlet />
}