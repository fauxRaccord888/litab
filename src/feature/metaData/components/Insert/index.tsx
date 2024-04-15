import type { MetaDataUpdateEventHandler } from '$feature/metaData/types'
import type { SearchDropdownKey } from '$feature/search/types'
import UpsertRecordPage from '../common/UpsertRecordPage'
import "./style/metaDataInsert.scss"

type MetaDataInsertProps = {
    title: string,
    category: SearchDropdownKey
    placeholders: {
        title: string,
        description: string
    },
    eventHandler: MetaDataUpdateEventHandler
}

export default function MetaDataInsert(props: MetaDataInsertProps) {
    const { title, placeholders, eventHandler } = props

    return (
        <div className="meta-data-insert-component">
            <div className="meta-data-insert-component__inner-container">
                <UpsertRecordPage 
                    title={title}
                    eventHandler={eventHandler}
                    placeholders={placeholders}
                />
            </div>
        </div>
    )
}
