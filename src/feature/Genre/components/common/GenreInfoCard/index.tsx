import type { ISlotRenderConfig } from "$feature/template/type";
import type { InfoCardOptions, InfoCardRenderConfigKey } from "$feature/template/components/InfoCardTemplate"
import type { DBGenre, GenreEventHandler } from "../../../types";
import { useMemo } from 'react';
import { useTranslation } from "react-i18next";
import Button from "$lib/components/common/Button";
import BucketImage from "$lib/components/common/BucketImage";
import FallbackIcon from "$lib/components/icons/FallbackIcon";
import InfoCardTemplate from "$feature/template/components/InfoCardTemplate";

import "./style/genreInfoCard.scss"

type GenreInfoCardProps = {
    item: DBGenre
    renderConfig: ISlotRenderConfig<InfoCardRenderConfigKey>
    options?: InfoCardOptions
    eventHandler: GenreEventHandler
}

export default function GenreInfoCard(props: GenreInfoCardProps) {
    const { item, renderConfig, options, eventHandler } = props
    const { id, name, abstract, updated_at, description } = item
    const { t } = useTranslation()

    const handleSelect = () => {
        if (eventHandler.selectGenre) eventHandler.selectGenre(item)
    }

    const handleUpdate = () => {
        if (eventHandler.updateGenre) eventHandler.updateGenre(item)
    }

    const titleComponent = (
        <div className="genre-info-card-component__title">
            <span>{name}</span>
            {options?.enableUpdate &&
                <Button
                    className="genre-info-card-component__button--update" 
                    onClick={() => handleUpdate()}
                >
                    {t('button.update')}
                </Button>
            }
        </div>
    )

    const coverImage = useMemo(() => (
        <BucketImage bucket="genres" timeStamp={updated_at} id={id} fallback={<FallbackIcon />} />
    ), [id, updated_at])


    return (
        <div className="genre-info-card-component">
            <InfoCardTemplate
                id={id}
                onClick={handleSelect}
                renderConfig={renderConfig}
                components={{
                    title: titleComponent,
                    coverImage,
                    mainInfo: abstract,
                    subInfo: description
                }}
                options={options}
            />
        </div>
    )
}