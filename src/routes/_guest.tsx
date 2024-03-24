import { checkUserAndStore } from "$feature/auth/utils"
import { createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute('/_guest')({
    beforeLoad: async ({ context }) => {
        const currentUser = await checkUserAndStore(context.store)

        if (currentUser) {
            throw redirect({
                to: '/feed',
            })
        }
    }
})