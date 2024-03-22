export class CustomError extends Error {
    errorType: string
    i18nKey: string
    __isStorageError: boolean
    
    constructor(message: string, i18nKey: string) {
        super(message)
        this.errorType = 'CUSTOM_ERROR'
        this.i18nKey = i18nKey
        this.__isStorageError = true
    }
}

export class CustomUnknownError extends CustomError {
    constructor() {
        super(
            "알 수 없는 에러입니다.",
            "error.unknownError"
        )
    }
}