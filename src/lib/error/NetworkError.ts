import { CustomError } from ".";

export class PendingError extends CustomError {
    constructor() {
        super(
            '현재 네트워크 요청을 기다리고 있어요. 잠시 후 다시 확인해주세요.',
            'network.toast.error.pending'
        )
    }
}