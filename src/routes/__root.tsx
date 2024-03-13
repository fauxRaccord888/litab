import type { AppStore } from '$lib/stores/store'
import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { Outlet, rootRouteWithContext, ScrollRestoration } from '@tanstack/react-router'
import { checkSessionUser, checkTableUser } from '$feature/auth/function'
import { getScrollKey } from '$lib/utils/route/getScrollKey'

import Layout from '$lib/layout/Layout'
import LeftSideBar from '$lib/components/NavigationBar/LeftSideBar'

export const Route = rootRouteWithContext<{
    store: AppStore
    apolloClient: ApolloClient<NormalizedCacheObject>
}>()({
    component: RootComponent,
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
