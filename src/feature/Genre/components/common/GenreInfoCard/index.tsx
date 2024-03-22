import type { ISlotRenderConfig } from "$feature/template/type";
import type { InfoCardRenderConfigKey } from "$feature/template/components/InfoCardTemplate"
import type { DBGenre, GenreEventHandler } from "../../../types";
import { useMemo } from 'react';
import BucketImage from "$lib/components/common/BucketImage";
import FallbackIcon from "$lib/components/icons/FallbackIcon";
import InfoCardTemplate from "$feature/template/components/InfoCardTemplate";

type GenreInfoCardProps = {
    item: DBGenre
    renderConfig: ISlotRenderConfig<InfoCardRenderConfigKey>
    eventHandler: GenreEventHandler
}

export default function GenreInfoCard(props: GenreInfoCardProps) {
    const { item, renderConfig, eventHandler } = props
    const { id, name, abstract, updated_at, description } = item

    const coverImage = useMemo(() => (
        <BucketImage bucket="genres" timeStamp={updated_at} id={id} fallback={<FallbackIcon />} />
    ), [id, updated_at])


    return (
        <div className="artist-info-card-component">
            <InfoCardTemplate
                id={id}
                onClick={eventHandler.selectGenre}
                renderConfig={renderConfig}
                components={{
                    title: name,
                    coverImage,
                    mainInfo: abstract,
                    subInfo: description
                }}
            />
        </div>
    )
}