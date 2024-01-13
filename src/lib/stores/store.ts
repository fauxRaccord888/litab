import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./registerSlice"
import signInSliceReducer from "./signInSlice";
import preferenceReducer from "./preferenceSlice"
import networkRequestReducer from "./networkRequestSlice";

export const store = configureStore({
    reducer: {
        networkRequest: networkRequestReducer,
        register: registerReducer,
        signIn: signInSliceReducer,
        preference: preferenceReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type AppRootState = ReturnType<typeof store.getState>