import type { MouseEventHandler } from "react";
import type { ISlotRenderConfig } from "$feature/template/type";
import type { InfoCardRenderConfigKey } from "$feature/template/components/InfoCardTemplate"
import type { DBArtist } from "../../../types";
import { useMemo } from 'react';
import BucketImage from "$lib/components/common/BucketImage";
import FallbackIcon from "$lib/components/icons/FallbackIcon";
import InfoCardTemplate from "$feature/template/components/InfoCardTemplate";

type ArtistInfoCardProps = {
    item: DBArtist
    renderConfig: ISlotRenderConfig<InfoCardRenderConfigKey>
    handleClickItem?: (id: string) => void
}

export default function ArtistInfoCard(props: ArtistInfoCardProps) {
    const { item, renderConfig, handleClickItem } = props
    const { id, name, abstract, bio } = item

    const onClickItem: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        if (handleClickItem) handleClickItem(id)
    }

    const coverImage = useMemo(() => (
        <BucketImage bucket="artists" id={id} fallback={<FallbackIcon />} />
    ), [id])


    return (
        <div className="artist-info-card-component">
            <InfoCardTemplate
                id={id}
                onClick={onClickItem}
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