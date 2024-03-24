import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
    beforeLoad: async ({ context }) => {
        const { sessionUser } = context.store.getState().auth
        if (sessionUser) {
            throw redirect({
                to: '/feed',
            })
        }
        throw redirect({
            to: '/account/signin',
        })
    }
})
