import type { AppStore } from '$lib/stores/store'
import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { Outlet, rootRouteWithContext, ScrollRestoration } from '@tanstack/react-router'
import { checkSessionUser, getTableUserOrRegister } from '$feature/auth/function'
import { getScrollKey } from '$lib/utils/route/getScrollKey'
import ModalController from './-global/-modal';

import Layout from '$lib/layout/Layout'
import NavigationBar from '$feature/navigate/components/NavigationBar'

export type RootSearch = {
    nodeUpsertId: string | undefined
    insertNode: boolean | undefined
    pentagramInteractionId: string | undefined
    nodeViewId: string | undefined
    revisionViewId: string | undefined
}

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
    validateSearch: (search: Record<string, unknown>): RootSearch => {
        return {
            nodeUpsertId: (search.nodeUpsertId as string) || undefined,
            insertNode: (search.insertNode as boolean) || undefined,
            pentagramInteractionId: (search.pentagramInteractionId as string) || undefined,
            nodeViewId: (search.nodeViewId as string) || undefined,
            revisionViewId: (search.revisionViewId as string) || undefined,
        }
    },
})

function RootComponent() {
    return (
        <Layout left={<NavigationBar />} >
            <ScrollRestoration 
                getKey={(location) => getScrollKey(location)}
            />
            <ModalController route={Route} />
            <Outlet />
        </Layout>
  )
}
