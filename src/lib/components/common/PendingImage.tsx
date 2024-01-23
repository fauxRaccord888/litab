import "$lib/style/common/pendingImage.scss"

export default function PendingImage(props: {className?: string}) {
    return (
        <div className={`${props.className} pending-image`} />
    )
}