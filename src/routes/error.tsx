import { createFileRoute, redirect } from '@tanstack/react-router'
import { t } from 'i18next'
import toast from 'react-hot-toast'

export const Route = createFileRoute('/error')({
    beforeLoad: (() => {
        toast.error(t('navigate.error.redirect'))
        throw redirect({
            to: '/home'
        })
    })
})