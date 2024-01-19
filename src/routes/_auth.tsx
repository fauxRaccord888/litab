import { FileRoute, redirect } from "@tanstack/react-router"

export const Route = new FileRoute('/_auth').createRoute({
    beforeLoad: ({ context }) => {
      const { auth } = context.store.getState()
      if (!auth.sessionUser) {
        throw redirect({
          to: '/account/signIn',
        })
      }
    }
})
  