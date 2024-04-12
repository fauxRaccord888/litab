/* types */
import type { CustomError } from '$lib/error';
import type { RegisterPayload } from '$feature/auth/types';
import type { GuestMenuModalEventHandler } from '$feature/Account/types';
/* hooks */
import { useTranslation } from 'react-i18next';
import { useNavigate } from '@tanstack/react-router';
import { useAccountNavigate } from '$feature/navigate/hooks';
import { useAuthMutationHandler } from '$feature/auth/hooks';
/* components */
import RegisterModal from '$feature/Account/components/Modal/RegisterModal';
/* utils */
import toast from 'react-hot-toast';
import { registerErrorHandler } from '$feature/Account/errorHandler/registerErrorHandler'

export default function Register(props: { 
    redirect?: string | undefined,
    handleClickClose: () => void; 
}) {
    const { t } = useTranslation();
    const { redirect, handleClickClose } = props
    const navigate = useNavigate()
    const accountNavigate = useAccountNavigate()
    const { register } = useAuthMutationHandler()
    const [ registerHandler ] = register

    const eventHandler: GuestMenuModalEventHandler = {
        navigateToSignIn: accountNavigate.signIn,
        navigateToRegister: accountNavigate.register,
        closeModal: handleClickClose
    }

    const handleRegister = async (payload: RegisterPayload) => {
        const response = registerErrorHandler(
            async () => {
                const res = registerHandler(payload)
                res.then(() => navigate({to: redirect}))
            }
        )

        toast.promise(response, {
            loading: t('account.toast.loading.register'),
            success: t('account.toast.success.register'),
            error: (error: CustomError) => t(error.i18nKey),
        })

        response.then(() => {
            handleClickClose()
        })
    }

    const title = t("portal.modal.title.register");
    
    return (
        <RegisterModal 
            title={title}
            handleRegister={handleRegister}
            eventHandler={eventHandler}
        />
    )
}
