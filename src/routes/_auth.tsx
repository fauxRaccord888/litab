import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
    beforeLoad: async ({ context }) => {
        const { sessionUser, currentUser } = context
        if (!sessionUser) {
            throw redirect({
                to: '/account/signIn',
            })
        }

        if (!currentUser) {
            throw redirect({
                to: '/error',
            })
        }
    },
})
