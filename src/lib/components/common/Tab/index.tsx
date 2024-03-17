import type { MouseEvent } from "react";
import { useState } from "react";
import "./style/tab.scss";

export type TabItem = {
    label: string,
    items: JSX.Element[]
}

type TabProps = {
    items: TabItem[]
}

export default function Tab(props: TabProps) {
    const { items } = props
    const [selected, setSelected] = useState(0)

    const handleClickItem = (e: MouseEvent, idx: number) => {
        e.preventDefault()
        setSelected(idx)
    }

    return (
        <div className="tab-component">
            <div className="tab-component__header">
                {items.map((item, idx) => (
                    <span 
                        className={[
                            "tab-component__header-label",
                            idx === selected ? "tab-component__header-label--selected" : ""
                        ].join(" ")}
                        onClick={(e) => handleClickItem(e, idx)}    
                    >
                        {item.label}
                    </span>
                ))}
            </div>

            <div className="tab-component__body">
                    {items.map((item, idx) => {
                        if (idx !== selected) return null
                        return (
                            item.items.map((it) => (
                                <div className="tab-component__item">
                                    {it}
                                </div>
                            ))
                        )
                    })}
            </div>
        </div>
    )   
}