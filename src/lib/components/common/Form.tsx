import type { ChangeEventHandler, FormEventHandler } from "react"
import type { ActionCreatorWithPayload } from "@reduxjs/toolkit"

export interface InputProps {
    key: 'password' | 'email' | 'nickname'
    label: string
    icon: () => JSX.Element
    type?: "password"
    errorMessage: string
    action: ActionCreatorWithPayload<string>
}

export interface HydratedInputProps extends InputProps {
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
    regex?: string
    className?: string
}

interface FormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>
  hydratedInputFields: HydratedInputProps[]
  disabled?: boolean
}

export default function Form (props: FormProps) {
  const { handleSubmit, hydratedInputFields, disabled } = props
  return (
    <div className="input-form-outer-container">
      <form onSubmit={handleSubmit}>
        <div className="field-container">
          {hydratedInputFields.map((props) => {
            const isValid = props.regex ? new RegExp(props.regex).test(props.value) : true
            const isEmpty = props.value === ''
            const className = (isValid || isEmpty) ? '' : 'invalid'
            return <InputWithIcon {...props} className={className}/>
          })}
        </div>

        <div className="validation-message-container">
          {hydratedInputFields.map((props) => (
            <ValidationMessage {...props} />      
          ))}
        </div>

        <button 
          className={`${disabled ? 'disabled': ''}`}
          disabled={disabled}
        >
          제출
        </button>
      </form>
    </div>
  )
}

function InputWithIcon(props: HydratedInputProps) {
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
  

function ValidationMessage(props: HydratedInputProps) {
  const isValid = props.regex ? new RegExp(props.regex).test(props.value) : true
  const isEmpty = Boolean(props.value === '')
  if (isValid || isEmpty) return null
  return <span>{props.errorMessage}</span>
}