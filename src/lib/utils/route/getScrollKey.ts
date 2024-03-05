import { ParsedLocation } from "@tanstack/react-router"

// TODO - home, Oeuvre, author, category
// TODO - 앱 규모가 커질 경우 리팩토링 필요
// TODO 피드 가상화 시 스크롤- tanstack router 공식 문서
export function getScrollKey(location: ParsedLocation) {
    const { pathname } = location
    const splittedPath = pathname.split("/")

    if (
        (splittedPath[1] === 'pentagram' || splittedPath[1] === 'profile') 
        && (splittedPath[3] === 'view' || splittedPath[3] === 'update')
    ) {
        return splittedPath.slice(0, 4).join("/")
    }

    return splittedPath.join("/")
}