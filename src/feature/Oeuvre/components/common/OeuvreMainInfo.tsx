import type { DBOeuvre } from "../../types";
import Button from "$lib/components/common/Button"
import { calcFontColorByBG } from "$lib/utils/luminance";
import { fromHex } from "$lib/utils/rgba";
import "./style/oeuvreMainInfo.scss"

// TODO onClick Handler 
export default function OeuvreMainInfo(props: DBOeuvre & { mini?: boolean }) {
    const { item, mini } = props
    const { title, oeuvres_artistsCollection, oeuvres_genresCollection } = item

    const artistsInfo = oeuvres_artistsCollection?.edges.map((edge) => (
        <Button key={edge.node.artists.id}>
            {edge.node.artists.name}
        </Button>
    ))

    const genresInfo = oeuvres_genresCollection?.edges.map((edge) =>{
        const bgColor = fromHex(edge.node.genres.id.slice(0, 6))
        const fontColor = calcFontColorByBG(bgColor)

        return (
            <Button key={edge.node.genres.id} style={{"--bg-color" : bgColor, "--font-color": fontColor}}>
                {edge.node.genres.name}
            </Button>
        )
    })

    return (
        <div className="oeuvre-main-info-container">
            <span className="title">{title}</span>
            <div className="artist-container">
                {mini ? artistsInfo?.slice(0, 3) : artistsInfo }
            </div>
            <div className="genre-container">
                {mini ? genresInfo?.slice(0, 3) : genresInfo }
            </div>
        </div>
    )
}