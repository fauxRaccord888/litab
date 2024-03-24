import { CustomError } from "$lib/error";

export class AccessNotGrantedError extends CustomError {
    constructor() {
        super(
            '요청을 실행하기 위한 적절한 권한이 없습니다.',
            'auth.toast.error.accessNotGranted'
        )
    }
}