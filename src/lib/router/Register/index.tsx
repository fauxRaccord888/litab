import { FormEventHandler, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-hot-toast"

import type { AppDispatch, AppRootState } from "$lib/stores/store"
import type { HydratedInputProps } from "$lib/components/common/Form"

import { router } from "$lib/router"
import { requestRegister, resetResult } from "$lib/stores/registerSlice"

import { inputFields } from "./fields"
import Form from "$lib/components/common/Form"

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