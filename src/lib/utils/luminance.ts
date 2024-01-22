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

export function calcFontColorByBG([red, green, blue]: number[]) {
    const luminance = calcLuminance([red, green, blue])
    const isLightFontColor = luminance < LUMINANCE.FONT_COLOR_THRESHOLD
    // TODO CSS variable을 안 넘기면서 일관성 있게 통제?
    if (isLightFontColor) return 'rgb(var(--light-font-color))'
    return 'rgb(var(--dark-font-color))'
}