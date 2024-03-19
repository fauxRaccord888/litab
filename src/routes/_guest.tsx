import { getProcessedContext } from "$feature/navigate/utils"
import { createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute('/_guest')({
    beforeLoad: async ({ context }) => {
        const { currentUser } = getProcessedContext(context)

        if (currentUser) {
            throw redirect({
                to: '/feed',
            })
        }
    }
})
  