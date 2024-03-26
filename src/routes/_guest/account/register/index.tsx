import type { RegisterPayload } from '$feature/auth/types'
/* route */
import { createFileRoute } from '@tanstack/react-router'
/* hooks */
/* Mutation (hooks)*/
import { useAuthMutationHandler } from "$feature/auth/hooks"
import { useNavigate } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'
import { t as translate } from 'i18next'
import { CustomError } from '$lib/error'
import { registerErrorHandler } from '$feature/Account/errorHandler/registerErrorHandler'
/* components */
import RegisterComponent from "$feature/Account/components/Register"

export const Route = createFileRoute('/_guest/account/register/')({
    component: Register,
    beforeLoad: () => {
        return {
            getTitle: () => translate('account.title.register')
        }
    },
})

export default function Register() {
    const { register } = useAuthMutationHandler()
    const [ registerHandler ] = register
    const { t } = useTranslation()
    const navigate = useNavigate()
    
    const handleRegister = async (payload: RegisterPayload) => {
        const response = registerErrorHandler(
            () => registerHandler(payload)
        )

        toast.promise(response, {
            loading: t('account.toast.loading.register'),
            success: t('account.toast.success.register'),
            error: (error: CustomError) => t(error.i18nKey),
        })

        response.then(()=> {
            navigate({to: '/account/update'})
        })
    }

    return (
        <RegisterComponent handleRegister={handleRegister}/>
    )
}
