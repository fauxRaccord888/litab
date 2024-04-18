import { getUnionedChanges } from '.';


export function getSnapshot(
    unionedChanges: ReturnType<typeof getUnionedChanges>,
    timestamp: Date,
    calcBeforePosition?: boolean
) {
    const position = unionedChanges.find((change) => {
        if (!change) return false
        if (!change?.createdAt) return false
        const date = new Date(change?.createdAt)
        if (date > timestamp) return false
        if (calcBeforePosition && date >= timestamp) return false
        if (typeof change?.currentAngle !== 'number') return false
        if (typeof change?.currentDistance !== 'number') return false
        return true
    })

    const deleted = unionedChanges
        .find((change) => {
            if (!change) return false
            if (!change?.createdAt) return false
            const date = new Date(change?.createdAt)
            if (date > timestamp) return false
            if (calcBeforePosition && date >= timestamp) return false
            return true
        })
        ?.changeType === 'remove'

    const angle = position ? position.currentAngle : null;
    const distance = position ? position.currentDistance : null;

    return { angle, distance, deleted }
}