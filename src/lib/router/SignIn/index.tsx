import { FormEventHandler, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-hot-toast"

import type { AppDispatch, AppRootState } from "$lib/stores/store"
import type { HydratedInputProps } from "$lib/components/common/Form"
import type { SignInState } from "$lib/stores/signInSlice"

import { router } from "$lib/router"
import { requestSignIn, resetResult } from "$lib/stores/signInSlice"

import { inputFields } from "./fields"
import Form from "$lib/components/common/Form"

type SignInKey = keyof SignInState
export default function SignIn() {
  const state = useSelector((state: AppRootState) => state.signIn)
  const networkRequest = useSelector((state: AppRootState) => state.networkRequest)

  const dispatch = useDispatch<AppDispatch>()

  const { status, errorMessage } = networkRequest
  useEffect(() => {
    if (status === 'succeeded') {
      dispatch(resetResult())
      router.history.push('/')
    }
    if (status === 'failed') {
      toast.error(errorMessage)
    }
  }, [status, errorMessage, dispatch])

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
