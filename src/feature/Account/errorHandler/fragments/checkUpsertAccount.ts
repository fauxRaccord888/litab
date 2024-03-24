import { DuplicateEmailError, RateLimitError, SamePasswordError, WeakPasswordError } from "../../error"

export function checkUpsertAccountAndThrow(e: Error) {
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
}