import type { AppStore } from '$lib/stores/store'
import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { createRootRouteWithContext, useMatches } from "@tanstack/react-router"
import { Outlet, ScrollRestoration } from '@tanstack/react-router'
import { getScrollKey } from '$lib/utils/route/getScrollKey'
import { checkUserAndStore } from '$feature/auth/utils';

import Layout from '$lib/layout/Layout'
import FallbackRoot from '$lib/components/common/FallbackRoot';
import ModalController from './-global/-modal';
import NavigationBar from '$feature/navigate/components/NavigationBar'
import { Suspense } from 'react';

type RootContext = {
    store: AppStore
    apolloClient: ApolloClient<NormalizedCacheObject>
    getTitle?: () => string
}  

export type RootSearch = {
    nodeUpsertId?: string | undefined
    insertNode?: boolean | undefined
    pentagramMenuId?: string | undefined
    nodeViewId?: string | undefined
    revisionViewId?: string | undefined
    accountMenu?: boolean | undefined
    register?: boolean | undefined
    signIn?: boolean | undefined

    page?: number | undefined
    initiated?: boolean | undefined
    redirect?: string | undefined
}

export const Route = createRootRouteWithContext<RootContext>()({
    component: RootComponent,
    beforeLoad: async ({context}) => {
        const { store } = context
        const user = await checkUserAndStore(store)
        return { user }
    },
    validateSearch: (search: Record<string, unknown>): RootSearch => {
        return {
            nodeUpsertId: (search.nodeUpsertId as string) || undefined,
            insertNode: (search.insertNode as boolean) || undefined,
            pentagramMenuId: (search.pentagramMenuId as string) || undefined,
            nodeViewId: (search.nodeViewId as string) || undefined,
            revisionViewId: (search.revisionViewId as string) || undefined,
            accountMenu: (search.accountMenu as boolean) || undefined,
            register: (search.register as boolean) || undefined,
            signIn: (search.signIn as boolean) || undefined,

            page: (search.page as number) || undefined,
            initiated: (search.initiated as boolean) || undefined,
            redirect: (search.redirect as string) || undefined
        }
    },
})

function RootComponent() {
    const search = Route.useSearch()
    const matches = useMatches();

    const breadcrumbs = matches
        .map((match) => {
            const { routeContext } = match
            if (!('getTitle' in routeContext)) return ''
            if (typeof routeContext.getTitle === 'undefined') return ''
            return routeContext.getTitle()
        })
        .filter(Boolean)

    document.title = breadcrumbs.join("/") || "Pentagram"

    return (
        <Suspense fallback={<FallbackRoot />}>
            <Layout left={<NavigationBar />} >
                <ScrollRestoration 
                    getKey={(location) => getScrollKey(location)}
                />
                <ModalController search={search} />
                <Outlet />
            </Layout>
        </Suspense>
  )
}
