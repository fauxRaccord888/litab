import type { MouseEvent } from "react";
import type { DBOeuvre, OeuvreEventHandler } from "../../../types";
import type { CustomBackgroundCSSProp } from "$lib/types/components"
import { calcFontColorByBG } from "$lib/utils/luminance";
import { fromHex } from "$lib/utils/rgba";
import "./style/oeuvreMainInfo.scss"

type OeuvreMainInfoProps = {
    item: DBOeuvre
    eventHandler: OeuvreEventHandler
}

export default function OeuvreMainInfo(props: OeuvreMainInfoProps) {
    const { item, eventHandler } = props
    const { oeuvres_artistsCollection, oeuvres_genresCollection } = item

    const onClickGenre = (e: MouseEvent, genreId: string) => {
        e.preventDefault()
        if (eventHandler.selectGenreTag) eventHandler.selectGenreTag(genreId)
    }

    const onClickArtist = (e: MouseEvent, artistId: string) => {
        e.preventDefault()
        if (eventHandler.selectArtistTag) eventHandler.selectArtistTag(artistId)
    }

    const artistsInfo = oeuvres_artistsCollection?.edges.map((edge) => (
        <span 
            className={[
                "oeuvre-main-info-component__artist",
                "light-font-color",
                eventHandler.selectArtistTag ? "oeuvre-main-info-component__artist--pointer" : ""
            ].join(" ")}
            key={edge.node.artists.id}
            onClickCapture={(e) => onClickArtist(e, edge.node.artists.id)}
        >
            {edge.node.artists.name}
        </span>
    ))
    
    const genresInfo = oeuvres_genresCollection?.edges.map((edge) => {
        const bgColor = fromHex(edge.node.genres.id.slice(0, 6))
        const isLightFont = calcFontColorByBG(bgColor)
        const style: CustomBackgroundCSSProp = {"--custom-bg" : bgColor}

        return (
            <span 
                key={edge.node.genres.id}
                onClickCapture={(e) => onClickGenre(e, edge.node.genres.id)}
                className={[
                    "oeuvre-main-info-component__artist",
                    isLightFont ? "light-font-color" : "",
                    eventHandler.selectGenreTag ? "oeuvre-main-info-component__genre--pointer" : ""
                ].join(" ")}
                style={style} 
            >
                {edge.node.genres.name}
            </span>
        )
    })

    return (
        <div className="oeuvre-main-info-component">
            <div className="oeuvre-main-info-component__artist-container">
                { artistsInfo }
            </div>
            <div className="oeuvre-main-info-component__genre-container">
                { genresInfo }
            </div>
        </div>
    )
}