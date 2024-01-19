import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router, RouterProvider } from '@tanstack/react-router'
import { Provider } from 'react-redux'
import { Toaster } from "react-hot-toast"

import { store } from "./lib/stores/store.ts"
import { routeTree } from './routeTree.gen.ts'

import './App.scss'

const router = new Router({
  routeTree,
  context: {
    store: store
  },
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)