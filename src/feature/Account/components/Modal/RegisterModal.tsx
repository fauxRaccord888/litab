import type { GuestMenuModalEventHandler } from "$feature/Account/types"
import type { RegisterPayload } from "$feature/auth/types"
import type { AccountInsertKeys } from "../../constants"
/* hooks */
import { useState } from 'react'
import { useTranslation } from "react-i18next"
/* components & data */
import { accountInsertFields } from "../../constants"
import Form from "$lib/components/common/Form"
import Modal from "$feature/portal/components/Modal"
import Button from "$lib/components/common/Button"
import "./style/registerModal.scss"

type RegisterModalProps = {
    title: string,
    handleRegister: (payload: RegisterPayload) => void
    eventHandler: GuestMenuModalEventHandler
}

export default function RegisterModal(props: RegisterModalProps) {
    const { title, handleRegister, eventHandler } = props
    const { t } = useTranslation()
    const [formData, setFormData] = useState<Record<AccountInsertKeys, string>>({
        email: '',
        password: ''
    })

    function setState(key: AccountInsertKeys, value: string) {
        setFormData({
            ...formData,
            [key]: value
        })
    }

    // COMMENT 서버 레이어가 없으므로 반드시 DB에서도 별도의 유효성 검사를 해야 함
    const fields = accountInsertFields.map((field) => {
        const value = formData[field.label]
        const onChange = (v: string) => setState(field.label, v)
        const invalid = !new RegExp(field.regex).test(value)
        return { ...field, value, onChange, invalid }
    })

    const submitable = !fields.some((item) => item.invalid)

    const handleSubmit = () => {
        handleRegister(formData)
    }

    return (
        <Modal title={title} handleClickClose={eventHandler.closeModal}>
            <div className="register-modal-component__inner-cotainer">
                <Form
                    fields={fields}
                    handleSubmit={handleSubmit}
                    disabled={!submitable}
                />

                <Button onClick={eventHandler.navigateToSignIn}>
                    {t('modal.message.switchToSignIn')}
                </Button>
            </div>
        </Modal>
    )
}
