import { CustomError } from "./base";

export class CustomTypeError extends CustomError {
    constructor() {
        super(
            "올바르지 않은 타입이 입력되었습니다.",
            "error.typeError"
        )
    }
}