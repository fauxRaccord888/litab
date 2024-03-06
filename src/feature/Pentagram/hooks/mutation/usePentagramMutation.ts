import type { AppRootState } from "$lib/stores/store";
import type { InsertPentagramMutation, UpdatePentagramMutation } from "$lib/graphql/__generated__/graphql";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import { getPentagramSelectInfoById_QUERY, insertPenagram_MUTATION, updatePentagram_MUTATION } from '../../graphql';

export function usePentagramMutation() {
    const [insertPentagramMutation] = useMutation<InsertPentagramMutation>(insertPenagram_MUTATION)
    const [updatePentagramMutation] = useMutation<UpdatePentagramMutation>(updatePentagram_MUTATION)

    const { description } = useSelector((state: AppRootState) => state.pentagramUpsert)

    const insertPentagram = useCallback(async () => {
        const pentagramInsertResponse = await insertPentagramMutation({
            variables: {
                input: {
                    description: description
                }
            }
        })
        return { pentagramInsertResponse }
    }, [description, insertPentagramMutation])

    const updatePentagram = useCallback(async (pentagramId: string) => {
        const pentagramUpdateResponse = await updatePentagramMutation({
            variables: {
                set: {
                    description: description
                },
                filter: { id: { eq: pentagramId } },
            },
            refetchQueries: [
                getPentagramSelectInfoById_QUERY,
            ]    
        })

        return { pentagramUpdateResponse }
    }, [description, updatePentagramMutation])


    return { insertPentagram, updatePentagram }
}