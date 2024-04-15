import type { UploadCoverPayload } from '$feature/Account/types'
import type { MetaDataFields, MetaDataUpdateEventHandler } from '$feature/metaData/types'
import type { DBOeuvre } from '$feature/Oeuvre/types'
import type { SearchDropdownKey } from '$feature/search/types'
import { useTranslation } from 'react-i18next'
import Tab from '$lib/components/common/Tab'
import CoverUpload from '$lib/components/common/CoverUpload'
import OeuvreMetadataSelector from './OeuvreMetadataSelector'
import UpsertRecordPage from '../common/UpsertRecordPage'

type MetaDataUpdateProps = {
    title: string,
    category: SearchDropdownKey
    placeholders: MetaDataFields,
    initialValues?: MetaDataFields<string | null | undefined>
    record?: DBOeuvre | null
    eventHandler: MetaDataUpdateEventHandler
}

export default function MetaDataUpdate(props: MetaDataUpdateProps) {
    const { title, category, placeholders, initialValues, record, eventHandler } = props
    const { t } = useTranslation()

    const handleUpload = (payload: UploadCoverPayload) => {
        if (eventHandler.handleUploadCover) eventHandler.handleUploadCover(payload)
    }

    return (
        <div className="meta-data-update-component">
            <Tab 
                items={[
                    {
                        label: title,
                        items: [
                            <UpsertRecordPage 
                                key={"update"} 
                                isUpdate={true}
                                eventHandler={eventHandler}
                                title={title}
                                placeholders={placeholders}
                                initialValues={initialValues}
                            />
                        ]
                    },
                    (category === 'oeuvres' || category === 'artists') && {
                        label: t("metaData.upsertForm.title.cover"),
                        items: [
                            <CoverUpload 
                                key={"cover"} 
                                title={t("metaData.upsertForm.title.cover")}
                                handleUpload={handleUpload} 
                            />
                        ]
                    },
                    (category === 'oeuvres') && {
                        label: t("metaData.upsertForm.title.oeuvreMetaData"),
                        items: [
                            <OeuvreMetadataSelector 
                                key={"metaData"} 
                                record={record}
                                eventHandler={eventHandler}
                            />
                        ]
                    },
                ]}
                options={{
                    vertical: true
                }}
            />
        </div>
    )
}
