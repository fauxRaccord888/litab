import type { MetaDataFields, MetaDataUpdateEventHandler } from "$feature/metaData/types";
import UpsertForm from "./UpsertForm";
import { Trans } from "react-i18next";
import "./style/upsertRecordPage.scss";

type UpsertRecordPageProps = {
    title: string
    isUpdate?: boolean
    eventHandler: MetaDataUpdateEventHandler
    placeholders: MetaDataFields
    initialValues?: MetaDataFields<string | null | undefined>
}

export default function UpsertRecordPage(props: UpsertRecordPageProps) {
    const { title, isUpdate, eventHandler, placeholders, initialValues } = props

    const handleMutation = (e: FormData) => {
        if (eventHandler.handleMutation) eventHandler.handleMutation(e)
    }

    return (
        <div className="upsert-record-page-component">
            <div className="upsert-record-page-component__inner-container">
                <h2 className="upsert-record-page-component__title">{title}</h2>
                {isUpdate && (
                    <Trans 
                        i18nKey="metaData.upsertForm.message.pitfall" 
                        components={[<span className="upsert-record-page-component__message--pitfall"></span>,]}
                    />
                )}
                <UpsertForm
                    handleMutation={handleMutation}
                    placeholders={placeholders}
                    initialValues={initialValues}
                />
            </div>
        </div>
    )
}