import type { ISlotComponent, ISlotRenderConfig } from "../type"
import type { MouseEvent } from "react"
import { filterComponents } from "../util"
import "./style/infoCard.scss"

export type InfoCardRenderConfigKey = "coverImage" | "title" | "mainInfo" | "subInfo"

export type InfoCardOptions = {
    miniView?: boolean,
    roundedCover?: boolean,
    // COMMENT Oeuvre 컴포넌트의 경우, Oeuvre 엔티티가 2번 사용됨(작품 자체, 작품 관련 펜타그램의 호버카드)
    // 이 경우, 동일한 이벤트 핸들러를 사용하므로 아이템 클릭 가능 여부를 이벤트 핸들러만으로 판단할 수 없음
    enableSelect?: boolean 
    enableUpdate?: boolean
}

type InfoCardProps = {
    id: string,
    components: ISlotComponent<InfoCardRenderConfigKey>,
    renderConfig: ISlotRenderConfig<InfoCardRenderConfigKey>,
    options?: InfoCardOptions,
    onClick?: ((id: string) => void) | undefined | null
}

export default function InfoCardTemplate(props: InfoCardProps) {
    const { id, components, renderConfig, options, onClick, ...restProps } = props
    const filteredComponents = filterComponents<InfoCardRenderConfigKey>(components, renderConfig)

    const onClickItem = (e: MouseEvent) => {
        e.preventDefault()
        if (onClick && options?.enableSelect) onClick(id)
    }

    return (
        <div 
            {...restProps}
            className={[
                "info-card-template",
                options?.miniView ? "mini-view" : "",
                (onClick && options?.enableSelect) ? "info-card-template__main-container--pointer" :""
            ].join(" ")}
            onClick={onClickItem}
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
                                            options?.miniView ? "info-card-template__cover-container--disabled" : "",
                                        ].join(" ")}
                                    >
                                        {filteredComponents.coverImage}
                                    </div>
                                }
                                {(filteredComponents.title ||
                                filteredComponents.mainInfo) &&
                                    <div className="info-card-template__main-info-container" >
                                        {filteredComponents.title &&                                    
                                            <div className="info-card-template__title">
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

