import { ExceedMaximumSizeError } from "../../../customError"

export function checkStorageErrorAndThrow(e: Error) {
    if (e.message.includes("maximum allowed size")) {
        throw new ExceedMaximumSizeError()
    }
}