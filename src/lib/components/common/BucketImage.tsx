import type { MouseEvent } from "react";
import { useState } from "react"
import { getURLfromBucket } from "$lib/supabase/storage"
import "./style/bucketImage.scss"

export type BucketKeys = 'profiles' | 'oeuvres' | "artists" | "genres"
export interface BucketImageProps {
    id: string
    bucket: BucketKeys
    fallback?: JSX.Element
    className?: string,
    onClick?: (e: MouseEvent) => void
}

export default function BucketImage(props: BucketImageProps) {
    const { id, fallback, bucket, className, onClick, ...restProps } = props
    const [error, setError] = useState(false)
    const url = getURLfromBucket({id, bucket, file: FILE[bucket]})

    return (
        <div 
            onClick={onClick} 
            className={`${className || ""} bucket-image-component`}
        >
            {!error && 
                <img draggable={false} className="image" {...restProps} src={url} loading="lazy" onError={() => setError(true)}/>
            }
            {error && fallback}
        </div>
    )
}

const FILE: Record<BucketKeys, string> = {
    profiles: 'profile.jpg',
    oeuvres: 'cover.jpg',
    artists: "profile.jpg",
    genres: "cover.jpg"
}