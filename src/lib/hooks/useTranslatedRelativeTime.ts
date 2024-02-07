import type { Locale } from 'date-fns'

import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { formatDistanceToNow } from "date-fns";
import { ko } from 'date-fns/locale'


const localeDict: Record<string, Locale> = {
    'ko': ko,
}

export function useTranslatedRelativeTime(date: Date) {
    const { i18n } = useTranslation()
    
    const relativeTime = useMemo(() => {
        return formatDistanceToNow(date, {
            addSuffix: true,
            locale: localeDict[i18n.language] // undefined = 'en'
        })
    }, [i18n, date])

    return relativeTime
}
