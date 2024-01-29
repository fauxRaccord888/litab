import { useState } from "react";
import { PropsWithChildrenNode } from "$lib/types/components";
import './style/carousel.scss'

export default function Carousel(props: PropsWithChildrenNode) {
    const [selected, setSelected] = useState(0)
    const { children } = props

    const handleClickPrevious = () => {
        const newSelected = selected-1
        setSelected(newSelected)
    }

    const handleClickNext = () => {
        const newSelected = selected+1
        setSelected(newSelected)
    }

    return (
        <div className="carousel-outer-container">
            {children.map((node, i) => {
                if (i === selected) return node
                else return null
            })}
            <div className="carousel-button-container">
                <button className="carousel-button" disabled={selected===0} onClick={handleClickPrevious}>◀</button>
                <button className="carousel-button" disabled={selected===props.children.length-1} onClick={handleClickNext}>▶</button>
            </div>
        </div>
    )
}