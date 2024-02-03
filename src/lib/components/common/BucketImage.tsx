import { useState } from "react"
import { getURLfromBucket } from "$lib/supabase/storage"
import "./style/bucketImage.scss"

export type BucketKeys = 'profiles' | 'oeuvres'
export interface BucketImageProps {
    id: string
    bucket: BucketKeys
    fallback?: JSX.Element
}

export default function BucketImage(props: BucketImageProps) {
    const { id, fallback, bucket, ...restProps } = props
    const [error, setError] = useState(false)
    const url = getURLfromBucket({id, bucket, file: FILE[bucket]})

    return (
        <div className="bucket-image-container">
            {!error && 
                <img {...restProps} src={url} onError={() => setError(true)}/>
            }
            {error && fallback}
        </div>
    )
}

const FILE: Record<BucketKeys, string> = {
    profiles: 'profile.jpg',
    oeuvres: 'cover.jpg'
}