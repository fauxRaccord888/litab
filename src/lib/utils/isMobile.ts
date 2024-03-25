export function isMobile(agent: string) {
    // COMMENT 완전히 신뢰할 수는 없음. 일부 리눅스 태블릿 디바이스에서는 작동하지 않음
    const mobileAgents = [
        'Android',
        'iPhone',
        'iPad',
        'iPod',
        'BlackBerry',
        'Kindle',
        'IEMobile',
        'NetFront',
        'Windows Phone',
        'Tablet',
    ]

    return mobileAgents.some(mobileAgent => agent.includes(mobileAgent))
}