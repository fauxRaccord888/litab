import { ChangeEventHandler, FormEventHandler, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-hot-toast"
import { router } from "$lib/router"

import { AppDispatch, AppRootState } from "$lib/stores/store"
import { requestRegister, resetResult } from "$lib/stores/registerSlice"

import { inputFields, type InputProps } from "./fields"

interface HydratedInputProps extends InputProps {
  state: {
    value: string,
    regex: string
  }
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Register() {
  const state = useSelector((state: AppRootState) => state.register)
  const dispatch = useDispatch<AppDispatch>()

  const { registerResult, errorMessage } = state
  useEffect(() => {
    if (registerResult === 'succeeded') {
      toast.success('가입을 축하합니다')
      dispatch(resetResult())
      router.history.push('/preference')
    }
    if (registerResult === 'failed') {
      toast.error(errorMessage)
      dispatch(resetResult())
    }
  }, [registerResult, errorMessage, dispatch])

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    dispatch(requestRegister())
  }

  const submitable = inputFields.every((item) => {
    const regex = new RegExp(state[item.key].regex)
    return regex.test(state[item.key].value)
  })
  const disabled = !submitable || state.registerResult === 'pending'

  const hydratedInputFields: HydratedInputProps[] = inputFields.map((item) => ({
    ...item,
    state: state[item.key],
    onChange: (e) => dispatch(item.action(e.target.value))
  }))

  return (
    <div className="register-outer-container">
      <h2>회원가입</h2>

      <form 
        onSubmit={handleSubmit}
        className="register-form"
      >
        <div className="register-input-main-container">
          {hydratedInputFields.map((props) => (
            <InputWithValidation {...props} />
          ))}
        </div>

        <div className="register-validation-message-container">
          {hydratedInputFields.map((props) => (
            <ValidationMessage {...props} />      
          ))}
        </div>

        <button 
          className={`register-button ${disabled ? 'disabled': ''}`}
          disabled={disabled}
        >
          제출
        </button>
      </form>
    </div>
  )
}

function InputWithValidation(props: HydratedInputProps) {
  const isValid = new RegExp(props.state.regex).test(props.state.value)
  const isEmpty = props.state.value === ''
  return (
    <div className={`register-input-container ${isValid || isEmpty ? '' : 'invalid'}`}>
      <div className="register-input-icon">
        {props.icon()}
      </div>
      <input
        className="register-input"
        type={props.type}
        placeholder={props.label}
        value={props.state.value}
        onChange={props.onChange}
      />
    </div>
  )
}

function ValidationMessage(props: HydratedInputProps) {
  const regex = new RegExp(props.state.regex)
  const isValid = regex.test(props.state.value)
  const isEmpty = Boolean(props.state.value === '')
  if (isValid || isEmpty) return null
  return <span>{props.errorMessage}</span>
}