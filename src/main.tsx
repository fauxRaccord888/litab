import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from "react-hot-toast"
import { ApolloProvider } from '@apollo/client'
import { Analytics } from "@vercel/analytics/react"

import { persistor, store } from "./lib/stores/store.ts"
import { routeTree } from './routeTree.gen.ts'
import apolloClient from '$lib/graphql/client.ts'

import './App.scss'
import './locales/i18n.ts'

const router = createRouter({
    routeTree,
    context: {
        store,
        apolloClient,
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
        <ApolloProvider client={apolloClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Toaster toastOptions={{
                        duration: 1000
                    }} />
                    <RouterProvider router={router} />
                </PersistGate>
            </Provider>
        </ApolloProvider>
        <Analytics />
    </React.StrictMode>
)