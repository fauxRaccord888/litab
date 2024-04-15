import { useCallback } from "react";
import { useMutation } from "@apollo/client";

import { evictCacheById } from "$lib/utils";
import { PendingError } from "$lib/error/customError";
import { deletePentagram_MUTATION } from "$feature/Pentagram/graphql";

type DeletePentagramPayload = {
    id: string
}

export function useDeletePentagram() {
    const [executeDelete, deleteResponse] = useMutation(deletePentagram_MUTATION)

    const deletePentagram = useCallback(async (
        payload: DeletePentagramPayload,
    ) => {
        if (deleteResponse.loading) throw new PendingError()
        const response = await executeDelete({
            variables: payload,
            update(cache) {
                evictCacheById({
                    cache, 
                    id: payload.id,
                    entity: 'pentagrams', 
                })
            },
        })
        return response
    }, [deleteResponse.loading, executeDelete])

    return { deletePentagram }
}