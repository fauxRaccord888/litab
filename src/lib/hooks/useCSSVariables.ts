import { useMediaQuery } from "usehooks-ts";
import { STYLE } from "$lib/style/variables";

export function useCSSVariables() {
    const lg = useMediaQuery(`only screen and (min-width : ${STYLE.BREAK_POINT.MD}px)`);
    const md = useMediaQuery(`only screen and (min-width : ${STYLE.BREAK_POINT.SM}px)`);

    if (lg) {
        return {
            ...STYLE.COMMON,
            ...STYLE.LG
        }
    }

    if (md) {
        return {
            ...STYLE.COMMON,
            ...STYLE.MD
        }
    }

    return {
        ...STYLE.COMMON,
        ...STYLE.SM
    }
}