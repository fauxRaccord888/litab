import { Outlet, rootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import type { AppStore } from '$lib/stores/store'
import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'

import { checkSessionUser, checkTableUser } from '$feature/auth/function'

import Layout from '$lib/layout/Layout'
import LeftSideBar from '$lib/components/NavigationBar/LeftSideBar'
import Modal from '$feature/Modal'

export const Route = rootRouteWithContext<{
    store: AppStore
    apolloClient: ApolloClient<NormalizedCacheObject>
}>()({
    beforeLoad: async ({ context }) => {
        const { store, apolloClient } = context
        checkSessionUser({ store })
        checkTableUser({ store, client: apolloClient})
    },
    component: RootComponent,
})

function RootComponent() {
    return (
        <Layout left={<LeftSideBar />} >
            <Modal />
            <Outlet />
            <TanStackRouterDevtools />
        </Layout>
  )
}
