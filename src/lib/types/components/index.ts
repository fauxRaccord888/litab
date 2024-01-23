import { ReactNode } from "react"

export type PropsWithChildrenNode = {
    children: ReactNode[]
}

export type PropsWithStatus<T> = 
    { status: 'success' } & T | 
    { status: 'error', error: unknown } | 
    { status: 'pending'}