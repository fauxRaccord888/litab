import type { SignInPayload } from '$feature/auth/types';
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { useAuthMutationHandler } from '$feature/auth/hooks'
import toast from 'react-hot-toast'
import { t as translate } from 'i18next'
import { CustomError } from '$lib/error'
import { signInErrorHandler } from '$feature/Account/errorHandler/signInErrorHandlert'
import AccountSignIn from "$feature/Account/components/SignIn"

export const Route = createFileRoute('/_guest/account/signin/')({
    component: SignIn,
    beforeLoad: () => {
        return {
            getTitle: () => translate('account.title.signIn')
        }
    },
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
