
type BucketKeys = 'profiles'
type BucketProperties = 'bucket' | 'file'

const DATABASE_URL = import.meta.env.VITE_PUBLIC_DB_URL;
const PROFILE_PIC_BUCKET = import.meta.env.VITE_PUBLIC_PROFILE_PIC_BUCKET;

const BUCKET_INFO: Record<BucketKeys, Record<BucketProperties, string>> = {
    'profiles': {
        bucket: PROFILE_PIC_BUCKET,
        file: 'profile.jpg'
    },
}

export const imageSourceHelper = (opts: {bucket: BucketKeys, userId: string | null}) => {
    const curBucket = BUCKET_INFO[opts.bucket]
    return `${DATABASE_URL}/${curBucket.bucket}/${opts.userId}/${curBucket.file}`
}