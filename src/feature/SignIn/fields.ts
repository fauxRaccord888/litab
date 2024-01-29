import type { InputProps } from "$lib/components/common/Input"
import LockIcon from "$lib/components/icons/LockIcon"
import MailIcon from "$lib/components/icons/MailIcon"

export type SignInKey = "email" | 'password'
export const inputFields: InputProps<SignInKey>[] = [
  {
    label: 'email', 
    icon: MailIcon,
  },
  {
    label: 'password', 
    icon: LockIcon,
    type: 'password',
  },
]