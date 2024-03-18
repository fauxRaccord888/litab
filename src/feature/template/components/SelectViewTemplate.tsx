import type { ISlotComponent } from "../type"
import "./style/selectView.scss"

export type SelectViewConfigKey = "infoCard" | "tab"

type SelectViewProps = {
    components: ISlotComponent<SelectViewConfigKey>,
}

export default function SelectViewTemplate(props: SelectViewProps) {
    const { components, ...restProps } = props

    return (
        <div {...restProps} className="select-view-template">
            {components.infoCard &&
                <div 
                    className={[
                        "select-view-template__info-card-container",
                    ].join(" ")}
                >
                    {components.infoCard}
                </div>
            }
            {components.tab &&
                <div 
                    className={[
                        "select-view-template__tab-container",
                    ].join(" ")}
                >
                    {components.tab}
                </div>
            }
        </div>
    )
}

