import { createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute('/_auth')({
    beforeLoad: async ({ context }) => {
        const sessionUser = context.store.getState().auth.sessionUser
        if (!sessionUser) {
            throw redirect({
                to: '/account/signIn',
            })
        }
    }
})
  