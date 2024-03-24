/* types */
import type { SignInKey } from "../../constants"
import type { SignInPayload } from '$feature/auth/types'
/* hooks */
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
/* components & data */
import Form from "$lib/components/common/Form"
import { signInFields } from '../../constants'
import "./style/signIn.scss"

type AccountSignInProps = {
    handleSignIn: (payload: SignInPayload) => void
}

export default function AccountSignIn(props: AccountSignInProps) {
    const { handleSignIn } = props
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
        <div className="account-sign-in-component">
            <div className="account-sign-in-component__inner-container">
                <h2 className="account-sign-in-component__title">{t('account.title.signIn')}</h2>
                <Form
                    fields={fields}
                    handleSubmit={handleSubmit}
                    disabled={!submitable}
                />
            </div>
        </div>
    )
}
