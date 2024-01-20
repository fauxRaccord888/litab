import type { Dispatch, SetStateAction } from 'react';


export async function queryHelper<TData>(option: {
    fn: () => Promise<{ data: TData }>;
    setStatus: Dispatch<SetStateAction<"pending" | "error" | "success" | "idle">>
    beforeQuery?: boolean,
    errorCondition?: (data: TData) => boolean
    onSuccess?: (data: TData) => void 
}) {
    option.setStatus('pending')

    if (!option.beforeQuery) {
        option.setStatus('error') 
        return null
    }

    const { data } = await option.fn()
    if (!data || option?.errorCondition && option?.errorCondition(data)) {
        option.setStatus('error')
        return null
    } 

    if (option.onSuccess) {
        option.onSuccess(data)
    }
    option.setStatus('success')
    return data
}

