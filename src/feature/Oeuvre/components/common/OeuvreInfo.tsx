import type { DBOeuvre } from "../../types";
import Image from "$lib/components/common/BucketImage";
import Button from "$lib/components/common/Button";
import { calcFontColorByBG } from "$lib/utils/luminance";
import { fromHex } from "$lib/utils/rgba";
import './style/oeuvreInfo.scss'

//TODO click handler => 상황에 따라 다른 핸들러 필요(pick, navigate 등)
export default function OeuvreInfo(props: DBOeuvre) {
    const { id, title, description, artists, genres } = props

    const artistsInfo = artists?.edges.map((edge) => (
        <Button key={edge.node.id}>
            {edge.node.name}
        </Button>
    ))

    const genresInfo = genres?.edges.map((edge) =>{
        const bgColor = fromHex(edge.node.id.slice(0, 6))
        const fontColor = calcFontColorByBG(bgColor)

        return (
            <Button key={edge.node.id} style={{"--bg-color" : bgColor, "--font-color": fontColor}}>
                {edge.node.name}
            </Button>
        )
    })


    return (
        <div className="oeuvre-info-container">
            
            <div className="cover-container">
                <Image bucket="oeuvres" id={id} />
            </div>

            <div className="data-container">
                <div className="main-info-container">
                    <span className="title">{title}</span>
                    <div className="artist-container">
                        {artistsInfo}
                    </div>
                    <div className="genre-container">
                        {genresInfo}
                    </div>
                </div>
                <span className="description">{description}</span>
            </div>
            
        </div>
    )
}