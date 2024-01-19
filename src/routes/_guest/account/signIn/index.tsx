import { FormEventHandler } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FileRoute } from "@tanstack/react-router"

import type { AppDispatch, AppRootState } from "$lib/stores/store"
import type { HydratedInputProps } from "$lib/components/common/Form"
import type { SignInState } from "$lib/stores/signInSlice"

import { requestSignIn } from "$lib/stores/signInSlice"

import { inputFields } from "./-fields"
import Form from "$lib/components/common/Form"

export const Route = new FileRoute('/_guest/account/signIn/').createRoute({
  component: SignIn
})

type SignInKey = keyof SignInState
export default function SignIn() {
  const state = useSelector((state: AppRootState) => state.signIn)

  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    dispatch(requestSignIn())
  }

  const disabled = inputFields.some((item) => state[item.key] === '')

  const hydratedInputFields: HydratedInputProps<SignInKey>[] = inputFields.map((item) => ({
    ...item,
    value: state[item.key],
    onChange: (e) => dispatch(item.action(e.target.value))
  }))

  return (
    <div className="register-outer-container">
      <div className="register-inner-container">
        <h2>로그인</h2>
        <Form 
          handleSubmit={handleSubmit}
          hydratedInputFields={hydratedInputFields}
          disabled={disabled}
        />
      </div>
    </div>
  )
}
