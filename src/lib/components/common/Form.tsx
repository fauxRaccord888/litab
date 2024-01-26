import type { ChangeEventHandler, FormEventHandler } from "react"
import type { ActionCreatorWithPayload } from "@reduxjs/toolkit"
import Button from "$lib/components/common/Button"

export interface InputProps<K extends string> {
    key: K
    label: string
    icon: () => JSX.Element
    type?: "password"
    errorMessage: string
    action: ActionCreatorWithPayload<string>
}

export interface HydratedInputProps<K extends string> extends InputProps<K> {
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
    regex?: string
    className?: string
}

interface FormProps<Key extends string> {
  handleSubmit: FormEventHandler<HTMLFormElement>
  hydratedInputFields: HydratedInputProps<Key>[]
  disabled?: boolean
}

export default function Form<Key extends string> (props: FormProps<Key>) {
  const { handleSubmit, hydratedInputFields, disabled } = props
  return (
    <div className="input-form-outer-container">
      <form onSubmit={handleSubmit}>
        <div className="field-container">
          {hydratedInputFields.map((props) => {
            const isValid = props.regex ? new RegExp(props.regex).test(props.value) : true
            const isEmpty = props.value === ''
            const className = (isValid || isEmpty) ? '' : 'invalid'
            return <InputWithIcon<Key> {...props} className={className}/>
          })}
        </div>

        <div className="validation-message-container">
          {hydratedInputFields.map((props) => (
            <ValidationMessage<Key> {...props} />      
          ))}
        </div>

        <Button lg disabled={disabled}>
          제출
        </Button>
      </form>
    </div>
  )
}

function InputWithIcon<K extends string>(props: HydratedInputProps<K>) {
  return (
    <div className={`input-with-icon-container ${props.className}`}>
      <div className="icon">
        {props.icon()}
      </div>
      <input
        type={props.type}
        placeholder={props.label}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}
  

function ValidationMessage<K extends string>(props: HydratedInputProps<K>) {
  const isValid = props.regex ? new RegExp(props.regex).test(props.value) : true
  const isEmpty = Boolean(props.value === '')
  if (isValid || isEmpty) return null
  return <span>{props.errorMessage}</span>
}