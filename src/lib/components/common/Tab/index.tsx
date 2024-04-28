import type { MouseEvent } from "react";
import { useState } from "react";
import "./style/tab.scss";

export type TabItem = {
    label: string,
    items: JSX.Element[],
    description?: string,
    onSwitchTab?: () => void
}

type TabOptions = {
    vertical?: true
}

type TabProps = {
    items: (TabItem | false | undefined)[]
    options?: TabOptions
}

export default function Tab(props: TabProps) {
    const { items, options } = props
    const [selected, setSelected] = useState(0)

    const handleClickItem = (
        e: MouseEvent, 
        idx: number, cb: 
        (() => void) | undefined
    ) => {
        e.preventDefault()
        setSelected(idx)
        if (cb) cb()
    }

    return (
        <div className={[
            "tab-component",
            options?.vertical ? "tab-component--vertical" : ""
        ].join(" ")}>

            {items.map((item, idx) => {
                if (idx !== selected) return null
                return (item && item.description) && (
                    <div className="tab-component__description">
                        {item.description}
                    </div>
                )
            })}

            <div className="tab-component__header">
                {items.map((item, idx) => (
                    item && (
                        <span 
                            key={idx}
                            className={[
                                "tab-component__header-label",
                                idx === selected ? "tab-component__header-label--selected" : ""
                            ].join(" ")}
                            onClick={(e) => handleClickItem(e, idx, item.onSwitchTab)}
                        >
                            {item.label}
                        </span>
                    )
                ))}
            </div>

            <div className="tab-component__body">
                {items.map((item, idx) => {
                    if (idx !== selected) return null
                    return item && (
                        item.items.map((it) => (
                            <div key={it.key} className="tab-component__item-container">
                                <div className="tab-component__item-inner-container">
                                    {it}
                                </div>
                            </div>
                        ))
                    )
                })}
            </div>
        </div>
    )   
}