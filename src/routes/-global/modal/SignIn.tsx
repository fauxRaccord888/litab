/* types */
import type { CustomError } from '$lib/error';
import type { SignInPayload } from '$feature/auth/types';
import type { GuestMenuModalEventHandler } from '$feature/Account/types';
/* hooks */
import { useTranslation } from 'react-i18next';
import { useAccountNavigate } from '$feature/navigate/hooks';
import { useAuthMutationHandler } from '$feature/auth/hooks';
/* components */
import SignInModal from '$feature/Account/components/Modal/SignInModal';
/* utils */
import toast from 'react-hot-toast';
import { signInErrorHandler } from '$feature/Account/errorHandler';

export default function SignIn(props: { 
    handleClickClose: () => void; 
}) {
    const { t } = useTranslation();
    const { handleClickClose } = props
    const accountNavigate = useAccountNavigate()
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
    
        response.then(() => {
            handleClickClose()
        })
    }
    
    const title = t("modal.title.signIn");
    
    return (
        <SignInModal 
            title={title}
            handleSignIn={handleSignIn}
            eventHandler={eventHandler}
        />
    )
}
