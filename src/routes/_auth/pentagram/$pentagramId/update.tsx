import type { CustomError } from '$lib/error';
import type { OeuvreEventHandler } from '$feature/Oeuvre/types';
import type { GetPentagramUpdateInfoByIdQuery } from '$lib/graphql/__generated__/graphql';
import type { MouseEvent, TouchEvent } from 'react';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useThrottle, useThrottledErrorToast } from '$lib/hooks';
import { useOeuvreNavigate, usePentagramNavigate, useUtilNavigate } from "$feature/navigate/hooks"
import { useCSSVariables } from '$lib/hooks/useCSSVariables';
import { 
    useInitialize, 
    useMutationHandler,
    useMainPentagonEventHandler, 
    useMerge, 
    useMergedNode, 
    usePendingChangeListEventHandler, 
    useQuadtreeRef, 
    useSelectedPosition, 
    useUnmergedChangeInfo, 
} from '$feature/Pentagram/hooks';

import toast from 'react-hot-toast';
import { t as translate } from 'i18next';
import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import { pentagramMutationErrorHandler } from '$feature/Pentagram/errorHandler';
import { getPentagramUpdateInfoById_QUERY } from '$feature/Pentagram/graphql';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';

import PentagramUpdateView from '$feature/Pentagram/components/PentagramUpsertView';
import LoadStoredChangeDialog from '$feature/Pentagram/components/PentagramUpsertView/Modal/LoadStoredChangeDialog';

export const Route = createFileRoute('/_auth/pentagram/$pentagramId/update')({
    beforeLoad: () => {
        return {
            getTitle: () => translate('pentagram.title.update')
        }
    },
    // COMMENT 검증 및 redirect 로직은 tanstack router로 통일
    // 로더에서 fetch는 최소화(이중 fetch되는 경우에 한해서만 lodaer에서 fetch => refetch가 까다로워짐 등)
    loader: async ({ context, params }) => {
        const currentUser = context.user
        const queryOption = { query: getPentagramUpdateInfoById_QUERY,
            variables: { id: params.pentagramId }
        }
        const { data } = await context.apolloClient.query<GetPentagramUpdateInfoByIdQuery>(queryOption)
        const pentagram = getFirstNodeOfCollection(data?.pentagramsCollection)

        if (!pentagram) {
            throw redirect({
                to: '/error',
            })
        }

        if (pentagram?.users.id !== currentUser?.id) {
            throw redirect({
                to: '/error',
            })
        }
        return { pentagram }
    },
    component: PentagramUpdate
})

function PentagramUpdate() {
    const { pentagramId }  = Route.useParams()
    const { pentagram } = Route.useLoaderData()
    
    const { t } = useTranslation()
    const throttle = useThrottle();
    const errorToast = useThrottledErrorToast()
    const STYLE = useCSSVariables()

    const pentagramNavigate = usePentagramNavigate()
    const oeuvreNavigate = useOeuvreNavigate()
    const utilNavigate = useUtilNavigate()

    useInitialize(pentagram)
    useMerge()
    
    const mergedNodes = useMergedNode()
    const unmergedNodeInfos = useUnmergedChangeInfo()
    const { angle, distance } = useSelectedPosition()

    const parentRef = useRef<HTMLDivElement | null>(null)
    const quadtreeRef = useQuadtreeRef()

    const { 
        handleSelectNode, 
        handleSetNewPosition, 
        handleDragAndTouchMove 
    } = useMainPentagonEventHandler(parentRef, quadtreeRef, STYLE)

    const handleSetNewPositionWithErrorToast = (e: MouseEvent<HTMLDivElement>) => {
        const throttled = () => throttle(
            () => handleSetNewPosition(e)
        )
        errorToast(async () => await throttled())
    }

    const handleDragAndTouchMoveWithErrorToast = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
        const throttled = () => throttle(
            () => handleDragAndTouchMove(e)
        )
        errorToast(async () => await throttled())
    }

    const { handleRevertChange } = usePendingChangeListEventHandler(quadtreeRef)
    const handleClickRevert = (id: string) => {
        errorToast(() => {
            handleRevertChange(id)
            toast.success(t("pentagram.toast.success.revertChange"))
        })
    }

    const { handleUpdatePentagram } = useMutationHandler()
    

    const handleClickSubmit = () => {
        const response = pentagramMutationErrorHandler(
            async () => {
                await handleUpdatePentagram(pentagramId)
            }
        )

        toast.promise(response, {
            loading: t("pentagram.toast.loading.updatePentagram"),
            success: t("pentagram.toast.success.updatePentagram"),
            error: (error: CustomError) => t(error.i18nKey)
        })
        response.then(() => utilNavigate.feed())
    }

    const oeuvreEventHandler: OeuvreEventHandler = {
        selectOeuvre: (oeuvreId: string) => oeuvreNavigate.select(oeuvreId),
    }

    return (
        <>
            <LoadStoredChangeDialog pentagramId={pentagramId}/>
            <PentagramUpdateView
                ref={parentRef}

                title={t("pentagram.title.update")}
                handleSubmit={handleClickSubmit}

                mergedNodes={mergedNodes}
                unmergedNodeInfos={unmergedNodeInfos}

                parentRef={parentRef}

                angle={angle}
                distance={distance}
               
                handleClickNode={handleSelectNode}
                handleClickSelectedNode={(nodeId: string) => pentagramNavigate.nodeUpsertModal(nodeId)}
                handleClickSelectedPosition={() => pentagramNavigate.nodeInsertModal()}
                handleSetNewPosition={handleSetNewPositionWithErrorToast}
                handleDragAndTouchMove={handleDragAndTouchMoveWithErrorToast}

                handleClickRevert={handleClickRevert}

                eventHandler={oeuvreEventHandler}
            />
            <Outlet />
        </>
    )
}