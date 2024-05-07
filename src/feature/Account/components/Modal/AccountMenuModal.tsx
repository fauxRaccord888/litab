import type { MouseEvent } from "react";
import type { AccountMenuModalEventHandler } from "../../types";
import { useTranslation } from "react-i18next";
import { useCurrentUser } from "$feature/auth/hooks";
import Modal from "$feature/portal/components/Modal";
import Button from "$lib/components/common/Button";
import "./style/accountMenuModal.scss"

type AccountMenuModalProps = {
    title: string,
    eventHandler: AccountMenuModalEventHandler
}

export default function AccountMenuModal(props: AccountMenuModalProps) {
    const { title, eventHandler } = props
    const { t } = useTranslation()

    const { currentUser } = useCurrentUser()

    const onClickHandler = (e: MouseEvent, func: (() => void)) => {
        e.preventDefault()
        func()        
    }

    const registerButton = (
        <Button 
            className="account-menu-modal-component__button--register"
            onClick={(e) => onClickHandler(e, eventHandler.navigateToRegister)}
        >
            {t("account.modal.menu.register")}
        </Button>
    )

    const signInButton = (
        <Button 
            className="account-menu-modal-component__button--sign-in"
            onClick={(e) => onClickHandler(e, eventHandler.navigateToSignIn)}
        >
            {t("account.modal.menu.signIn")}
        </Button>
    )

    const profileNavigateButton = (
        <Button 
            className="account-menu-modal-component__button--profile"
            onClick={(e) => onClickHandler(e, () => eventHandler.navigateToProfile(currentUser?.mutableId))}
        >
            {t("account.modal.menu.profile")}
        </Button>
    )

    const updateProfileButton = (
        <Button 
            className="account-menu-modal-component__button--update"
            onClick={(e) => onClickHandler(e, eventHandler.navigateToUpdateAccount)}
        >
            {t("account.modal.menu.update")}
        </Button>
    )

    const inventoryButton = (
        <Button 
            className="account-menu-modal-component__button--inventory"
            onClick={(e) => onClickHandler(e, eventHandler.navigateToInventory)}
        >
            {t("account.modal.menu.inventory")}
        </Button>
    )

    const signOutButton = (
        <Button 
            className="account-menu-modal-component__button--sign-out"
            onClick={(e) => onClickHandler(e, eventHandler.signOut)}
        >
            {t("account.modal.menu.signOut")}
        </Button>
    )

    return (
        <Modal title={title} handleClickClose={eventHandler.closeModal}>
            <div className="account-menu-modal-component__inner-cotainer">
                {!currentUser && 
                    <>
                        {registerButton}
                        {signInButton}
                    </>
                }
                {currentUser && 
                    <>
                        {profileNavigateButton}
                        {updateProfileButton}
                        {inventoryButton}
                        {signOutButton}
                    </>
                }
            </div>
        </Modal>
    )
}