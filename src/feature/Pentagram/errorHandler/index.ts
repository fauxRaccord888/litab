import { CustomUnknownError } from "$lib/error"
import { isCustomError, isError } from "$lib/utils"
import { EmptyInputError, PentagramTransactionError } from "../error/MutationError"

export async function pentagramMutationErrorHandler<T>(func: () => T) {
    try {
        const result = await func()
        return result
    } catch(e) {
        if (!isError(e)) {
            throw new CustomUnknownError()
        }

        if (e.message === 'empty input') {
            throw new EmptyInputError()
        }

        if (isCustomError(e)) {
            throw e
        }
        throw new PentagramTransactionError()
    }
}

export async function pentagramDeleteErrorHandler<T>(func: () => T) {
    try {
        const result = await func()
        return result
    } catch(e) {
        if (!isError(e)) {
            throw new CustomUnknownError()
        }

        if (isCustomError(e)) {
            throw e
        }
        throw new PentagramTransactionError()
    }
}