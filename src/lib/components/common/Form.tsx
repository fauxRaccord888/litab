import { useTranslation } from "react-i18next"

import type { FormEventHandler } from "react"
import type { PropsWithValueAction } from "./Input"

import Button from "./Button"
import Input from "./Input"
import "./style/form.scss"

interface FormProps<K extends string> {
    fields: PropsWithValueAction<K>[],
    handleSubmit: FormEventHandler<HTMLFormElement>
    disabled?: boolean
}

export default function Form<K extends string> (props: FormProps<K>) {
    const { t } = useTranslation()
    const { fields, handleSubmit, disabled } = props

    const inputFields = fields.map((props) => {
        return <Input key={props.label} {...props} />
    })
    
    const validationMessages = fields.map((props) => {
        return <ValidationMessage key={props.label} {...props}  />
    })

    return (
        <div className="input-form-outer-container">
            <form onSubmit={handleSubmit}>
                <div className="field-container">
                    {...inputFields}
                </div>
                <div className="validation-message-container">
                    {...validationMessages}
                </div>
                <Button lg disabled={disabled}>
                    {t("form.submit")}
                </Button>
            </form>
        </div>
    )
}
  

function ValidationMessage<K extends string>(props: PropsWithValueAction<K>) {
    const { label, invalid } = props
    const { t } = useTranslation()

    if (!invalid) return null
    return <span>{t(`form.${label}.error`)}</span>
}