/* hooks */
import { useCallback } from "react";
import { useRouter } from "@tanstack/react-router";
import { useDispatch, useSelector } from "react-redux";
/* types */
import type { AppRootState } from "$lib/stores/store";
/* database */
import { registerOnAuth_DB } from "$lib/database/auth";
import { registerOnTable_DB } from "$lib/database/profiles";
/* stores */
import { setUser } from "$lib/stores/authSlice";

export function useRegisterOnAuthHandler() {
    const register = useSelector((state: AppRootState) => state.register)
    const regitserHandler = useCallback(
        () => registerOnAuth_DB({
            email: register.email.value,
            password: register.password.value
        })
    , [register])
    return regitserHandler
}

export function useRegisterOnTableHandler() {
    const router = useRouter()
    const dispatch = useDispatch()

    const regitserHandler = useCallback(
        (userId: string) => {
            const res = registerOnTable_DB(userId)
            res.then((res) => {
                router.history.push('/')
                dispatch(setUser(res?.data?.[0]))
            })
        }
    , [router, dispatch])
    return regitserHandler
}