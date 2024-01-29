import type { InputProps } from "$lib/components/common/Input"
import LockIcon from "$lib/components/icons/LockIcon"
import MailIcon from "$lib/components/icons/MailIcon"

export type RegisterFieldKeys = 'email' | 'password'
export const inputFields: (InputProps<RegisterFieldKeys> & { regex: string })[] = [
  {
    label: 'email',
    icon: MailIcon,
    // eslint-disable-next-line no-useless-escape
    regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$',
  },
  {
    label: 'password',
    icon: LockIcon,
    type: 'password',
    regex: '^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()._-]{8,16}$',
  },
]
