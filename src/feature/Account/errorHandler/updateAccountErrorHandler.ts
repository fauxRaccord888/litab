import { CustomUnknownError } from "$lib/error"
import { isError, isCustomError, isApolloError } from "$lib/utils"
import { DuplicateMutableIdError, ExceedMaximumSizeError } from "../error"
import { checkUpsertAccountAndThrow } from "./fragments"

export async function updateAccountErrorHandler<T>(func: () => T) {
    try {
        const result = await func()
        return result
    } catch(e) {
        if (!isError(e)) {
            throw new CustomUnknownError()
        }

        // Auth update
        checkUpsertAccountAndThrow(e)

        // StorageUpdate
        if (e.message.includes("maximum allowed size")) {
            throw new ExceedMaximumSizeError()
        }

        // TableUpdate
        if (isApolloError(e)) {
            if (e.graphQLErrors.some(
                (gqlError) => gqlError.message.includes('duplicate key value'))
            ) {
                throw new DuplicateMutableIdError()
            }
        }

        if (isCustomError(e)) {
            throw e
        }
        throw new CustomUnknownError()
    }
}