import type { UpdateAuthPayload } from "../../../../types"
import type { AccountUpdateKeys } from "../../../../constants"
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { accountUpdateFields } from "../../../../constants"
import Form from "$lib/components/common/Form"
import "./style/authUpdate.scss"

type AuthUpdateProps = {
    handleUpdate: (payload: UpdateAuthPayload) => void
}

export default function AuthUpdate(props: AuthUpdateProps) {
    const { handleUpdate } = props
    const { t } = useTranslation()
    const [formData, setFormData] = useState<Record<AccountUpdateKeys, string>>({
        newPassword: ''
    })

    function setState(key: AccountUpdateKeys, value: string) {
        setFormData({
            ...formData,
            [key]: value
        })
    }

    // COMMENT 서버 레이어가 없으므로 반드시 DB에서도 별도의 유효성 검사를 해야 함
    const fields = accountUpdateFields.map((field) => {
        const value = formData[field.label]
        const onChange = (v: string) => setState(field.label, v)
        const invalid = !new RegExp(field.regex).test(value)
        return { ...field, value, onChange, invalid }
    })

    const submitable = !fields.some((item) => item.invalid)

    const handleSubmit = () => {
        handleUpdate(formData)
    }

    return (
        <div className="account-auth-update-component">
            <h2 className="account-auth-update-component__title">{t('account.title.update.auth')}</h2>
            <Form
                fields={fields}
                handleSubmit={handleSubmit}
                disabled={!submitable}
            />
        </div>
    )
}
