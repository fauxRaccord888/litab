import { createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute('/_auth')({
    beforeLoad: ({ context }) => {
      const { auth } = context.store.getState()
      if (!auth.sessionUser) {
        throw redirect({
          to: '/account/signIn',
        })
      }
    }
})
  