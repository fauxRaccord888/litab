import toast from 'react-hot-toast'
import { signOut } from '$feature/auth/store/authSlice'
import { signOut_SUPABASE } from '$feature/auth/supabase'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { t } from 'i18next'

export const Route = createFileRoute('/_auth/account/signout')({
    beforeLoad: async ({context}) => {
        context.store.dispatch(signOut())
        const { error } = await signOut_SUPABASE()
        if (error) {
            toast.error(t('account.toast.error.signOut'))
        } else {
            toast.success(t('account.toast.success.signOut'))
            throw redirect({
                to: '/home',
            })
        }
    },
})