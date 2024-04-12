/* types */
import type { SignInKey } from "../../constants"
import type { SignInPayload } from '$feature/auth/types'
import type { GuestMenuModalEventHandler } from "$feature/Account/types"
/* hooks */
import { useState } from 'react'
import { useTranslation } from "react-i18next"
/* components & data */
import { signInFields } from '../../constants'
import Form from "$lib/components/common/Form"
import Modal from "$feature/portal/components/Modal"
import Button from "$lib/components/common/Button"
import "./style/signInModal.scss"

type SignInModalProps = {
    title: string,
    handleSignIn: (payload: SignInPayload) => void
    eventHandler: GuestMenuModalEventHandler
}

export default function SignInModal(props: SignInModalProps) {
    const { title, handleSignIn, eventHandler } = props
    const { t } = useTranslation()
    const [formData, setFormData] = useState<Record<SignInKey, string>>({
        email: '',
        password: ''
    })

    function setState(key: SignInKey, value: string) {
        setFormData({
            ...formData,
            [key]: value
        })
    }

    const fields = signInFields.map((field) => {
        const value = formData[field.label]
        const onChange = (v: string) => setState(field.label, v)
        return { ...field, value, onChange }
    })

    const submitable = fields.every((item) => item.value !== '')

    const handleSubmit = () => {
        handleSignIn(formData)
    }

    return (
        <Modal title={title} handleClickClose={eventHandler.closeModal}>
            <div className="sign-in-modal-component__inner-cotainer">
                <Form
                    fields={fields}
                    handleSubmit={handleSubmit}
                    disabled={!submitable}
                />

                <Button onClick={eventHandler.navigateToRegister}>
                    {t('portal.modal.message.switchToRegister')}
                </Button>
            </div>
        </Modal>
    )
}
