/* route */
import { createFileRoute } from '@tanstack/react-router'
/* hooks */
import { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { useLazyQuery } from "@apollo/client"
/* Mutation (hooks)*/
import { useSignInOnAuthMutation } from '$feature/auth/hooks'
import { getUserById_GRAPHQL } from "$feature/auth/graphql"
/* store */
import { setSessionUser, setUser } from "$lib/stores/authSlice"
/* types */
import type { AppDispatch } from "$lib/stores/store"
import type { GetUserByIdQuery } from "$lib/graphql/__generated__/graphql"
/* utils */
import { getFirstNodeOfCollection } from "$lib/utils/graphql"
/* components */
import SignInComponent from "$feature/SignIn"

export const Route = createFileRoute('/_guest/account/signIn/')({
    component: SignIn
})

export default function SignIn() {
    const dispatch = useDispatch<AppDispatch>()
    const [authMutation, authStatus] = useSignInOnAuthMutation()
    const [tableQuery, tableStatus] = useLazyQuery<GetUserByIdQuery>(getUserById_GRAPHQL)

    const { loading: authLoading, error: authError, data: authData } = authStatus 
    const { loading: tableLoading, error: tableError, data: tableData } = tableStatus

    useEffect(() => {
        if (authData?.id) {
            tableQuery({ variables: { id: authData.id } })
            dispatch(setSessionUser(authData))
        }
    }, [authData, dispatch, tableQuery])

    useEffect(() => {
        const firstNode = getFirstNodeOfCollection(tableData?.usersCollection)
        if (tableData && firstNode) {
            dispatch(setUser(firstNode))
            //TODO ROUTER PUSH
        }
    }, [tableData, dispatch])
        

    if (authLoading || tableLoading) return null
    if (authError || tableError) return null

    return (
        <SignInComponent authMutation={authMutation}/>
    )
}
