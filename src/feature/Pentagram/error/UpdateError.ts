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

export class PendingError extends CustomError {
    constructor() {
        super(
            '현재 네트워크 요청을 기다리고 있어요. 잠시 후 다시 확인해주세요.',
            'network.toast.error.pending'
        )
    }
}