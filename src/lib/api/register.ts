import type { SupabaseClient } from "@supabase/supabase-js"

import { registerOnAuth_DB } from "./supabase/registerOnAuth"
import { registerOnTable_DB } from "./supabase/registerOnTable"
import { parseErrorMessage } from "./utils/error"

export interface RegisterPayload {
    email: string,
    password: string,
}

export const register_SERVER = async (
    payload: RegisterPayload, 
    client: SupabaseClient
) => {
    try {
        const { data, error } = await registerOnAuth_DB(payload, client)

        if (error || !data?.user) {
            const msg = parseErrorMessage(error?.message)
            throw new Error(msg)
        }

        const { 
            data: tableData,
            error: tableError
        } = await registerOnTable_DB(data.user, client)

        // TODO 테이블에 등록되지 않은 경우 에러 핸들링
        // fallback으로 auth의 계정을 지울 수는 없음(anon키 대신 서비스키 필요)
        console.log(tableData, tableError)
        return tableData && tableData[0]

    } catch (err) {
        if (err instanceof Error) throw err
        const msg = parseErrorMessage('')
        throw new Error(msg)
    }
}
