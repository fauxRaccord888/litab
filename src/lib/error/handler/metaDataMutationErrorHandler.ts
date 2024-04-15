import { checkStorageErrorAndThrow } from "./fragments"
import { ErrorHandler } from "./mainController"

export async function metaDataMutationErrorHandler<T>(func: () => Promise<T>) {
    return ErrorHandler.handle({
        mainFunc: func,
        handleFunc: (e: Error) => {
            checkStorageErrorAndThrow(e)
        }
    })
}