import { filterChanges } from ".";

type NewNode = {
    id: string
    oeuvre_id: string
}

// COMMENT 불필요 필드가 존재할 경우, 문제가 발생할 수 있음
// 직접 엔티티의 필드를 확인하면서 타이핑하는 것이 보다 안전 
export function formatChanges(
    filteredChanges: ReturnType<typeof filterChanges>, 
    newNodes: NewNode[],
    revisionId: string
) {
    const {
        upsertChanges,
        updateChanges,
        recoverChanges,
        removeChanges
    } = filteredChanges   

    const processedUpsertChanges = upsertChanges.map(({change}) => {
        const newNode = newNodes.find((edge) => edge.oeuvre_id === change.oeuvres.id)
        if (!newNode) return
        return {
            node_id: newNode?.id,
            revision_id: revisionId,
            current_angle: change?.angle,
            current_distance: change?.distance,
        }
    })

    const processedUpdateChanges = updateChanges.map(({node, change}) => ({
        node_id: change?.id,
        revision_id: revisionId,
        previous_angle: node.angle,
        previous_distance: node.distance,
        current_angle: change?.angle,
        current_distance: change?.distance,
    }))

    const processedRecoverChanges = recoverChanges.map(({change}) => ({
        node_id: change?.id,
        revision_id: revisionId,
        current_angle: change?.angle,
        current_distance: change?.distance,
    }))

    const processedRemoveChanges = removeChanges.map(({node}) => ({
        node_id: node.id,
        revision_id: revisionId,
        previous_angle: node.angle,
        previous_distance: node.distance,
    }))

    return {
        processedUpsertChanges,
        processedUpdateChanges,
        processedRecoverChanges,
        processedRemoveChanges
    }
}