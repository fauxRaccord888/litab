import { FormEventHandler, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-hot-toast"

import type { AppDispatch, AppRootState } from "$lib/stores/store"
import type { HydratedInputProps } from "$lib/components/common/Form"
import type { RegisterState } from "$lib/stores/registerSlice"

import { router } from "$lib/router"
import { requestRegister, resetResult } from "$lib/stores/registerSlice"

import { inputFields } from "./fields"
import Form from "$lib/components/common/Form"

type RegisterKey = keyof RegisterState
export default function Register() {
  const { register: state, networkRequest } = useSelector((state: AppRootState) => state)
  const dispatch = useDispatch<AppDispatch>()

  const { status, errorMessage } = networkRequest
  useEffect(() => {
    if (status === 'succeeded') {
      toast.success('가입을 축하합니다')
      dispatch(resetResult())
      router.history.push('/preference')
    }
    if (status === 'failed') {
      toast.error(errorMessage)
      dispatch(resetResult())
    }
  }, [status, errorMessage, dispatch])

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    dispatch(requestRegister())
  }

  const submitable = inputFields.every((item) => {
    const regex = new RegExp(state[item.key].regex)
    return regex.test(state[item.key].value)
  })
  const disabled = !submitable || status === 'pending'

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
