export type ConstantsWithRange = { min: number, max: number, skew: number }

export function boxMullerRandom(min: number, max: number, skew: number) {
    let u = 0, v = 0;
    while(u === 0) u = Math.random() 
    while(v === 0) v = Math.random()
    
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )
    num = num / 10.0 + 0.5 

    if (num > 1 || num < 0)  num = boxMullerRandom(min, max, skew)
    
    else{
        num = Math.pow(num, skew)
        num *= max - min 
        num += min 
    }
    return num
}

export function getScore(v: number, min: number, max: number, skew: number) {
    let num = v - min
    num /= max - min
    num = Math.pow(num, 1/skew)
    return num
}

export function createRandomizedObject<K extends string>(obj: Record<K, ConstantsWithRange>) {
    const keys = Object.keys(obj) as K[]

    const entries = keys.map((key: K) => [
        key, boxMullerRandom(obj[key].min, obj[key].max, obj[key].skew)
    ])
    const result = Object.fromEntries(entries) as Record<K, number>

    return result
}