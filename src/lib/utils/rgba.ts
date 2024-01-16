export const rgba = (rgbArray?: number[] | null) => {
    if (!rgbArray) return '#00000000'
    return '#' + rgbArray.map((num) => toHex(num)).join('') + 'FF'
}

const toHex = (num: number) => {
    return num.toString(16).padStart(2, '0')
}