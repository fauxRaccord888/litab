/* types */
import type { CustomError } from '$lib/error/customError';
import type { SignInPayload } from '$feature/auth/types';
import type { GuestMenuModalEventHandler } from '$feature/Account/types';
/* hooks */
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from '@tanstack/react-router';
import { useAccountNavigate } from '$feature/navigate/hooks';
import { useAuthMutationHandler } from '$feature/auth/hooks';
/* components */
import SignInModal from '$feature/Account/components/Modal/SignInModal';
/* utils */
import toast from 'react-hot-toast';
import { setSession } from '$feature/auth/store/authSlice';
import { signInErrorHandler } from '$lib/error/handler';

export default function SignIn(props: { 
    redirect?: string | undefined,
    handleClickClose: () => void; 
}) {
    const { t } = useTranslation();
    const { redirect, handleClickClose } = props
    const navigate = useNavigate()
    const accountNavigate = useAccountNavigate()
    const dispatch = useDispatch()

    const { signIn } = useAuthMutationHandler()
    const [signInHandler] = signIn

    const eventHandler: GuestMenuModalEventHandler = {
        navigateToSignIn: accountNavigate.signIn,
        navigateToRegister: accountNavigate.register,
        closeModal: handleClickClose
    }

    const handleSignIn = async (payload: SignInPayload) => {
        const response = signInErrorHandler(
            () => signInHandler(payload)
        )
    
        toast.promise(response, {
            loading: t('account.toast.loading.signIn'),
            success: t('account.toast.success.signIn'),
            error: (error: CustomError) => t(error.i18nKey),
        })
    
        response.then((response) => {
            dispatch(setSession(response.data.user))
            navigate({to: redirect})
            handleClickClose()
        })
    }
    
    const title = t("portal.modal.title.signIn");
    
    return (
        <SignInModal 
            title={title}
            handleSignIn={handleSignIn}
            eventHandler={eventHandler}
        />
    )
}
