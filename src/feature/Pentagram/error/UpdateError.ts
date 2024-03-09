import { CustomError } from "$lib/error"

export class PositionError extends CustomError {
    constructor() {
        super(
            '부적절한 위치입니다',
            'pentagram.toast.error.invalidPosition'
        )
    }
}

export class DuplicateError extends CustomError {
    constructor() {
        super(
            '중복된 작품입니다',
            'pentagram.toast.error.notUniqueOeuvre'
        )
    }
}

export class UpdatePentagramTransactionError extends CustomError {
    constructor() {
        super(
            '펜타그램 업데이트에 실패했어요. 같은 문제가 반복될 경우 문의를 남겨주세요.',
            'pentagram.toast.error.updateTransactionFailed'
        )
    }
}

export class InsertPentagramTransactionError extends CustomError {
    constructor() {
        super(
            '펜타그램 등록에 실패했어요. 같은 문제가 반복될 경우 문의를 남겨주세요.',
            'pentagram.toast.error.insertTransactionFailed'
        )
    }
}