import { ActionCreatorWithPayload } from "@reduxjs/toolkit"
import { setEmail, setId, setNickname, setPassowrd } from "$lib/stores/registerSlice"

import UserIcon from "$lib/components/icons/UserIcon"
import LockIcon from "$lib/components/icons/LockIcon"
import MailIcon from "$lib/components/icons/MailIcon"

export interface InputProps {
  key: 'id' | 'password' | 'email' | 'nickname', 
  label: string,
  icon: () => JSX.Element,
  type?: "password"
  errorMessage: string,
  action: ActionCreatorWithPayload<string>,
}  

export const inputFields: InputProps[] = [
  {
    key: 'id',
    label: '아이디',
    icon: UserIcon,
    errorMessage: "아이디는 4 ~ 16자 사이의 영문과 숫자를 입력할 수 있어요.", 
    action: setId
  },
  {
    key: 'password', 
    label: '비밀번호',
    icon: LockIcon,
    type: 'password',
    errorMessage: "비밀번호는 8 ~ 16자 사이의 영문과 숫자를 조합해야 하고, 특수문자를 입력할 수 있어요.", 
    action: setPassowrd
  },
  {
    key: 'email', 
    label: '이메일',
    icon: MailIcon,
    errorMessage: "이메일 형식에 맞게 입력해주세요.", 
    action: setEmail
  },
  {
    key: 'nickname', 
    label: '닉네임',
    icon: UserIcon,
    errorMessage: "닉네임은 2 ~ 16자 사이의 한글, 영문, 숫자를 조합해서 입력할 수 있어요.",
    action: setNickname
  }
]