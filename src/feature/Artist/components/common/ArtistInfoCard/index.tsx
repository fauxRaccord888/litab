import type { ISlotRenderConfig } from "$feature/template/type";
import type { InfoCardOptions, InfoCardRenderConfigKey } from "$feature/template/components/InfoCardTemplate"
import type { DBArtist, ArtistEventHandler } from "../../../types";
import { useMemo } from 'react';
import { useTranslation } from "react-i18next";
import BucketImage from "$lib/components/common/BucketImage";
import FallbackIcon from "$lib/components/icons/FallbackIcon";
import InfoCardTemplate from "$feature/template/components/InfoCardTemplate";
import Button from "$lib/components/common/Button";

import "./style/artistInfoCard.scss"

type ArtistInfoCardProps = {
    item: DBArtist
    renderConfig: ISlotRenderConfig<InfoCardRenderConfigKey>
    options?: InfoCardOptions
    eventHandler: ArtistEventHandler
}

export default function ArtistInfoCard(props: ArtistInfoCardProps) {
    const { item, renderConfig, options, eventHandler } = props
    const { id, name, abstract, bio, updated_at } = item
    const { t } = useTranslation()

    const handleSelect = () => {
        if (eventHandler.selectArtist) eventHandler.selectArtist(item)
    }

    const handleUpdate = () => {
        if (eventHandler.updateArtist) eventHandler.updateArtist(item)
    }

    const titleComponent = (
        <div className="artist-info-card-component__title">
            <span>{name}</span>
            {options?.enableUpdate &&
                <Button
                    className="artist-info-card-component__button--update" 
                    onClick={() => handleUpdate()}
                >
                    {t('button.update')}
                </Button>
            }
        </div>
    )

    const coverImage = useMemo(() => (
        <BucketImage bucket="artists" timeStamp={updated_at} id={id} fallback={<FallbackIcon />} />
    ), [id, updated_at])

    return (
        <div className="artist-info-card-component">
            <InfoCardTemplate
                id={id}
                onClick={handleSelect}
                renderConfig={renderConfig}
                components={{
                    title: titleComponent,
                    coverImage,
                    mainInfo: abstract,
                    subInfo: bio
                }}
                options={options}
            />
        </div>
    )
}