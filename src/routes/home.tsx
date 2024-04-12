import { checkUserAndStore } from '$feature/auth/utils'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
    beforeLoad: async ({ context }) => {
        const currentUser = await checkUserAndStore(context.store)
        if (currentUser) {
            throw redirect({
                to: '/feed',
                resetScroll: false
            })
        } else {
            throw redirect({
                to: "/landing",
            })
        }
    },
})