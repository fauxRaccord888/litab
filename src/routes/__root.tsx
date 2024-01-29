import { Outlet, rootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import type { AppStore } from '$lib/stores/store'
import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'

import Layout from '$lib/layout/Layout'
import LeftSideBar from '$lib/components/NavigationBar/LeftSideBar'
import AuthLayout from '$lib/layout/AuthLayout'

export const Route = rootRouteWithContext<{
  store: AppStore
  apolloClient: ApolloClient<NormalizedCacheObject>
}>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <Layout
      left={<LeftSideBar />}
    >
      <Outlet />
      <TanStackRouterDevtools />
    </Layout>
  )
}
