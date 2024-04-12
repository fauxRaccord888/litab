import { ParsedLocation } from "@tanstack/react-router"

// COMMENT 계층적 구조를 갖는 모달에 대해서는 다른 주소로 인식되기 때문에 상위 디렉토리로 scroll key 통합
// 전역적 Modal의 경우에는 쿼리 매개변수를 쓰므로 별도의 주소로 인식되지 않음
export function getScrollKey(location: ParsedLocation) {
    const { pathname } = location
    const splittedPath = pathname.split("/")

    if (splittedPath[1] === 'profile') {
        return splittedPath.slice(0, 3).join("/")
    }

    return splittedPath.join("/")
}