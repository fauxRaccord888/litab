// 로그아웃으로 supabase auth의 세션 정보가 바뀔 것이므로 mutation에 해당
/* hooks */
import { useCallback } from "react";
import { useDispatch } from "react-redux";
/* stores */
import { resetUserInfo } from "$lib/stores/authSlice";
/* utils */
import { supabaseClient } from "$lib/graphql/supabaseClient"

export function useSignOutHandler() {
    const dispatch = useDispatch()

    const signOutHandler = useCallback(() => {
        const res = supabaseClient.auth.signOut()
        res.then(() => dispatch(resetUserInfo()))
    }, [dispatch])

    return signOutHandler
}