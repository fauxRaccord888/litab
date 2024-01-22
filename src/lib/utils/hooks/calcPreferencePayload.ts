import type { Tables } from '$lib/types/supabase';

type PreferenceKey = 'is_red' | 'is_green' | 'is_blue'

export const calcPreferencePayload = (
    data: Tables<'preference_tests'>[],
    preference: Record<string, boolean>
) => {
    const preferenceKeys: PreferenceKey[] = ['is_red', 'is_green',  'is_blue']
    const result = Object.fromEntries(preferenceKeys.map((key) => [key, new Array<boolean>()]))

    data.forEach((datum) => {
        const userValue = preference[datum.id]
        if (userValue === undefined) return
        preferenceKeys.forEach((key) => {
            if (!datum[key]) return
            const value = userValue ? datum[key] : !datum[key]
            result[key].push(value)
        })
    })

    const response: [number, number, number] = [0, 0, 0]
    preferenceKeys.forEach((key, idx) => {
        const affirmative = result[key].filter((v) => v === true).length
        const size = result[key].length 
        const colorValue = Number(affirmative / size * 255)
        response[idx] = isNaN(colorValue) ? 255 : colorValue 
    })
    return response
}