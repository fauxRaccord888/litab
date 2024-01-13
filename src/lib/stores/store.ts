import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./registerSlice"
import preferenceReducer from "./preferenceSlice"
import networkRequestReducer from "./networkRequestSlice";

export const store = configureStore({
    reducer: {
        networkRequest: networkRequestReducer,
        register: registerReducer,
        preference: preferenceReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type AppRootState = ReturnType<typeof store.getState>