import type { ISlotRenderConfig } from "$feature/template/type";
import type { InfoCardOptions, InfoCardRenderConfigKey } from "$feature/template/components/InfoCardTemplate"
import type { DBOeuvre, OeuvreEventHandler } from "../../../types";
import { useMemo } from 'react';
import { useTranslation } from "react-i18next";
import BucketImage from "$lib/components/common/BucketImage";
import FallbackIcon from "$lib/components/icons/FallbackIcon";
import InfoCardTemplate from "$feature/template/components/InfoCardTemplate";
import OeuvreMainInfo from "./OeuvreMainInfo";
import Button from "$lib/components/common/Button";
import "./style/oeuvreInfoCard.scss"

type OeuvreInfoProps = {
    item: DBOeuvre
    renderConfig: ISlotRenderConfig<InfoCardRenderConfigKey>
    options?: InfoCardOptions
    eventHandler: OeuvreEventHandler
}

export default function OeuvreInfoCard(props: OeuvreInfoProps) {
    const { item, renderConfig, options, eventHandler } = props
    const { id, title, description, updated_at } = item
    const { t } = useTranslation()

    const handleSelect = () => {
        if (eventHandler.selectOeuvre) eventHandler.selectOeuvre(item)
    }

    const handleUpdate = () => {
        if (eventHandler.updateOeuvre) eventHandler.updateOeuvre(item)
    }

    const titleComponent = (
        <div className="oeuvre-info-card-component__title">
            <span>{title}</span>
            {options?.enableUpdate &&
                <Button 
                    className="oeuvre-info-card-component__button--update" 
                    onClick={() => handleUpdate()}
                >
                    {t('button.update')}
                </Button>
            }
        </div>
    )

    const coverImage = useMemo(() => (
        <BucketImage bucket="oeuvres" timeStamp={updated_at} id={id} fallback={<FallbackIcon />} />
    ), [id, updated_at])

    const mainInfo = useMemo(() => (
        <OeuvreMainInfo 
            item={item} 
            eventHandler={eventHandler}
        />
    ), [eventHandler, item])

    return (
        <div className="oeuvre-info-card-component">
            <InfoCardTemplate
                id={id}
                onClick={handleSelect}
                renderConfig={renderConfig}
                components={{
                    coverImage,
                    mainInfo,
                    title: titleComponent,
                    subInfo: description
                }}
                options={{
                    roundedCover: false,
                    ...options
                }}
            />
        </div>
    )
}