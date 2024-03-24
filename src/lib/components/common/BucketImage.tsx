import type { MouseEvent } from "react";
import type { BucketKeys } from "$lib/supabase";
import { useState } from "react"
import { getURLfromBucket } from "$lib/supabase"
import "./style/bucketImage.scss"

export interface BucketImageProps {
    id: string,
    bucket: BucketKeys
    timeStamp?: string | null | undefined
    fallback?: JSX.Element
    className?: string,
    onClick?: (e: MouseEvent) => void
}

export default function BucketImage(props: BucketImageProps) {
    const { id, fallback, bucket, timeStamp, className, onClick, ...restProps } = props
    const [error, setError] = useState(false)
    const url = timeStamp ? getURLfromBucket({id, bucket, timeStamp}) : null

    return (
        <div 
            onClick={onClick} 
            className={[
                "bucket-image-component",
                className ? className : ""
            ].join(" ")}
        >
            {(!error && url )&&
                <img draggable={false} className="image" {...restProps} src={url} loading="lazy" onError={() => setError(true)}/>
            }
            {(error || !url) && fallback}
        </div>
    )
}