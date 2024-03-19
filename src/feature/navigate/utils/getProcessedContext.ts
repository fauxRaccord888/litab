import type { ProcessedContext, UnprocessedContext } from "$lib/types/components"
import { getCurrentUserFromContext } from "../../auth/utils"

export function getProcessedContext(context: UnprocessedContext): ProcessedContext {
    const currentUser = getCurrentUserFromContext(context)

    return { currentUser, ...context }
}