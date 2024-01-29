/* hooks */
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
/* types */
import type { FormEventHandler } from "react"
import type { AuthRegisterMutation } from '$feature/auth/hooks'
/* components & data */
import { RegisterFieldKeys, inputFields } from "./fields"
import Form from "$lib/components/common/Form"

export default function Register(props: { authMutation: AuthRegisterMutation }) {
    const { t } = useTranslation()
    const { authMutation } = props 
    const [formData, setFormData] = useState<Record<RegisterFieldKeys, string>>({
        email: '',
        password: ''
    })

    function setState(key: RegisterFieldKeys, value: string) {
        setFormData({
            ...formData,
            [key]: value
        })
    }

    // TODO REGEX 위험성 평가
    const fields = inputFields.map((field) => {
        const value = formData[field.label]
        const onChange = (v: string) => setState(field.label, v)
        const invalid = !new RegExp(field.regex).test(value)
        return { ...field, value, onChange, invalid }
    })

    const submitable = !fields.some((item) => item.invalid)

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        if (!submitable) return // user feedback 불필요(button 비활성화)
        authMutation(formData.email, formData.password)
    }

    return (
        <div className="register-outer-container">
            <div className="register-inner-container">
                <h2>{t('register.title')}</h2>
                <Form
                    fields={fields}
                    handleSubmit={handleSubmit}
                    disabled={!submitable}
                />
            </div>
        </div>
    )
}
