import type { UnprocessedContext } from "$lib/types/components"
import type { AcocuntProfileUpdateKey } from "../../../../constants"
import type { UpdateProfilePayload } from "../../../../types"
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getCurrentUserFromObservable } from "$feature/auth/utils"
import { accountProfileUpdateFields } from "../../../../constants"
import Form from "$lib/components/common/Form"
import "./style/profileUpdate.scss"

type ProfileUpdateProps = {
    context: UnprocessedContext
    handleUpdate: (payload: UpdateProfilePayload) => void
}

export default function ProfileUpdate(props: ProfileUpdateProps) {
    const { context, handleUpdate } = props
    const { t } = useTranslation()
    const currentUser = getCurrentUserFromObservable(context.userObservable)
    const [formData, setFormData] = useState<Record<AcocuntProfileUpdateKey, string>>({
        mutableId: currentUser?.mutable_id || '',
        nickname: currentUser?.nickname || "",
        description: currentUser?.description || ""
    })

    function setState(key: AcocuntProfileUpdateKey, value: string) {
        setFormData({
            ...formData,
            [key]: value
        })
    }

    // COMMENT 서버 레이어가 없으므로 반드시 DB에서도 별도의 유효성 검사를 해야 함
    const fields = accountProfileUpdateFields.map((field) => {
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
        <div className="account-profile-update-component">
            <h2 className="account-profile-update-component__title">{t('account.title.update.profile')}</h2>
            <Form
                fields={fields}
                handleSubmit={handleSubmit}
                disabled={!submitable}
            />
        </div>
    )
}