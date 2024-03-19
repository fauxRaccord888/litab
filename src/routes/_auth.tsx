import { getProcessedContext } from '$feature/navigate/utils'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
    beforeLoad: async ({ context }) => {
        const { currentUser } = getProcessedContext(context)
        if (!currentUser) {
            throw redirect({
                to: '/account/signin',
            })
        }
    },
})
