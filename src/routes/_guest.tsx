import { createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute('/_guest')({
    beforeLoad: ({ context }) => {
      const { auth } = context.store.getState()
      if (auth.sessionUser) {
        throw redirect({
          to: '/',
        })
      }
    }
})
  