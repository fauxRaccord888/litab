import { getUnionedChanges } from '.';


export function getSnapshot(
    unionedChanges: ReturnType<typeof getUnionedChanges>,
    timestamp: Date
) {
    const position = unionedChanges.find((change) => {
        if (!change?.item) return false
        if (!change.item?.created_at) return false
        if (new Date(change.item?.created_at) > timestamp) return false
        if (typeof change.item?.current_angle !== 'number') return false
        if (typeof change.item?.current_distance !== 'number') return false
        return true
    })

    const deleted = unionedChanges
        .find((change) => {
            if (!change?.item) return false
            if (!change.item?.created_at) return false
            if (new Date(change.item?.created_at) > timestamp) return false
            return true
        })
        ?.item.changeType === 'remove'

    const angle = position ? position.item.current_angle : null;
    const distance = position ? position.item.current_distance : null;

    return { angle, distance, deleted }
}