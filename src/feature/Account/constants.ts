import type { InputMinimalProps } from "$lib/components/common/Input"
import LockIcon from "$lib/components/icons/LockIcon"
import MailIcon from "$lib/components/icons/MailIcon"
import PenIcon from "$lib/components/icons/PenIcon"
import TagIcon from "$lib/components/icons/TagIcon"
import UserIcon from "$lib/components/icons/UserIcon"

export type SignInKey = "email" | 'password'
export const signInFields: InputMinimalProps<SignInKey>[] = [
    {
        label: 'email', 
        iconFunction: MailIcon,
    },
    {
        label: 'password', 
        iconFunction: LockIcon,
        type: 'password',
    },
]

export type AccountInsertKeys = 'email' | 'password'
export const accountInsertFields: (InputMinimalProps<AccountInsertKeys> & { regex: string })[] = [
    {
        label: 'email',
        iconFunction: MailIcon,
        // eslint-disable-next-line no-useless-escape
        regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,5}$',
    },
    {
        label: 'password',
        iconFunction: LockIcon,
        type: 'password',
        regex: '^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()._-]{8,16}$',
    },
]

export type AccountUpdateKeys = 'newPassword'
export const accountUpdateFields: (InputMinimalProps<AccountUpdateKeys> & { regex: string })[] = [
    {
        label: 'newPassword',
        iconFunction: LockIcon,
        type: 'password',
        regex: '^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()._-]{8,16}$',
    },
]

export type AcocuntProfileUpdateKey = 'mutableId' | 'nickname' | 'description'
export const accountProfileUpdateFields: (InputMinimalProps<AcocuntProfileUpdateKey> & { regex: string })[] = [
    {
        label: 'mutableId',
        iconFunction: UserIcon,
        // eslint-disable-next-line no-useless-escape
        regex: '^[a-zA-Z0-9._%+-]{4,15}$',
    },
    {
        label: 'nickname',
        iconFunction: TagIcon,
        regex: '^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣]{1,15}$',
    },
    {
        label: 'description',
        iconFunction: PenIcon,
        regex: '^(?=.*[a-zA-Z0-9가-힣 ])[a-zA-Z0-9가-힣 ]{0,31}$',
    },
]
