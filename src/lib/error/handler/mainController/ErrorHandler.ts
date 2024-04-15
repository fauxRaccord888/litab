import { CustomUnknownError } from "../../customError"
import { isCustomError, isError } from "$lib/utils"

export class ErrorHandler {
    static async handle<T>(arg: {
        mainFunc: () => Promise<T>, 
        handleFunc: (e: Error) => void
    }) {
        try {
            const res = await arg.mainFunc()
            return res
        } catch (e) {
            if (!isError(e)) {
                throw new CustomUnknownError()
            }

            arg.handleFunc(e)

            if (isCustomError(e)) {
                throw e
            }
            throw new CustomUnknownError()    
        }
    }
}