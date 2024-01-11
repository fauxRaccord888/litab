import Layout from '$lib/layout/Layout'
import LeftSideBar from "$lib/components/NavigationBar/LeftSideBar"


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
  component: () => <div>가입</div>,
})

const routeTree = rootRoute.addChildren([indexRoute, registerRoute])
export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}