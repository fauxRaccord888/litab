import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        modal: modalReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type AppRootState = ReturnType<typeof store.getState>
export type AppStore = typeof store