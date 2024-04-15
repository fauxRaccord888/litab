import { isApolloError } from "$lib/utils"
import { DuplicateEmailError, DuplicateMutableIdError, RateLimitError, SamePasswordError, WeakPasswordError } from "../../../customError"

export function checkAccountErrorAndThrow(e: Error) {
    if (e.message.includes("should contain at least")) {
        throw new WeakPasswordError()
    }
    if (e.message.includes("should be different from")) {
        throw new SamePasswordError()
    }
    if (e.message.includes("can only request this once")) {
        throw new RateLimitError()
    }
    if (e.message.includes("User already registered")){
        throw new DuplicateEmailError()
    }

    if (isApolloError(e)) {
        if (e.graphQLErrors.some(
            (gqlError) => gqlError.message.includes('duplicate key value'))
        ) {
            throw new DuplicateMutableIdError()
        }
    }
}