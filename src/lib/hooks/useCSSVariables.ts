import { useMediaQuery } from "usehooks-ts";
import { STYLE } from "$lib/style/variables";

export function useCSSVariables() {
    const lg = useMediaQuery(`only screen and (min-width : ${STYLE.breakPoint.md}px)`);
    const md = useMediaQuery(`only screen and (min-width : ${STYLE.breakPoint.sm}px)`);

    if (lg) {
        return {
            ...STYLE.common,
            ...STYLE.lg
        }
    }

    if (md) {
        return {
            ...STYLE.common,
            ...STYLE.md
        }
    }

    return {
        ...STYLE.common,
        ...STYLE.sm
    }
}