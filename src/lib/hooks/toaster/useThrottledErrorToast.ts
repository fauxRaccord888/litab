import { useCallback, useRef } from "react"
import { useTranslation } from "react-i18next"
import { isCustomError, isError } from "$lib/utils"
import toast from "react-hot-toast"

export function useThrottledErrorToast<T>(ms: number=1000) {
    const { t } = useTranslation()
    const timeoutRef = useRef<(() => void) | null>(null)

    const errorToast = useCallback(async (func: () => T): Promise<T | void> => {
        try {
            await func()
            return
        } catch (error) {
            if (timeoutRef.current) return
            
            const timeout = setTimeout(() => {
                if (timeoutRef.current) timeoutRef.current() 
            }, ms)
            timeoutRef.current = () => {
                clearTimeout(timeout)
                timeoutRef.current = null
            }

            if (isCustomError(error)) {
                toast.error(t(error.i18nKey))
                return
            }
            if (isError(error)) {
                toast.error(t(error.message))
                return
            }
            toast.error(t("error.unknownError"))
            return
        }
    }, [t, timeoutRef, ms])

    return errorToast
}