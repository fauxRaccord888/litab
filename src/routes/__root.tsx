import type { AppStore } from '$lib/stores/store'
import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { Outlet, rootRouteWithContext, ScrollRestoration } from '@tanstack/react-router'
import { getScrollKey } from '$lib/utils/route/getScrollKey'
import { getUserObservable } from '$feature/auth/utils';

import Layout from '$lib/layout/Layout'
import ModalController from './-global/-modal';
import NavigationBar from '$feature/navigate/components/NavigationBar'

export type RootSearch = {
    nodeUpsertId: string | undefined
    insertNode: boolean | undefined
    pentagramMenuId: string | undefined
    nodeViewId: string | undefined
    revisionViewId: string | undefined
}

export const Route = rootRouteWithContext<{
    store: AppStore
    apolloClient: ApolloClient<NormalizedCacheObject>
}>()({
    component: RootComponent,
    beforeLoad: async ({context}) => {
        const { store, apolloClient } = context
        const userObservable = await getUserObservable(store, apolloClient)
        return {
            userObservable
        }
    },
    validateSearch: (search: Record<string, unknown>): RootSearch => {
        return {
            nodeUpsertId: (search.nodeUpsertId as string) || undefined,
            insertNode: (search.insertNode as boolean) || undefined,
            pentagramMenuId: (search.pentagramMenuId as string) || undefined,
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
