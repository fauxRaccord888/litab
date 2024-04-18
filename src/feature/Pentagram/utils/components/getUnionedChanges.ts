import type { RecoverRecordInfoFragment, RemoveRecordInfoFragment, UpdateRecordInfoFragment, UpsertRecordInfoFragment } from "$lib/graphql/__generated__/graphql";
import type { ChangeTypeKey, TPentagramChange } from "../../components/common/PentagramChange";
import type { Collections } from "$lib/types/graphql";

type EntityWithUnunionedChanges= {
    pentagramRevisionUpsertRecordsCollection?: Collections<UpsertRecordInfoFragment> | null | undefined,
    pentagramRevisionUpdateRecordsCollection?: Collections<UpdateRecordInfoFragment> | null | undefined,
    pentagramRevisionRemoveRecordsCollection?: Collections<RemoveRecordInfoFragment> | null | undefined,
    pentagramRevisionRecoverRecordsCollection?: Collections<RecoverRecordInfoFragment> | null | undefined
} | null | undefined

export function getUnionedChanges(node: EntityWithUnunionedChanges):TPentagramChange[] {
    if (!node) return []

    const { 
        pentagramRevisionUpsertRecordsCollection: upsert,
        pentagramRevisionUpdateRecordsCollection: update,
        pentagramRevisionRemoveRecordsCollection: remove,
        pentagramRevisionRecoverRecordsCollection: recover
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
                createdAt: edge.node.revision.createdAt,
                oeuvre: edge.node.pentagramNode.oeuvre,
                changeType: key
            }))
        ))
        .reduce((acc: TPentagramChange[], cur) => {
            if (!cur) return acc
            return acc?.concat(cur)
        }, [])
        .sort((a, b) => {
            if (!a?.createdAt || !b?.createdAt) return 0
            return new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime()
        })

    return result
}