import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { Provider } from 'react-redux'
import { Toaster } from "react-hot-toast"

import { store } from "./lib/stores/store.ts"
import { router } from '$lib/router'

import './App.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <Toaster />
      <RouterProvider router={router}/>
    </React.StrictMode>
  </Provider>
)
