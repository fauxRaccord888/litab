import { getUnionedChanges } from '.';


export function getSnapshot(
    unionedChanges: ReturnType<typeof getUnionedChanges>,
    timestamp: Date,
    calcBeforePosition?: boolean
) {
    const position = unionedChanges.find((change) => {
        if (!change) return false
        if (!change?.created_at) return false
        const date = new Date(change?.created_at)
        if (date > timestamp) return false
        if (calcBeforePosition && date >= timestamp) return false
        if (typeof change?.current_angle !== 'number') return false
        if (typeof change?.current_distance !== 'number') return false
        return true
    })

    const deleted = unionedChanges
        .find((change) => {
            if (!change) return false
            if (!change?.created_at) return false
            const date = new Date(change?.created_at)
            if (date > timestamp) return false
            if (calcBeforePosition && date >= timestamp) return false
            return true
        })
        ?.changeType === 'remove'

    const angle = position ? position.current_angle : null;
    const distance = position ? position.current_distance : null;

    return { angle, distance, deleted }
}