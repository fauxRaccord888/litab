import type { UpdateProfileMutation } from "$lib/graphql/__generated__/graphql";
import type { UpdateAuthPayload, UpdateProfilePayload, UploadCoverPayload } from "../../types";
import { useCallback } from "react";
import { useCurrentUser } from "$feature/auth/hooks/useCurrentUser";
import { useApolloClient, useMutation } from "@apollo/client";
import { useUpdateAuthMutation, useUploadCoverMutation } from "..";
import { updateProfile_MUTATION } from "../../graphql";
import { evictCacheById } from "$lib/utils";
import { PendingError } from "$lib/error/customError";

export function useUpdateProfileHandler() {
    const apolloClient = useApolloClient()
    const { currentUser } = useCurrentUser()
    const [profileMutation, profileResponse] = useMutation<UpdateProfileMutation>(updateProfile_MUTATION)
    const [authMutation, authResponse] = useUpdateAuthMutation() 
    const [uploadCoverMutation, coverResponse] = useUploadCoverMutation()
    const isPending = (
        profileResponse.loading ||
        authResponse.loading ||
        coverResponse.loading
    )

    const profileUpdateHandler = useCallback(async (
        payload: UpdateProfilePayload,
    ) => {
        if (isPending) throw new PendingError()
        // COMMENT apollo가 던지면 바깥 스코프에서 핸들링
        const response = await profileMutation({
            variables: payload,
            update(cache) {
                evictCacheById({
                    cache, 
                    entity: 'users', 
                    id: currentUser?.id
                })
            },
        })
        return response
    }, [isPending, profileMutation, currentUser])

    const authUpdateHandler = useCallback(async (
        payload: UpdateAuthPayload,
    ) => {
        if (isPending) throw new PendingError()

        const response = await authMutation(payload)
        if (response.error) {
            throw response.error
        }
        return response
    }, [authMutation, isPending])

    const uploadCoverHandler = useCallback(async (
        payload: UploadCoverPayload,
    ) => {
        if (isPending) throw new PendingError()

        const response = await uploadCoverMutation(payload)
        if (response.error) {
            throw response.error
        }
        if (response.data) {
            apolloClient.refetchQueries({
                updateCache(cache) {
                    evictCacheById({
                        cache, 
                        entity: 'users', 
                        id: currentUser?.id
                    })
                },
            })
        }
        return response
    }, [apolloClient, currentUser, isPending, uploadCoverMutation])

    return { 
        profile: [profileUpdateHandler, profileResponse] as [typeof profileUpdateHandler, typeof profileResponse], 
        auth: [authUpdateHandler, authResponse] as [typeof authUpdateHandler, typeof authResponse],
        cover: [uploadCoverHandler, coverResponse] as [typeof uploadCoverHandler, typeof coverResponse]
    }
}