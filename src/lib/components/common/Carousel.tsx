import type { PropsWithChildren } from "react";
import { Children, useEffect, useRef, useState } from "react";
import { useResetScroll } from "$feature/portal/hooks";
import "./style/carousel.scss"

type CaroueslProps = PropsWithChildren & {
    selected: number,
    handleClickNext: (p: number) => void,
    handleClickPrevious: (p: number) => void
}

export default function Carousel(props: CaroueslProps) {
    const { children, selected, handleClickNext, handleClickPrevious } = props
    const [guide, setGuide] = useState(false)
    const guideTimeoutRef = useRef<(() => void) | null>(null)
    const resetScroll = useResetScroll()
    const processedChildren = Children.toArray(children)
    
    useEffect(() => {
        if (!guideTimeoutRef.current && !guide) {
            const timeout = setTimeout(() => {
                setGuide(true)
                if (guideTimeoutRef.current) {
                    guideTimeoutRef.current()
                }
            }, 5000)
            guideTimeoutRef.current = () => clearTimeout(timeout)
        }
    }, [guide])
    
    const onClickPrevious = () => {
        const newSelected = selected-1
        handleClickPrevious(newSelected)
        resetScroll()
    }

    const onClickNext = () => {
        const newSelected = selected+1
        handleClickNext(newSelected)
        resetScroll()
    }

    return (
        <div className="carousel-component">
            <div className="carousel-component__inner-container">
                <div className="carousel-component__button-container">
                    <button 
                        className={[
                            "carousel-component__button",
                            "carousel-component__button--left" 
                        ].join(" ")}
                        disabled={selected===0} 
                        onClick={onClickPrevious}
                    >
                        ◀
                    </button>
                </div>

                <div className="carousel-component__body-container">
                    <div className="carousel-component__body">
                        {processedChildren.map((node, i) => {
                            if (i === selected) return node
                            else return null
                        })}
                    </div>
                    <div className="carousel-component__indicator-container">
                        {processedChildren.map((_, i) => {
                            if (i === selected) return (
                                <span className="carousel-component__indicator carousel-component__indicator--selected" />
                            )
                            else return (
                                <span className="carousel-component__indicator" />
                            )
                        })}
                    </div>
                </div>

                <div className="carousel-component__button-container">
                    <button 
                        className={[
                            "carousel-component__button",
                            "carousel-component__button--right",
                            (selected === 0 && guide) ? "carousel-component__button--guide" : ""
                        ].join(" ")}
                        disabled={selected===processedChildren.length-1} 
                        onClick={onClickNext}
                    >
                        ▶
                    </button>
                </div>
            </div>
        </div>
    )
}