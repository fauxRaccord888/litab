import type { InsertPentagramRevisionMutation } from "$lib/graphql/__generated__/graphql";
import { useCallback } from "react";
import { useMutation } from "@apollo/client";
import { insertPentagramRevision_MUTATION } from '../../graphql/mutation';

export function usePentagramRevisionMutation() {
    const [insertPentagramRevisionMutation] = useMutation<InsertPentagramRevisionMutation>(insertPentagramRevision_MUTATION)
    const insertRevision = useCallback(async (pentagramId: string) => {
        const revisionInsertResponse = await insertPentagramRevisionMutation({
            variables: {
                input: {
                    pentagram_id: pentagramId,
                }
            }
        })

        return { revisionInsertResponse }
    }, [insertPentagramRevisionMutation])

    return { insertRevision }
}