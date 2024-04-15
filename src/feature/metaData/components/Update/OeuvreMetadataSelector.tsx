import type { MetaDataUpdateEventHandler } from "$feature/metaData/types";
import type { DBOeuvre } from "$feature/Oeuvre/types";
import { useTranslation } from "react-i18next";
import OeuvreMetaDataSelectorUnit from "./OeuvreMetaDataSelectorUnit";
import "./style/oeuvreMetaDataSelector.scss"

export type OeuvreMetadataSelectorProps = {
    record?: DBOeuvre | null
    eventHandler: MetaDataUpdateEventHandler
}

export default function OeuvreMetadataSelector(props: OeuvreMetadataSelectorProps) {
    const { record, eventHandler } = props;
    const { t } = useTranslation()

    return (
        <div className="oeuvre-metadata-selector-component">
            <h2 className="oeuvre-metadata-selector-component__title">
                {t(`metaData.upsertForm.title.oeuvreMetaData`)}
            </h2>
            <div className="oeuvre-metadata-selector-component__unit-component">
                <OeuvreMetaDataSelectorUnit 
                    key="artists"
                    entity="artists"
                    record={record}
                    eventHandler={eventHandler}
                />
                <OeuvreMetaDataSelectorUnit 
                    key="genres"
                    entity="genres"
                    record={record}
                    eventHandler={eventHandler}
                />
            </div>
        </div>
    );
}
