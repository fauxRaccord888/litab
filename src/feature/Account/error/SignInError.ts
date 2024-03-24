import { CustomError } from "$lib/error"

// Profile
export class InvalidCredentialError extends CustomError {
    constructor() {
        super(
            '아이디와 비밀번호를 다시 확인해주세요.',
            'account.toast.error.invalidCredential'
        )
    }
}