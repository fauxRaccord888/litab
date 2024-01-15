import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import type { PropsWithChildren } from "react"
import type { AppDispatch, AppRootState } from "$lib/stores/store"

import { getSessionUser, getTableUser } from "$lib/stores/authSlice"

export default function AuthLayout (props: PropsWithChildren) {
    const { sessionUser } = useSelector((state: AppRootState) => state.auth)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch((getSessionUser()))
    }, [dispatch])

    useEffect(() => {
        dispatch(getTableUser(sessionUser))
    }, [dispatch, sessionUser])

    return (
        <>
            {props.children}
        </>
    )
}