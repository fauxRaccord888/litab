import { InvalidCredentialError } from "../customError"
import { ErrorHandler } from "./mainController"

export async function signInErrorHandler<T>(func: () => Promise<T>) {
    return ErrorHandler.handle({
        mainFunc: func,
        handleFunc: (e: Error) => {
            if (e.message.includes("Invalid login credentials")) {
                throw new InvalidCredentialError()
            }
        }
    })
}