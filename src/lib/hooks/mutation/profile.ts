// 로그인으로 supabase auth의 세션 정보가 바뀔 것이므로 변이에 해당
/* hooks */
import { useCallback } from "react";
import { useSelector } from "react-redux";
/* types */
import type { AppRootState } from "$lib/stores/store";
/* database */
import { updatePreference_DB } from "$lib/database/profiles";
/* utils */
import { calcPreferencePayload } from "$lib/utils/hooks";

export function useUpdateUserPreference() {
    const { preferenceData, userPreference } = useSelector((state: AppRootState) => state.preference)
    const { sessionUser } = useSelector((state: AppRootState) => state.auth)
    
    const updateUserPreferenceHandler = useCallback(
        () => {
            if (
                !sessionUser || 
                !preferenceData || 
                !userPreference
            ) {
                return null
            }

            const payload = calcPreferencePayload(preferenceData, userPreference) 
            return updatePreference_DB(
                payload,
                sessionUser.id
            )
        }
    , [sessionUser, userPreference, preferenceData])

    return updateUserPreferenceHandler
}