/* types */
import type { AccountMenuModalEventHandler } from '$feature/Account/types';
/* hooks */
import { useTranslation } from 'react-i18next';
import { useProfileNavigate, useAccountNavigate } from '$feature/navigate/hooks';
/* components */
import AccountMenuModal from '$feature/Account/components/Modal/AccountMenuModal';

export default function AccountMenu(props: { 
    handleClickClose: () => void; 
}) {
    const { t } = useTranslation();
    const { handleClickClose } = props
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
        navigateToInventory: accountNavigate.inventory,
        signOut: handleSignOut,
        closeModal: handleClickClose
    }

    const title = t("portal.modal.title.accountMenu");
    
    return (
        <AccountMenuModal
            title={title}
            eventHandler={eventHandler}
        />
    )
}
