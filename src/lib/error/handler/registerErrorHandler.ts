import { ErrorHandler } from "./mainController"
import { checkAccountErrorAndThrow } from "./fragments"

export async function registerErrorHandler<T>(func: () => Promise<T>) {
    return ErrorHandler.handle({
        mainFunc: func,
        handleFunc: (e: Error) => {
            checkAccountErrorAndThrow(e)
        }
    })
}
