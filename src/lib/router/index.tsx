import Layout from '$lib/layout/Layout'
import LeftSideBar from "$lib/components/NavigationBar/LeftSideBar"

import Register from '$lib/components/Register';
import Preference from '$lib/components/Preference';

import {
  Outlet,
  Router,
  Route,
  RootRoute,
} from '@tanstack/react-router'

const rootRoute = new RootRoute({
  component: () => (
    <>
      <Layout 
        left={<LeftSideBar />}
      >
        <Outlet />
      </Layout>
    </>
  ),
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return (
      <div>
        <h3>인덱스 페이지</h3>
      </div>
    )
  },
})

const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: Register,
})

const preferenceRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/preference',
  component: Preference,
})

const routeTree = rootRoute.addChildren([indexRoute, registerRoute, preferenceRoute])
export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}