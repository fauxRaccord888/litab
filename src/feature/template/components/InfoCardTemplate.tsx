import type { ISlotComponent, ISlotRenderConfig } from "../type"
import type { MouseEventHandler } from "react"
import { filterComponents } from "../util"
import "./style/infoCard.scss"

export type InfoCardRenderConfigKey = "coverImage" | "title" | "mainInfo" | "subInfo"

export type InfoCardOptions = {
    miniView?: boolean,
    roundedCover?: boolean    
}

type InfoCardProps = {
    id: string,
    components: ISlotComponent<InfoCardRenderConfigKey>,
    renderConfig: ISlotRenderConfig<InfoCardRenderConfigKey>,
    options?: InfoCardOptions,
    onClick?: MouseEventHandler<HTMLDivElement>
}

export default function InfoCardTemplate(props: InfoCardProps) {
    const { components, renderConfig, options, ...restProps } = props
    const filteredComponents = filterComponents<InfoCardRenderConfigKey>(components, renderConfig)

    return (
        <div 
            {...restProps}
            className="info-card-template"
        >
            {filteredComponents?.coverImage &&
                <div 
                    className={[
                        "info-card-template__cover-container",
                        "info-card-template__cover-container--full",
                        options?.roundedCover ? "info-card-template__cover-container--round" : "",
                        options?.miniView? "info-card-template__cover-container--mini" : ""
                    ].join(" ")}
                >
                    {filteredComponents.coverImage}
                </div>
            }
            {
                (filteredComponents?.coverImage ||
                filteredComponents.title ||
                filteredComponents.mainInfo ||
                filteredComponents.subInfo) &&
                    <div className="info-card-template__info-container">
                        {(filteredComponents.coverImage ||
                        filteredComponents.title ||
                        filteredComponents.mainInfo) &&
                            <div className="info-card-template__main-container">
                                {filteredComponents.coverImage &&
                                    <div 
                                        className={[
                                            "info-card-template__cover-container",
                                            "info-card-template__cover-container--mobile",
                                            options?.roundedCover ? "info-card-template__cover-container--round" : "",
                                            options?.miniView ? "info-card-template__cover-container--disabled" : ""
                                        ].join(" ")}
                                    >
                                        {filteredComponents.coverImage}
                                    </div>
                                }
                                {(filteredComponents.title ||
                                filteredComponents.mainInfo) &&
                                    <div className="info-card-template__main-info-container" >
                                        {filteredComponents.title &&                                    
                                            <div 
                                                className={[
                                                    "info-card-template__title",
                                                    options?.miniView ? "mini-view" : ""
                                                ].join(" ")}
                                            >
                                                {filteredComponents.title}
                                            </div>
                                        }
                                        {filteredComponents.mainInfo &&
                                            <div className="info-card-template__main-info">
                                                {filteredComponents.mainInfo}
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        }
                        {filteredComponents.subInfo &&
                            <div className="info-card-template__sub-container">
                                {filteredComponents.subInfo}
                            </div>
                        }
                    </div>
            }
        </div>
    )
}

