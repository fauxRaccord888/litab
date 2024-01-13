import { useDispatch } from "react-redux"

import { useEffect, type PropsWithChildren } from "react"
import type { AppDispatch } from "$lib/stores/store"

import { checkLocalStorage } from "$lib/stores/authSlice"

export default function AuthLayout (props: PropsWithChildren) {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(checkLocalStorage())
    }, [dispatch])
    
    return (
        <>
            {props.children}
        </>
    )
}