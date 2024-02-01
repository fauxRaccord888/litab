/* route */
import { createFileRoute } from '@tanstack/react-router'
/* hooks */
import { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { useMutation } from "@apollo/client"
/* Mutation (hooks)*/
import { useRegisterOnAuthMutation } from "$feature/auth/hooks"
import { registerUser_GRAPHQL } from "$feature/auth/graphql"
/* store */
import { setSessionUser } from "$lib/stores/authSlice"
/* types */
import type { AppDispatch } from "$lib/stores/store"
import type { RegisterUserMutation } from "$lib/graphql/__generated__/graphql"
/* components */
import RegisterComponent from "$feature/Register"

export const Route = createFileRoute('/_guest/account/register/')({
    component: Register
})

export default function Register() {
    const dispatch = useDispatch<AppDispatch>()
    const [authMutation, authStatus] = useRegisterOnAuthMutation()
    const [tableMutation, tableStatus] = useMutation<RegisterUserMutation>(registerUser_GRAPHQL)

    const { loading: authLoading, error: authError, data: authData } = authStatus 
    const { loading: tableLoading, error: tableError } = tableStatus

    useEffect(() => {
        if (authData?.id) {
            tableMutation({ variables: { id: authData.id } })
            dispatch(setSessionUser(authData))
        }
    }, [authData, dispatch, tableMutation])        

    if (authLoading || tableLoading) return null
    if (authError || tableError) return null

    return (
        <RegisterComponent authMutation={authMutation}/>
    )
}
