import { checkAccountErrorAndThrow, checkStorageErrorAndThrow } from "./fragments"
import { ErrorHandler } from "./mainController"

export async function updateAccountErrorHandler<T>(func: () => Promise<T>) {
    return ErrorHandler.handle({
        mainFunc: func,
        handleFunc: (e: Error) => {
            checkAccountErrorAndThrow(e)
            checkStorageErrorAndThrow(e)
        }
    })
}