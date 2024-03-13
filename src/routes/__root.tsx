import type { AppStore } from '$lib/stores/store'
import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { Outlet, rootRouteWithContext, ScrollRestoration } from '@tanstack/react-router'
import { checkSessionUser, getTableUserOrRegister } from '$feature/auth/function'
import { getScrollKey } from '$lib/utils/route/getScrollKey'

import Layout from '$lib/layout/Layout'
import LeftSideBar from '$lib/components/NavigationBar/LeftSideBar'

export const Route = rootRouteWithContext<{
    store: AppStore
    apolloClient: ApolloClient<NormalizedCacheObject>
}>()({
    component: RootComponent,
    beforeLoad: async ({context}) => {
        const { apolloClient } = context
        const sessionUser = await checkSessionUser()
        const currentUser = await getTableUserOrRegister({ sessionUser, apolloClient })
        return {
            sessionUser,
            currentUser
        }
    },
})

function RootComponent() {
    return (
        <Layout left={<LeftSideBar />} >
            <ScrollRestoration 
                getKey={(location) => getScrollKey(location)}
            />
            <Outlet />
        </Layout>
  )
}
