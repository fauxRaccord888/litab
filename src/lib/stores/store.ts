import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./registerSlice"

export const store = configureStore({
    reducer: {
        register: registerReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type AppRootState = ReturnType<typeof store.getState>