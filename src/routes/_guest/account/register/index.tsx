/* routes */
import { FileRoute } from "@tanstack/react-router"
/* hooks */
import { useDispatch, useSelector } from "react-redux"
import { useRegisterOnAuthHandler } from "$lib/hooks/mutation"
/* types */
import type { FormEventHandler } from "react"
import type { AppDispatch, AppRootState } from "$lib/stores/store"
import type { HydratedInputProps } from "$lib/components/common/Form"
import type { RegisterState } from "$lib/stores/registerSlice"
/* components & data */
import { inputFields } from "./-fields"
import Form from "$lib/components/common/Form"

export const Route = new FileRoute('/_guest/account/register/').createRoute({
  component: Register
})

type RegisterKey = keyof RegisterState
export default function Register() {
  const state = useSelector((state: AppRootState) => state.register)
  const dispatch = useDispatch<AppDispatch>()
  const registerHandler = useRegisterOnAuthHandler()

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    registerHandler()
  }

  const submitable = inputFields.every((item) => {
    const regex = new RegExp(state[item.key].regex)
    return regex.test(state[item.key].value)
  })
  //TODO register pending일 떄 disable? registerHook에 status 추가?
  const disabled = !submitable

  const hydratedInputFields: HydratedInputProps<RegisterKey>[] = inputFields.map((item) => ({
    ...item,
    value: state[item.key].value,
    regex: state[item.key].regex,
    onChange: (e) => dispatch(item.action(e.target.value))
  }))

  return (
    <div className="register-outer-container">
      <div className="register-inner-container">
        <h2>회원가입</h2>
        <Form 
          handleSubmit={handleSubmit}
          hydratedInputFields={hydratedInputFields}
          disabled={disabled}
        />
      </div>
    </div>
  )
}
