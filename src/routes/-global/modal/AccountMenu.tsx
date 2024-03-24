/* types */
import type { AccountMenuModalEventHandler } from '$feature/Account/types';
import type { UnprocessedContext } from '$lib/types/components';
/* hooks */
import { useTranslation } from 'react-i18next';
import { useProfileNavigate, useAccountNavigate } from '$feature/navigate/hooks';
/* components */
import AccountMenuModal from '$feature/Account/components/Modal/AccountMenuModal';

export default function AccountMenu(props: { 
    context: UnprocessedContext
    handleClickClose: () => void; 
}) {
    const { t } = useTranslation();
    const { context, handleClickClose } = props
    const profileNavigate = useProfileNavigate()
    const accountNavigate = useAccountNavigate()

    const handleSignOut = () => {
        handleClickClose()
        accountNavigate.signOut()
    }

    const eventHandler: AccountMenuModalEventHandler = {
        navigateToProfile: (mutableId: string) => profileNavigate.profileSelect(mutableId),
        navigateToUpdateAccount: accountNavigate.update,
        navigateToSignIn: accountNavigate.signIn,
        navigateToRegister: accountNavigate.register,
        signOut: handleSignOut,
        closeModal: handleClickClose
    }

    const title = t("modal.title.accountMenu");
    
    return (
        <AccountMenuModal
            title={title}
            context={context}
            eventHandler={eventHandler}
        />
    )
}
