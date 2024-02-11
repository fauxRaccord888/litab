export function formatProps<T extends {id: string}>(item: T) {
    return {
        id: item.id,
        item
    }
}