/* route */
import { createFileRoute } from '@tanstack/react-router'
/* hooks */
import { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { useLazyQuery } from "@apollo/client"
/* Mutation (hooks)*/
import { useSignInOnAuthMutation } from '$feature/auth/hooks'
import { getUserById_QUERY } from "$feature/auth/graphql"
/* types */
import type { AppDispatch } from "$lib/stores/store"
import type { GetUserByIdQuery } from "$lib/graphql/__generated__/graphql"
/* components */
import SignInComponent from "$feature/SignIn"

export const Route = createFileRoute('/_guest/account/signIn/')({
    component: SignIn
})

export default function SignIn() {
    const dispatch = useDispatch<AppDispatch>()
    const [signIn, authStatus] = useSignInOnAuthMutation()
    const [tableQuery, tableStatus] = useLazyQuery<GetUserByIdQuery>(getUserById_QUERY)

    const { loading: authLoading, error: authError, data: authData } = authStatus 
    const { loading: tableLoading, error: tableError } = tableStatus

    useEffect(() => {
        if (authData?.id) {
            tableQuery({ variables: { id: authData.id } })
        }
    }, [authData, dispatch, tableQuery])

    if (authLoading || tableLoading) return null
    if (authError || tableError) return null

    return (
        <SignInComponent handleSignIn={signIn}/>
    )
}
