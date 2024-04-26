export type ConstantsWithRange = { 
    min: number, 
    max: number, 
    skew: number,
    isInt?: true
}

type BoxMullerRandomArg = ConstantsWithRange & {
    prng: () => number
}

export function boxMullerRandom(args: BoxMullerRandomArg) {
    const { min, max, skew, prng, isInt } = args
    let u = 0, v = 0;
    while(u === 0) u = prng() 
    while(v === 0) v = prng()
    
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )
    num = num / 10.0 + 0.5 

    if (num > 1 || num < 0) num = boxMullerRandom(args)
    
    else{
        num = Math.pow(num, skew)
        num *= max - min 
        num += min 
    }
    if (isInt) return Math.floor(num)
    return num
}

export function getScore(v: number, min: number, max: number, skew: number) {
    let num = v - min
    num /= max - min
    num = Math.pow(num, 1/skew)
    return num
}

export const randomColorVal = (min: number, max: number, skew: number, prng: () => number) => (
    Math.floor(boxMullerRandom({min, max, skew, prng}))
)

export function createRandomizedObject<K extends string>(obj: Record<K, ConstantsWithRange>, prng: () => number) {
    const keys = Object.keys(obj) as K[]

    const entries = keys.map((key: K) => [
        key, boxMullerRandom({...obj[key], prng})
    ])
    const result = Object.fromEntries(entries) as Record<K, number>

    return result
}