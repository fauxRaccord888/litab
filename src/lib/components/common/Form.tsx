import type { FormEvent, FormEventHandler } from "react"
import type { InputProps } from "./Input"
import { useTranslation } from "react-i18next"

import Button from "./Button"
import Input from "./Input"
import "./style/form.scss"

interface FormProps<K extends string> {
    fields: InputProps<K>[],
    handleSubmit: FormEventHandler<HTMLFormElement>
    disabled?: boolean
}

export default function Form<K extends string> (props: FormProps<K>) {
    const { t } = useTranslation()
    const { fields, handleSubmit, disabled } = props

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSubmit(e)
    }

    const inputFields = fields.map((props) => {
        return <Input key={props.label} {...props} />
    })
    
    const validationMessages = fields.map((props) => {
        return <ValidationMessage key={props.label} {...props}  />
    })

    return (
        <div className="form-component">
            <form onSubmit={onSubmit}>
                <div className="form-component__field-container">
                    {...inputFields}
                </div>
                <div className="form-component__validation-message-container">
                    {...validationMessages}
                </div>
                <Button className="form-component__button-component" disabled={disabled}>
                    {t("button.submit")}
                </Button>
            </form>
        </div>
    )
}
  

function ValidationMessage<K extends string>(props: InputProps<K>) {
    const { label, invalid } = props
    const { t } = useTranslation()

    if (!invalid) return null
    return <span>{t(`form.${label}.error`)}</span>
}