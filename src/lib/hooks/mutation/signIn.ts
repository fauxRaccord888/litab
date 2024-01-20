// 로그인으로 supabase auth의 세션 정보가 바뀔 것이므로 변이에 해당
/* hooks */
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "@tanstack/react-router";
/* types */
import type { AppRootState } from "$lib/stores/store";
/* database */
import { signIn_DB } from "$lib/database/auth";
/* stores */
import { setSessionUser } from "$lib/stores/authSlice";

export function useSignInHandler() {
    const signIn = useSelector((state: AppRootState) => state.signIn)
    const router = useRouter()
    const dispatch = useDispatch()

    const signInHanlder = useCallback(
        async () => {
            const res = signIn_DB(signIn)
            res.then((res) => {
                router.history.push('/')
                dispatch(setSessionUser(res?.data?.session?.user))
            })
        }
    , [signIn, router, dispatch])
    return signInHanlder
}