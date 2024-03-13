import type { Route } from 'routes/__root';
import { useNavigate } from '@tanstack/react-router'

import { NodeViewnteractionModal } from './modal/NodeViewnteractionModal';
import { NodeUpsertModal } from './modal/NodeUpsertModal';
import { PentagramAddNodeModal } from './modal/PentagramAddNodeModal';
import { ChangeLogByRevisionModal } from './modal/ChangeLogByRevisionModal';
import { ChangeLogByNodeModal } from './modal/ChangeLogByNodeModal';

export function ModalController(props: {
    route: typeof Route
}) {
    const { route } = props
    const { nodeUpsertId, insertNode, pentagramInteractionId, nodeViewId, revisionViewId } = route.useSearch()
    const { currentUser } = route.useRouteContext()
    const navigate = useNavigate({ from: route.fullPath })

    const handleClickClose = () => {
        navigate({
            search: () => ({
                nodeUpsertId: null,
                insertNode: null,
                pentagramInteractionId: null,
                nodeViewId: null,
                revisionViewId: null,
            }),
        })
    }

    return (
        <>
            {nodeUpsertId &&
                <NodeUpsertModal 
                    nodeId={nodeUpsertId}
                    handleClickClose={handleClickClose}
                />
            }
            {insertNode &&
                <PentagramAddNodeModal
                    handleClickClose={handleClickClose}
                />
            }
            {nodeViewId &&
                <ChangeLogByNodeModal 
                    nodeId={nodeViewId}
                    handleClickClose={handleClickClose}
                />
            }
            {revisionViewId &&
                <ChangeLogByRevisionModal 
                    revisionId={revisionViewId}
                    handleClickClose={handleClickClose}
                />
            }
            {pentagramInteractionId &&
                <NodeViewnteractionModal
                    currentUser={currentUser}
                    pentagramId={pentagramInteractionId}
                    handleClickClose={handleClickClose}
                />
            }
        </>
    )
}