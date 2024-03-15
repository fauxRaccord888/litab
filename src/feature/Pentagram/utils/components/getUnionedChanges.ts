import type { RecoverRecordInfoFragment, RemoveRecordInfoFragment, UpdateRecordInfoFragment, UpsertRecordInfoFragment } from "$lib/graphql/__generated__/graphql";
import type { ChangeTypeKey, TPentagramChange } from "../../components/common/PentagramChange";
import type { Collections } from "$lib/types/graphql";

type EntityWithUnunionedChanges= {
    pentagram_revision_upsert_recordsCollection?: Collections<UpsertRecordInfoFragment> | null | undefined,
    pentagram_revision_update_recordsCollection?: Collections<UpdateRecordInfoFragment> | null | undefined,
    pentagram_revision_remove_recordsCollection?: Collections<RemoveRecordInfoFragment> | null | undefined,
    pentagram_revision_recover_recordsCollection?: Collections<RecoverRecordInfoFragment> | null | undefined
} | null | undefined

export function getUnionedChanges(node: EntityWithUnunionedChanges):TPentagramChange[] {
    if (!node) return []

    const { 
        pentagram_revision_upsert_recordsCollection: upsert,
        pentagram_revision_update_recordsCollection: update,
        pentagram_revision_remove_recordsCollection: remove,
        pentagram_revision_recover_recordsCollection: recover
    } = node

    const unprocessedChanges = {
        upsert,
        update,
        remove,
        recover
    }

    const keys:ChangeTypeKey[] = ["upsert", "update", "remove", "recover"]
    const result: TPentagramChange[] = keys
        .map((key) => (
            unprocessedChanges[key]?.edges?.map((edge) => ({
                ...edge.node,
                created_at: edge.node.pentagram_revisions.created_at,
                oeuvres: edge.node.pentagram_nodes.oeuvres,
                changeType: key
            }))
        ))
        .reduce((acc: TPentagramChange[], cur) => {
            if (!cur) return acc
            return acc?.concat(cur)
        }, [])
        .sort((a, b) => {
            if (!a?.created_at || !b?.created_at) return 0
            return new Date(b?.created_at).getTime() - new Date(a?.created_at).getTime()
        })

    return result
}