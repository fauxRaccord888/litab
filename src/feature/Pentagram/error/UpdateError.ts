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
