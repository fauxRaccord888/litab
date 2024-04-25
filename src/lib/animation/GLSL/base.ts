import type { Vec2GLSL, Vec4GLSL } from './types'

// GLSL 쉐이더 코드를 최대한 변경 없이 포팅하기 위함
// 원본 코드에서 오버로딩이 가능한 메서드의 경우 가급적 변수명을 뒤에 붙인 메서드로 변경
// 전체 스펙을 달성하는 것이 목적이 아님 
// 필요한 부분만 구현 이후 추가 변경이 있을 경우에만 메서드를 추가

// TODO REFACTOR 렌더링 특성으로 인해 최적화가 중요한 부분
// 벡터 연산 최적화가 일어나지 않으면 프레임레이트 하락이 클 수밖에 없음
// GLSL 네임 스페이스에 속하는 메서드는 전반적으로 높은 수준의 최적화가 필요

// fastFloor는 jwagner의 simplex-noise.ts [https://github.com/jwagner/simplex-noise.js/blob/main/simplex-noise.ts]
// 왜 빠른지는 정확히 알 수 없음
const fastFloor = (x: number) => Math.floor(x) | 0;

export function vec2(x: number, y: number): Vec2GLSL {
    return [x, y]
}

export function vec4(s1: number, s2: number, s3: number, s4: number): Vec4GLSL {
    return [s1, s2, s3, s4]
}

export function floorVector2(v:Vec2GLSL) {
    return vec2(fastFloor(v[0]), fastFloor(v[1]));
}

export function fract(n: number) {
    return n - fastFloor(n)
}

export function fractVector2(v: Vec2GLSL) {
    return vec2(fract(v[0]), fract(v[1]));
}
  
export function smoothstep(lowerLim: number, upperLim: number, n: number) {
    if (n <= lowerLim) return 0
    if (upperLim <= n) return 1
    const clamped = (n - lowerLim) / (upperLim - lowerLim)
    return clamped * clamped * (3 - 2 * clamped)
}

export function step(limit: number, value: number) {
    if (limit <= value) return 1
    return 0
}

export function smoothStepVector2(lowerLim: number, upperLim: number, v: Vec2GLSL) {
    return vec2(
        smoothstep(lowerLim, upperLim, v[0]), 
        smoothstep(lowerLim, upperLim, v[1])
    )
}

export function dot(v1:Vec2GLSL, v2:Vec2GLSL) {
    return v1[0] * v2[0] + v1[1] * v2[1];
}

export function sumVector2(...args: (Vec2GLSL | number)[]) {
    const result = args.reduce((acc: Vec2GLSL, v) => {
        if (typeof v === "number") {
            return vec2(
                acc[0] + v,
                acc[0] + v
            )    
        }
        return vec2(
            acc[0] + v[0],
            acc[1] + v[1]
        )
    }, vec2(0, 0))
    return result
}

export function sumVector4(...args: Vec4GLSL[]) {
    const result = args.reduce((acc, v) => {
        return vec4(
            acc[0] + v[0],
            acc[1] + v[1],
            acc[2] + v[2],
            acc[3] + v[3]
        )
    })
    return result
}

export function mulVector2(v: Vec2GLSL, s: number) {
    const x = v[0] * s
    const y = v[1] * s
    return vec2(x, y)
}

export function mulVector4(v: Vec4GLSL, s: number) {
    return vec4(v[0] * s , v[1] * s, v[2] * s, v[3] * s)
}

export function mix(n1: number, n2: number, w: number) {
    return  (n2 - n1) * w + n1
}