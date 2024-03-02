import type { ISlotComponent, ISlotRenderConfig } from "../type"
import type { MouseEventHandler } from "react"
import { filterComponents } from "../util"
import "./style/infoCard.scss"

export type RenderConfigKey = "coverImage" | "title" | "mainInfo" | "subInfo"

type InfoCardProps = {
    id: string,
    components: ISlotComponent<RenderConfigKey>,
    renderConfig: ISlotRenderConfig<RenderConfigKey>,
    onClick?: MouseEventHandler<HTMLDivElement>
}

export default function InfoCardTemplate (props: InfoCardProps) {
    const { components, renderConfig, ...restProps } = props
    const filteredComponents = filterComponents<RenderConfigKey>(components, renderConfig)

    return (
        <div 
            {...restProps}
            className="info-card-template"
        >
            {filteredComponents?.coverImage &&
                <div className="info-card-template__cover-outer-container">
                    <div className="info-card-template__cover-inner-container">
                        {filteredComponents.coverImage}
                    </div>
                </div>
            }
            {
                (filteredComponents.title ||
                filteredComponents.mainInfo ||
                filteredComponents.subInfo) &&
                    <div className="info-card-template__main-container">
                        {filteredComponents.title &&
                            <div className="info-card-template__title">
                                {filteredComponents.title}
                            </div>
                        }
                        {(
                            (filteredComponents?.mainInfo) ||
                            (filteredComponents?.subInfo)
                        ) &&
                            <div className="info-card-template__info-container">
                                {filteredComponents.mainInfo &&
                                    <div className="info-card-template__main-info">
                                        {filteredComponents.mainInfo}
                                    </div>
                                }
                                {filteredComponents.subInfo &&
                                    <div className="info-card-template__sub-info">
                                        {filteredComponents.subInfo}
                                    </div>
                                }
                            </div>
                        }
                    </div>
            }
        </div>
    )
}

