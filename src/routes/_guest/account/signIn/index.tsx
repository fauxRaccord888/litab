import type { SignInPayload } from '$feature/auth/types';
/* route */
import { createFileRoute, useNavigate } from '@tanstack/react-router'
/* hooks */
import { useTranslation } from 'react-i18next'
/* Mutation (hooks)*/
import { useAuthMutationHandler } from '$feature/auth/hooks'

import { CustomError } from '$lib/error'
import { signInErrorHandler } from '$feature/Account/errorHandler/signInErrorHandlert'
/* components */
import AccountSignIn from "$feature/Account/components/SignIn"
import toast from 'react-hot-toast'

export const Route = createFileRoute('/_guest/account/signin/')({
    component: SignIn
})

export default function SignIn() {
    const { signIn } = useAuthMutationHandler()
    const [signInHandler] = signIn
    const { t } = useTranslation()
    const navigate = useNavigate()
    
    const handleSignIn = async (payload: SignInPayload) => {
        const response = signInErrorHandler(
            () => signInHandler(payload)
        )

        toast.promise(response, {
            loading: t('account.toast.loading.signIn'),
            success: t('account.toast.success.signIn'),
            error: (error: CustomError) => t(error.i18nKey),
        })

        response.then(() => {
            navigate({to: '/feed'})
        })
    }

    return (
        <AccountSignIn handleSignIn={handleSignIn}/>
    )
}
