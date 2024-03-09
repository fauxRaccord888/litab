import { filterChanges } from ".";

export function formatChanges(
    filteredChanges: ReturnType<typeof filterChanges>, 
) {
    const {
        upsertChanges,
        updateChanges,
        recoverChanges,
        removeChanges
    } = filteredChanges   
    const processedUpsertChanges = upsertChanges.map(({change}) =>({
        oeuvre_id: change?.oeuvres?.id,
        current_angle: change?.angle,
        current_distance: change?.distance,
    }))

    const processedUpdateChanges = updateChanges.map(({node, change}) => ({
        node_id: change?.id,
        previous_angle: node?.angle,
        previous_distance: node?.distance,
        current_angle: change?.angle,
        current_distance: change?.distance,
    }))

    const processedRecoverChanges = recoverChanges.map(({change}) => ({
        node_id: change?.id,
        current_angle: change?.angle,
        current_distance: change?.distance,
    }))

    const processedRemoveChanges = removeChanges.map(({node}) => ({
        node_id: node?.id,
        previous_angle: node?.angle,
        previous_distance: node?.distance,
    }))

    return {
        processedUpsertChanges,
        processedUpdateChanges,
        processedRecoverChanges,
        processedRemoveChanges
    }
}