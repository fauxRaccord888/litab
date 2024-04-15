import type { BucketKeys } from "./types"
import { supabaseClient } from "./client"
import { CustomUnknownError } from "$lib/error/customError"

// COMMENT 
// DB에 트리거를 두어 update 시에 table을 업데이트하는 것이 기술적으로는 가능함
// https://github.com/orgs/supabase/discussions/19017#discussioncomment-7613197
// 그러나 위의 토론에서 지적하듯, Supabase의 storage schema는 잦은 변화에 노출됨
// 하나의 transaction으로 묶을 수 없지만 그럼에도 클라이언트에서 처리하는 것이 바람직할 것으로 판단됨


// REFACTOR
// 둘로 나뉜 업데이트 과정(table, storage)에 대한 에러 핸들링이 적절히 이루어지지 않음
// 현실적으로 storage가 성공했을 때 table update가 실패할 확률은 낮지만 문제

export const upload_SUPABASE = async (
    payload: {
        file: File,
        bucket: BucketKeys,
        id: string | null | undefined
    },
) => {
    const { file, bucket, id } = payload
    if (!id) return { data: null, error: new CustomUnknownError()}
    
    const t = new Date()
    const { data: storageData, error: storageError } = await supabaseClient
        .storage
        .from(bucket)
        .upload(`public/${id}`, file, {
            cacheControl: '3600',
            upsert: true
        })
    if (storageError) return { data: null, error: storageError }

    if (storageData) {
        const { error: tableError } = await supabaseClient
            .from(bucket)
            .update({'updated_at': String(t.toISOString()) })
            .eq('id', id)
        if (tableError) return { data: null, error: tableError}
    }

    return {
        data: storageData, error: null
    }
}