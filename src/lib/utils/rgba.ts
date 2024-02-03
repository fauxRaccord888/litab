export const rgba = (rgbArray?: number[] | null) => {
    if (!rgbArray) return '#00000000'
    return '#' + rgbArray.map((num) => toHex(num)).join('') + 'FF'
}

const toHex = (num: number) => {
    return num.toString(16).padStart(2, '0')
}

export const fromHex = (hex: string) => {
    const processedHex = hex.replace('#', '')
    return [
        parseInt(processedHex.slice(0,2), 16),
        parseInt(processedHex.slice(2,4), 16),
        parseInt(processedHex.slice(4,6), 16)
    ]
}