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

    return (
        <Modal title={title} handleClickClose={eventHandler.closeModal}>
            <div className="account-menu-modal-component__inner-cotainer">
                {!currentUser && 
                    <>
                        <Button 
                            className={[
                                "account-menu-modal-component__button--register",
                            ].join(' ')}
                            onClick={(e) => {
                                onClickHandler(e, eventHandler.navigateToRegister)
                            }}
                        >
                            {t("account.modal.menu.register")}
                        </Button>
                        <Button 
                            className={[
                                "account-menu-modal-component__button--sign-in",
                            ].join(' ')}
                            onClick={(e) => {
                                onClickHandler(e, eventHandler.navigateToSignIn)
                            }}
                        >
                            {t("account.modal.menu.signIn")}
                        </Button>
                    </>
                }
                {currentUser && 
                    <>
                        <Button 
                            className={[
                                "account-menu-modal-component__button--profile",
                            ].join(' ')}
                            onClick={(e) => {
                                onClickHandler(e, () => eventHandler.navigateToProfile(currentUser?.mutable_id))
                            }}
                        >
                            {t("account.modal.menu.profile")}
                        </Button>
                        <Button 
                            className={[
                                "account-menu-modal-component__button--update",
                            ].join(' ')}
                            onClick={(e) => {
                                onClickHandler(e, () => eventHandler.navigateToUpdateAccount())}
                            }
                        >
                            {t("account.modal.menu.update")}
                        </Button>
                        <Button 
                            className={[
                                "account-menu-modal-component__button--sign-out",
                            ].join(' ')}
                            onClick={(e) => {
                                onClickHandler(e, eventHandler.signOut)}
                            }
                        >
                            {t("account.modal.menu.signOut")}
                        </Button>
                    </>
                }
            </div>
        </Modal>
    )
}