/* hooks */
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useSessionUser, useUser } from './../hooks/auth/user';
import { useRegisterOnTableHandler } from "$lib/hooks/mutation";
/* types */
import type { PropsWithChildren } from "react"
import type { AppRootState } from "$lib/stores/store"

export default function AuthLayout (props: PropsWithChildren) {
    const { user, sessionUser } = useSelector((state: AppRootState) => state.auth)
    const { query: querySessionUser } = useSessionUser()
    const { query: queryTableUser } = useUser(sessionUser)
    const registerOnTableHandler = useRegisterOnTableHandler()

    useEffect(() => {
        if (!sessionUser) {
            querySessionUser()
        }
    }, [sessionUser, querySessionUser])

    useEffect(() => {
        const fetchUser = async () => {
            if (sessionUser && !user) {
                const response = await queryTableUser()
                if (!response || response.length === 0) {
                    registerOnTableHandler(sessionUser.id)
                }
            }
        }
        fetchUser()
    }, [sessionUser, user, queryTableUser, registerOnTableHandler])

    return (
        <>
            {props.children}
        </>
    )
}