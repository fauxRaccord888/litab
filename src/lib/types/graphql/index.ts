export type Collections<T=unknown> = { 
    edges?: { node: T }[] | null
} | undefined | null

export type ResponseCollections<T=unknown> = {
    records?: T[] | null
} | undefined | null

// 재귀적으로 처리하면 하위의 nullish 값도 사라지므로 주의
export type FirstNodeOfCollection<T extends Collections> = NonNullable<NonNullable<NonNullable<T>["edges"]>>[number]["node"]

export type IConnection<T = { node: unknown, cursor: string }> = {
    edges: T[],
    pageInfo?: {
        hasNextPage: boolean,
        endCursor: string
    }
}