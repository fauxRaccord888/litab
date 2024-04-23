import type { RgbaObject } from 'hex-rgb';

export function convertRgbaToCSS(rgba: RgbaObject, alpha?: number) {
    return `rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${alpha ?? rgba.alpha})`
}