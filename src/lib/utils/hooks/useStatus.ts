import { useState } from "react"

export const useStatus = () => {
    return useState<'idle' | 'pending' | 'error' | 'success'>('idle')
}