import type { PentagramDecorationPayload } from "$feature/Pentagram/types";
import type { ApolloCache, NormalizedCache } from "@apollo/client";
import type { CustomError } from "$lib/error/customError";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/client";
import { useCurrentUser } from "$feature/auth/hooks";
import toast from "react-hot-toast";
import { decorationErrorHandler } from "$lib/error/handler";
import { evictCacheById } from "$lib/utils";
import { AccessNotGrantedError, CustomUnknownError } from "$lib/error/customError";
import { insertPentagramDecoration_MUTATION, removePentagramDecoration_MUTATION } from "$feature/Pentagram/graphql";

export function usePentagramDecorationMutation() {
    const [addDecoration] = useMutation(insertPentagramDecoration_MUTATION)
    const [removeDecoration] = useMutation(removePentagramDecoration_MUTATION)
    const { currentUser } = useCurrentUser()
    const { t } = useTranslation()

    const evictCache = useCallback((cache: ApolloCache<NormalizedCache>, pentagramId: string) => {
        evictCacheById({
            cache, 
            entity: 'Pentagrams', 
            id: pentagramId
        })
        evictCacheById({
            cache, 
            entity: 'Users', 
            id: currentUser?.id
        })
    }, [currentUser?.id])

    const handleAddDecoration = useCallback(async (payload: PentagramDecorationPayload) => {
        const { pentagramId, decorationId } = payload
        const response = decorationErrorHandler(
            () => {
                if (!currentUser) throw new AccessNotGrantedError()
                if (!pentagramId) throw new CustomUnknownError()
                return addDecoration({
                    variables: {
                        pentagramId,
                        decorationId
                    },
                    update(cache) {
                        evictCache(cache, pentagramId)
                    }
                })
            }
        );

        toast.promise(response, {
            success: t(`pentagram.decoration.toast.success.create`),
            loading: t(`pentagram.decoration.toast.loading.create`),
            error: (e: CustomError) => t(e.i18nKey)
        });

        return response
    }, [addDecoration, currentUser, evictCache, t]);

    const handleRemoveDecoration = useCallback(async (payload: PentagramDecorationPayload) => {
        const { pentagramId, decorationId } = payload
        const response = decorationErrorHandler(
            () => {
                if (!currentUser) throw new AccessNotGrantedError()
                if (!pentagramId) throw new CustomUnknownError()
                return removeDecoration({
                    variables: {
                        pentagramId,
                        decorationId
                    },
                    update(cache) {
                        evictCache(cache, pentagramId)
                    }
                })
            }
        );

        toast.promise(response, {
            success: t(`pentagram.decoration.toast.success.remove`),
            loading: t(`pentagram.decoration.toast.loading.remove`),
            error: (e: CustomError) => t(e.i18nKey)
        });

        return response
    }, [currentUser, evictCache, removeDecoration, t]);


    return {
        handleAddDecoration,
        handleRemoveDecoration
    }
}