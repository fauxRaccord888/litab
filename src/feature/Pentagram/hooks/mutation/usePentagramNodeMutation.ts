import type { InsertPentagramNodeMutation, UpdatePentagramNodeMutation } from "$lib/graphql/__generated__/graphql";
import { useCallback } from "react";
import { useMutation } from "@apollo/client";
import { useUnmergedChangeInfo } from "..";
import { filterChanges, omit } from "$feature/Pentagram/utils";
import { insertPentagramNode_MUTATION, updatePentagramNode_MUTATION } from '../../graphql/mutation';

export function usePentagramNodeMutation() {
    const [insertPentagramNodeMutation] = useMutation<InsertPentagramNodeMutation>(insertPentagramNode_MUTATION)
    const [Mutation] = useMutation<UpdatePentagramNodeMutation>(updatePentagramNode_MUTATION)

    const changes = useUnmergedChangeInfo()
    const { upsertChanges } = filterChanges(changes)

    const upsertNodes = useCallback(async (pentagramId: string) => {
        const nodeUpdateResponses = await Promise.all(changes.map(({change}) => {
            if (change.changeType === 'upsert') return null
            const result = Mutation({
                variables: {
                    set: {
                        ...omit(change, ["changeType", "oeuvres"]),
                        pentagram_id: pentagramId
                    },
                    filter: { id: { eq: change.id } }
                }
            })
            return result
        }))

        const nodeInsertResponse = upsertChanges.length
            ? await insertPentagramNodeMutation({
                variables: {
                    input: upsertChanges.map(({change}) => ({
                        pentagram_id: pentagramId,
                        angle: change.angle,
                        distance: change.distance,
                        oeuvre_id: change.oeuvres.id,
                    }))
                }
            })
            : null
    
        return { nodeUpdateResponses, nodeInsertResponse }
    }, [changes, insertPentagramNodeMutation, Mutation, upsertChanges])

    return { upsertNodes }
}