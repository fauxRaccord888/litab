import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import registerReducer from "./registerSlice"
import signInSliceReducer from "./signInSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        register: registerReducer,
        signIn: signInSliceReducer,
        modal: modalReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type AppRootState = ReturnType<typeof store.getState>
export type AppStore = typeof store