import type { RegisterPayload } from "$feature/auth/types"
import type { AccountInsertKeys } from "../../constants"
/* hooks */
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
/* components & data */
import { accountInsertFields } from "../../constants"
import Form from "$lib/components/common/Form"
import "./style/register.scss"

type AccountRegisterProps = {
    handleRegister: (payload: RegisterPayload) => void
}

export default function AccountRegister(props: AccountRegisterProps) {
    const { handleRegister } = props
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
        <div className="account-register-component">
            <h2 className="account-register-component__title">{t('account.title.register')}</h2>
            <Form
                fields={fields}
                handleSubmit={handleSubmit}
                disabled={!submitable}
            />
        </div>
    )
}
