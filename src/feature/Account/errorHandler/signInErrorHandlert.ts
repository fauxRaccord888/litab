import { CustomUnknownError } from "$lib/error"
import { isCustomError, isError } from "$lib/utils"
import { InvalidCredentialError } from "../error"

export async function signInErrorHandler<T>(func: () => T) {
    try {
        const result = await func()
        return result
    } catch(e) {
        if (!isError(e)) {
            throw new CustomUnknownError()
        }

        // Auth update
        if (e.message.includes("Invalid login credentials")) {
            throw new InvalidCredentialError()
        }

        if (isCustomError(e)) {
            throw e
        }
        throw new CustomUnknownError()
    }
}