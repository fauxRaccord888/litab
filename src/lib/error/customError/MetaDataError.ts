import { CustomError } from "./base"

export class InvalidInputError extends CustomError {
    constructor() {
        super(
            '필수적인 입력값이 누락되었습니다. 다시 확인해주세요.',
            'metaData.toast.error.invalidInput'
        )
    }
}

export class FilesNotProvidedError extends CustomError {
    constructor() {
        super(
            '커버 이미지 파일이 확인되지 않았습니다. 다시 확인해주세요.',
            'metaData.toast.error.filesNotProvided'
        )
    }
}
