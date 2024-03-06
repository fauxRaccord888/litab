import './style/selectDescription.scss'

type SelectDescriptionProps = {
    description: string | null | undefined
}

export default function SelectDescription(props: SelectDescriptionProps) {
    const { description } = props

    return description && (
        <p className="select-description-component">
            {description}
        </p>
    )
}
