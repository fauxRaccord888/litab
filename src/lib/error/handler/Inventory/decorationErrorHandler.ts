import { ErrorHandler } from "../mainController"

export async function decorationErrorHandler<T>(func: () => Promise<T>) {
    return ErrorHandler.handle({
        mainFunc: func,
        // TODO 에러 핸들링 추가
        handleFunc: (e: Error) => {
            console.log(e)
        }
    })
}