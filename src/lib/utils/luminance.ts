const LUMINANCE = {
    RED_MULTIPLIER: 0.299,
    GREEN_MULTIPLIER: 0.587,
    BLUE_MULTIPLIER: 0.114,
    FONT_COLOR_THRESHOLD: 186
}

// by Mark Ransom
// https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
export function calcLuminance([red, green, blue]: number[]) {
    return (
        red*LUMINANCE.RED_MULTIPLIER + 
        green*LUMINANCE.GREEN_MULTIPLIER + 
        blue*LUMINANCE.BLUE_MULTIPLIER
    )
}

type RGBColorInput = (number | null)[] | undefined | null

function isValidHexArray(colorValues: RGBColorInput): asserts colorValues is number[] {
    if (!colorValues) throw new Error()
    if (colorValues.length !== 3) throw new Error()
    colorValues.forEach((numberString) => isValidHexNumber(numberString))
}

function isValidHexNumber(colorValue: number | null): asserts colorValue is number{
    if (!colorValue) throw new Error()
    if (colorValue < 0 || 255 < colorValue) throw new Error()
}

export function getFontColorArray(colorValues: RGBColorInput, fallbackColor: number[]) {
    try {
        isValidHexArray(colorValues)
        return colorValues
    } catch (e: unknown) {
        return fallbackColor
    }
}

export function calcFontColorByBG([red, green, blue]: number[]) {
    const luminance = calcLuminance([red, green, blue])
    const isLightFontColor = luminance < LUMINANCE.FONT_COLOR_THRESHOLD
    // TODO CSS variable을 안 넘기면서 일관성 있게 통제?
    if (isLightFontColor) return 'rgb(var(--light-font-color))'
    return 'rgb(var(--dark-font-color))'
}