import Layout from '$lib/layout/Layout'
import LeftSideBar from "$lib/components/NavigationBar/LeftSideBar"

import Register from '$lib/router/Register';
import SignIn from '$lib/router/SignIn';
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

const signInRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/signin',
  component: SignIn,
})

const preferenceRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/preference',
  component: Preference,
})

const routeTree = rootRoute.addChildren([indexRoute, registerRoute, signInRoute, preferenceRoute])
export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}