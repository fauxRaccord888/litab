import type { ISlotRenderConfig } from "$feature/template/type";
import type { InfoCardOptions, InfoCardRenderConfigKey } from "$feature/template/components/InfoCardTemplate"
import type { DBArtist, ArtistEventHandler } from "../../../types";
import { useMemo } from 'react';
import BucketImage from "$lib/components/common/BucketImage";
import FallbackIcon from "$lib/components/icons/FallbackIcon";
import InfoCardTemplate from "$feature/template/components/InfoCardTemplate";

type ArtistInfoCardProps = {
    item: DBArtist
    renderConfig: ISlotRenderConfig<InfoCardRenderConfigKey>
    options?: InfoCardOptions
    eventHandler: ArtistEventHandler
}

export default function ArtistInfoCard(props: ArtistInfoCardProps) {
    const { item, renderConfig, options, eventHandler } = props
    const { id, name, abstract, bio, updated_at } = item

    const handleSelect = () => {
        if (eventHandler.selectArtist) eventHandler.selectArtist(item)
    }


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
                    title: name,
                    coverImage,
                    mainInfo: abstract,
                    subInfo: bio
                }}
                options={options}
            />
        </div>
    )
}