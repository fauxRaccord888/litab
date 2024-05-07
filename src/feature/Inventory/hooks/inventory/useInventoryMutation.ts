import type { DeletePayload, RenamePayload } from "../../types";
import type { CustomError } from "$lib/error/customError";
import type { ApolloCache, NormalizedCache } from "@apollo/client";
import type { DecorationType } from "$lib/graphql/__generated__/graphql";
import { useCallback } from "react";
import { useMutation } from "@apollo/client";
import { useCurrentUser } from "$feature/auth/hooks";
import { useTranslation } from "react-i18next";
import { evictCacheById } from "$lib/utils";
import { decorationErrorHandler } from "$lib/error/handler";
import { AccessNotGrantedError } from "$lib/error/customError";
import { SeedFactory } from "../../function";
import { deleteDecoration_MUTATION, insertDecoration_MUTATION, renameDecoration_MUTATION } from "../../graphql";
import toast from "react-hot-toast";

export function useInventoryMutation() {
    const { currentUser } = useCurrentUser();
    const { t } = useTranslation()

    const [createMutation] = useMutation(insertDecoration_MUTATION)
    const [deleteMutation] = useMutation(deleteDecoration_MUTATION)
    const [renameMutation] = useMutation(renameDecoration_MUTATION)

    const evictCache = useCallback((cache: ApolloCache<NormalizedCache>) => {
        evictCacheById({
            cache, 
            entity: 'Users', 
            id: currentUser?.id
        })
    }, [currentUser?.id])

    const handleCreate = useCallback(async (category: DecorationType) => {
        const seed = SeedFactory.createSeed()
        const isBackground = SeedFactory.isBackground(category)

        if (!currentUser) throw new AccessNotGrantedError()
        const response = decorationErrorHandler(
            () => createMutation({
                variables: {
                    seed,
                    isBackground,
                    type: category,
                    name: t(`inventory.${category}.value.newRecord`),
                    userId: currentUser?.id,
                },
                update(cache) {
                    evictCache(cache)
                },
            })
        );

        toast.promise(response, {
            success: t(`inventory.${category}.toast.success.create`),
            loading: t(`inventory.${category}.toast.loading.create`),
            error: (e: CustomError) => t(e.i18nKey)
        });

        return response
    }, [createMutation, currentUser, evictCache, t]);

    const handleDelete = useCallback(async (payload: DeletePayload) => {
        const { id, category } = payload
        const response = decorationErrorHandler(
            () => deleteMutation({
                variables: { id },
                update(cache) {
                    evictCache(cache)
                },
            })
        );

        toast.promise(response, {
            success: t(`inventory.${category}.toast.success.delete`),
            loading: t(`inventory.${category}.toast.loading.delete`),
            error: (e: CustomError) => t(e.i18nKey)
        });

        return response
    }, [deleteMutation, evictCache, t]);

    const handleRename = useCallback(async (payload: RenamePayload) => {
        const { id, name, category } = payload
        const response = decorationErrorHandler(
            () => renameMutation({
                variables: { id, name },
                update(cache) {
                    evictCache(cache)
                },    
            })
        );

        toast.promise(response, {
            success: t(`inventory.${category}.toast.success.rename`),
            loading: t(`inventory.${category}.toast.loading.rename`),
            error: (e: CustomError) => t(e.i18nKey)
        });

        return response
    }, [evictCache, renameMutation, t]);

    const eventHandler = {
        handleCreate,
        handleRename,
        handleDelete
    };
    
    return eventHandler;
}
