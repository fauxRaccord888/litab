import { createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute('/_guest')({
    beforeLoad: async ({ context }) => {
        const { sessionUser } = context

        if (sessionUser) {
            throw redirect({
                to: 'account/signIn',
            })
        }
    }
})
  