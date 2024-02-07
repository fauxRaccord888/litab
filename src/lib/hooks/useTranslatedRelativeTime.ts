import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { getRelativeTimeAndUnit } from "$lib/utils/getRelativeTimeAndUnit";

export function useTranslatedRelativeTime(date: Date) {
    const { i18n } = useTranslation()
    
    const relativeTime = useMemo(() => {
        const [diff, unit] = getRelativeTimeAndUnit(new Date(date))
        const formatter = new Intl.RelativeTimeFormat(i18n.language)
        return formatter.format(diff, unit)
    }, [i18n, date])

    return relativeTime
}
