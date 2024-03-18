import type { ISlotRenderConfig } from "$feature/template/type";
import type { InfoCardRenderConfigKey } from "$feature/template/components/InfoCardTemplate"
import type { DBArtist, ArtistEventHandler } from "../../../types";
import { useMemo } from 'react';
import BucketImage from "$lib/components/common/BucketImage";
import FallbackIcon from "$lib/components/icons/FallbackIcon";
import InfoCardTemplate from "$feature/template/components/InfoCardTemplate";

type ArtistInfoCardProps = {
    item: DBArtist
    renderConfig: ISlotRenderConfig<InfoCardRenderConfigKey>
    eventHandler: ArtistEventHandler
}

export default function ArtistInfoCard(props: ArtistInfoCardProps) {
    const { item, renderConfig, eventHandler } = props
    const { id, name, abstract, bio } = item

    const coverImage = useMemo(() => (
        <BucketImage bucket="artists" id={id} fallback={<FallbackIcon />} />
    ), [id])

    return (
        <div className="artist-info-card-component">
            <InfoCardTemplate
                id={id}
                onClick={eventHandler?.selectArtist}
                renderConfig={renderConfig}
                components={{
                    title: name,
                    coverImage,
                    mainInfo: abstract,
                    subInfo: bio
                }}
            />
        </div>
    )
}