import type { UpdateAuthPayload, UpdateProfilePayload, UploadCoverPayload } from '$feature/Account/types'
import type { UnprocessedContext } from '$lib/types/components'
import { useTranslation } from 'react-i18next'
import Tab from '$lib/components/common/Tab'
import AuthUpdate from './components/AuthUpdate'
import ProfileUpdate from './components/ProfileUpdate'
import CoverUpload from './components/CoverUpload'

type AccountUpdateProps = {
    context: UnprocessedContext
    handleUpdateAuth: (payload: UpdateAuthPayload) => void,
    handleUploadCover: (payload: UploadCoverPayload) => void
    handleUpdateProfile: (payload: UpdateProfilePayload) => void,
}

export default function AcocuntUpdate(props: AccountUpdateProps) {
    const { context, handleUpdateAuth, handleUploadCover, handleUpdateProfile } = props
    const { t } = useTranslation()

    return (
        <div className="account-update-component">
            <Tab 
                items={[
                    {
                        label: t("account.title.update.profile"),
                        items: [<ProfileUpdate key={"profile"} handleUpdate={handleUpdateProfile} context={context} />]
                    },
                    {
                        label: t("account.title.update.cover"),
                        items: [<CoverUpload key={"cover"} handleUpload={handleUploadCover} />]
                    },
                    {
                        label: t("account.title.update.auth"),
                        items: [<AuthUpdate key={"auth"} handleUpdate={handleUpdateAuth} />]
                    },
                ]}
                options={{
                    vertical: true
                }}
            />
        </div>
    )
}
