import { supabaseClient } from "./client"

export const getURLfromBucket = ( payload: {
    bucket: string,
    id: string,
    timeStamp: string
}) => {
    const { bucket, id, timeStamp } = payload
    const t = new Date(timeStamp).getTime() 
    const { data } = supabaseClient
        .storage
        .from(bucket)
        .getPublicUrl(`public/${id}?t=${t}`)
    
    return data.publicUrl
}