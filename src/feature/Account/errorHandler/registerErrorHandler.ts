import { CustomUnknownError } from "$lib/error"
import { isCustomError, isError } from "$lib/utils"
import { checkUpsertAccountAndThrow } from "./fragments"

export async function registerErrorHandler<T>(func: () => T) {
    try {
        const result = await func()
        return result
    } catch(e) {
        if (!isError(e)) {
            throw new CustomUnknownError()
        }

        checkUpsertAccountAndThrow(e)

        if (isCustomError(e)) {
            throw e
        }
        throw new CustomUnknownError()
    }
}