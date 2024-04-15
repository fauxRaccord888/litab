import { CustomError } from "./base"

export class ExceedMaximumSizeError extends CustomError {
    constructor() {
        super(
            '업로드 가능한 최대 용량을 초과하였습니다.',
            'account.toast.error.exceedMaximumSize'
        )
    }
}