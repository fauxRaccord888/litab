import type { UploadCoverPayload } from "../types"
import { supabaseClient, upload_SUPABASE } from "$lib/supabase"
import { AccessNotGrantedError } from "$feature/auth/error"

export const uploadCover_SUPABASE = async (
    payload: UploadCoverPayload,
) => {
    const { file } = payload
    const { data } = await supabaseClient.auth.getSession()

    const user = data.session?.user    
    if (!user) return { data: null, error: new AccessNotGrantedError()}
    
    const result = upload_SUPABASE({
        file,
        bucket: 'users',
        id: user?.id
    })
    
    return result
}