import { LUMINANCE } from "$lib/types/utils"

// by Mark Ransom
// https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
export function calcLuminance([red, green, blue]: number[]) {
    return (
        red*LUMINANCE.RED_MULTIPLIER + 
        green*LUMINANCE.GREEN_MULTIPLIER + 
        blue*LUMINANCE.BLUE_MULTIPLIER
    )
}

function isValidHexArray(numberStrings: (string | null)[] | undefined | null): asserts numberStrings is string[] {
    if (!numberStrings) throw new Error()
    if (numberStrings.length !== 3) throw new Error()
    numberStrings.forEach((numberString) => isValidHexNumber(numberString))
}

function isValidHexNumber(numberString: string | null): asserts numberString is string{
    if (!numberString) throw new Error()
    const parsed = parseInt(numberString, 10)
    if (parsed.toString() !== numberString) throw new Error()
    if (parsed < 0 || 255 < parsed) throw new Error()
}

export function getFontColorArray(numberStrings: (string | null)[] | undefined | null, fallbackColor: number[]) {
    try {
        isValidHexArray(numberStrings)
        return numberStrings.map((numberString) => Number(numberString))
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