import type { Route } from 'routes/__root';
import { useNavigate } from '@tanstack/react-router'
import { getProcessedContext } from '$feature/navigate/utils'

import PentagramSelectDetailModal from './modal/PentagramSelectDetailModal';
import NodeUpsertDetailModal from './modal/NodeUpsertDetailModal';
import NodeInsertDetailModal from './modal/NodeInsertDetailModal';
import RevisionSelectDetailModal from './modal/RevisionSelectDetailModal';
import NodeSelectDetailModal from './modal/NodeSelectDetailModal';

export default function ModalController(props: {
    route: typeof Route
}) {
    const { route } = props
    const { nodeUpsertId, insertNode, pentagramInteractionId, nodeViewId, revisionViewId } = route.useSearch()
    const unprocessedContext = route.useRouteContext()
    const context = getProcessedContext(unprocessedContext)
    const navigate = useNavigate({ from: route.fullPath })

    const handleClickClose = () => {
        navigate({
            search: () => ({
                nodeUpsertId: undefined,
                insertNode: undefined,
                pentagramInteractionId: undefined,
                nodeViewId: undefined,
                revisionViewId: undefined,
            }),
        })
    }

    return (
        <>
            {nodeUpsertId &&
                <NodeUpsertDetailModal 
                    nodeId={nodeUpsertId}
                    handleClickClose={handleClickClose}
                />
            }
            {insertNode &&
                <NodeInsertDetailModal
                    handleClickClose={handleClickClose}
                />
            }
            {nodeViewId &&
                <NodeSelectDetailModal 
                    nodeId={nodeViewId}
                    handleClickClose={handleClickClose}
                />
            }
            {revisionViewId &&
                <RevisionSelectDetailModal 
                    revisionId={revisionViewId}
                    handleClickClose={handleClickClose}
                />
            }
            {pentagramInteractionId &&
                <PentagramSelectDetailModal
                    context={context}
                    pentagramId={pentagramInteractionId}
                    handleClickClose={handleClickClose}
                />
            }
        </>
    )
}