import { requestRegister, setEmail, setId, setNickname, setPassowrd } from "$lib/stores/registerSlice"
import { AppDispatch, AppRootState } from "$lib/stores/store"
import { ChangeEventHandler, FormEventHandler } from "react"
import { useDispatch, useSelector } from "react-redux"

import UserIcon from "$lib/components/icons/UserIcon"
import LockIcon from "$lib/components/icons/LockIcon"
import MailIcon from "$lib/components/icons/MailIcon"

type InputProps = {
  state: {value: string, regex: string}, 
  label: string,
  icon: () => JSX.Element,
  type?: "password"
  errorMessage: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
}

export default function Register() {
  const state = useSelector((state: AppRootState) => state.register)
  const dispatch = useDispatch<AppDispatch>()
  
  const inputFields: InputProps[] = [
    {
      state: state.id,
      label: '아이디',
      icon: UserIcon,
      errorMessage: "아이디는 4 ~ 16자 사이의 영문과 숫자를 입력할 수 있어요.", 
      onChange: (e) => dispatch(setId(e.currentTarget.value))
    },
    {
      state: state.password, 
      label: '비밀번호',
      icon: LockIcon,
      type: 'password',
      errorMessage: "비밀번호는 8 ~ 16자 사이의 영문과 숫자를 조합해야 하고, 특수문자를 입력할 수 있어요.", 
      onChange: (e) => dispatch(setPassowrd(e.currentTarget.value))
    },
    {
      state: state.email, 
      label: '이메일',
      icon: MailIcon,
      errorMessage: "이메일 형식에 맞게 입력해주세요.", 
      onChange: (e) => dispatch(setEmail(e.currentTarget.value))
    },
    {
      state: state.nickname, 
      label: '닉네임',
      icon: UserIcon,
      errorMessage: "닉네임은 2 ~ 16자 사이의 한글, 영문, 숫자를 조합해서 입력할 수 있어요.",
      onChange: (e) => dispatch(setNickname(e.currentTarget.value))
    }
  ]

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    dispatch(requestRegister())
  }

  return (
    <div className="register-outer-container">
      <h2>회원가입</h2>

      <form 
        onSubmit={handleSubmit}
        className="register-form"
      >
        <div className="register-input-main-container">
          {inputFields.map((props) => (
            <InputWithValidation 
              key={props.label}
              {...props} 
            />
          ))}
        </div>

        <div className="register-validation-message-container">
          {inputFields.map((props) => (
            <ValidationMessage key={props.label} {...props} />      
          ))}
        </div>

        <button 
          className="register-button"
          disabled={state.registerResult === 'pending'}
        >
          제출
        </button>
      </form>
    </div>
  )
}


function InputWithValidation(props: InputProps) {
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

function ValidationMessage(props: InputProps) {
  const regex = new RegExp(props.state.regex)
  const isValid = regex.test(props.state.value)
  const isEmpty = Boolean(props.state.value === '')
  if (isValid || isEmpty) return ''
  return <span>{props.errorMessage}</span>
}