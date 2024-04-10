import { CustomError } from "$lib/error"

export class EmptyInputError extends CustomError {
    constructor() {
        super(
            '생성하려는 펜타그램이 비어있거나 기존 펜타그램과 변화가 없어요.',
            'pentagram.toast.error.emptyInput'
        )
    }
}
export class PentagramTransactionError extends CustomError {
    constructor() {
        super(
            '펜타그램 등록에 실패했어요. 같은 문제가 반복될 경우 문의를 남겨주세요.',
            'pentagram.toast.error.pentagramMutationFailed'
        )
    }
}