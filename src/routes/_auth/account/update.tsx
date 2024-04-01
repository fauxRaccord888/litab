import type { UpdateAuthPayload, UpdateProfilePayload, UploadCoverPayload } from '$feature/Account/types'
import type { CustomError } from '$lib/error'
import { useTranslation } from 'react-i18next'
import { useUpdateProfileHandler } from '$feature/Account/hooks'
import { updateAccountErrorHandler } from '$feature/Account/errorHandler'
import toast from 'react-hot-toast'
import { t as translate} from 'i18next'
import { createFileRoute } from '@tanstack/react-router'
import AcocuntUpdate from '$feature/Account/components/Update'

export const Route = createFileRoute('/_auth/account/update')({
    beforeLoad: () => {
        return {
            getTitle: () => translate('account.title.update.index')
        }
    },
    component: Register
})

export default function Register() {
    const { auth, profile, cover } = useUpdateProfileHandler()
    const [authUpdate] = auth
    const [profileUpdate] = profile
    const [coverUpload] = cover
    const { t } = useTranslation()
    
    const handleUpdateAuth = (payload: UpdateAuthPayload) => {
        const response = updateAccountErrorHandler(
            () => authUpdate(payload)
        )
        toast.promise(response, {
            loading: t("account.toast.loading.updateAuth"),
            success: t("account.toast.success.updateAuth"),
            error: (err: CustomError) => t(err.i18nKey)
        })
    }

    const handleUpdateProfile = (payload: UpdateProfilePayload) => {
        const response = updateAccountErrorHandler(
            () => profileUpdate(payload)
        )
        toast.promise(response, {
            loading: t("account.toast.loading.updateProfile"),
            success: t("account.toast.success.updateProfile"),
            error: (err: CustomError) => t(err.i18nKey)
        })
    }

    const handleUploadCover = (payload: UploadCoverPayload) => {
        const response = updateAccountErrorHandler(
            () => coverUpload(payload)
        )
        toast.promise(response, {
            loading: t("account.toast.loading.uploadCover"),
            success: t("account.toast.success.uploadCover"),
            error: (err: CustomError) => t(err.i18nKey)
        })
    }

    return (
        <AcocuntUpdate 
            handleUpdateAuth={handleUpdateAuth} 
            handleUpdateProfile={handleUpdateProfile} 
            handleUploadCover={handleUploadCover}
        />
    )
}
