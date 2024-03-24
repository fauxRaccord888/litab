import { checkUserAndStore } from '$feature/auth/utils'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
    beforeLoad: async ({ context }) => {
        const currentUser = await checkUserAndStore(context.store)

        if (!currentUser) {
            throw redirect({
                to: '/account/signin',
            })
        }
    },
})
