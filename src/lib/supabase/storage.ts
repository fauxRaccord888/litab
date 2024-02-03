import { supabaseClient } from "./client"

export const getURLfromBucket = ( payload: {
    bucket: string
    id: string,
    file: string,
}) => {
    const { bucket, id, file } = payload
    const { data } = supabaseClient
        .storage
        .from(bucket)
        .getPublicUrl(`${id}/${file}`)
    
    return data.publicUrl
}