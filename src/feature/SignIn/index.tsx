/* hooks */
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
/* types */
import type { FormEventHandler } from "react"
import type { SignInKey } from "./fields"
import type { AuthSignInMutation } from '$feature/auth/hooks'
/* components & data */
import Form from "$lib/components/common/Form"
import { inputFields } from './fields'

export default function SignInComponent(props: { authMutation: AuthSignInMutation }) {
    const { t } = useTranslation()
    const { authMutation } = props 
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

    // TODO REGEX 위험성 평가
    const fields = inputFields.map((field) => {
        const value = formData[field.label]
        const onChange = (v: string) => setState(field.label, v)
        return { ...field, value, onChange }
    })

    const submitable = fields.every((item) => item.value !== '')

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        if (!submitable) return // user feedback 불필요(button 비활성화)
        authMutation(formData.email, formData.password)
    }

    return (
        // TODO Style
        <div className="register-outer-container">
            <div className="register-inner-container">
                <h2>{t('signIn.title')}</h2>
                <Form
                    fields={fields}
                    handleSubmit={handleSubmit}
                    disabled={!submitable}
                />
            </div>
        </div>
    )
}
