import "./style/pendingImage.scss"

export default function PendingImage(props: {className?: string}) {
    return (
        <div className={`${props.className} pending-image`} />
    )
}