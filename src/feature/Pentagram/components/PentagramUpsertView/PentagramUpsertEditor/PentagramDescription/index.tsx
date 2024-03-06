import type { ChangeEvent } from "react"
import './style/pentagramDescription.scss'

type PentagramDescriptionProps = {
    description: string,
    handleSetDescription: (e: ChangeEvent<HTMLTextAreaElement>) => void,
}

export default function PentagramDescription(props : PentagramDescriptionProps) {
    const { description, handleSetDescription } = props

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.stopPropagation
        handleSetDescription(e)
    }

    return (
        <div className="pentagram-description-component">
            <textarea
                className="pentagram-description-component__text-area"
                value={description}
                onChange={onChange}
            />
        </div>
    )
}