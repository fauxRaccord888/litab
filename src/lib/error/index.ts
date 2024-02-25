export class CustomError extends Error {
    errorType: string
    i18nKey: string
    
    constructor(message: string, i18nKey: string) {
        super(message)
        this.errorType = 'CUSTOM_ERROR'
        this.i18nKey = i18nKey
    }
}