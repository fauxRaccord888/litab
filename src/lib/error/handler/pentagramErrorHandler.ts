import { EmptyInputError } from "../customError/pentagram/MutationError"
import { ErrorHandler } from "./mainController"

export async function pentagramMutationErrorHandler<T>(func: () => Promise<T>) {
    return ErrorHandler.handle({
        mainFunc: func,
        handleFunc: (e: Error) => {
            if (e.message === 'empty input') {
                throw new EmptyInputError()
            }
        }
    })
}

export async function pentagramDeleteErrorHandler<T>(func: () => Promise<T>) {
    ErrorHandler.handle({
        mainFunc: func,
        handleFunc: () => {}
    })
}