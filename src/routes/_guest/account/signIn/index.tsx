/* routes */
import { createFileRoute } from "@tanstack/react-router"
/* hooks */
import { useDispatch, useSelector } from "react-redux"
import { useSignInHandler } from "$lib/hooks/mutation"
/* types */
import type { FormEventHandler } from "react"
import type { AppDispatch, AppRootState } from "$lib/stores/store"
import type { HydratedInputProps } from "$lib/components/common/Form"
import type { SignInState } from "$lib/stores/signInSlice"
/* components & data */
import { inputFields } from "./-fields"
import Form from "$lib/components/common/Form"

export const Route = createFileRoute('/_guest/account/signIn/')({
    component: SignIn
})

type SignInKey = keyof SignInState
export default function SignIn() {
  const state = useSelector((state: AppRootState) => state.signIn)
  const dispatch = useDispatch<AppDispatch>()
  const signInHandler = useSignInHandler()

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    signInHandler()
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
