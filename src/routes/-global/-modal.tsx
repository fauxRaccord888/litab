import type { UnprocessedContext } from '$lib/types/components';
import type { RootSearch } from 'routes/__root';
import { useNavigate } from '@tanstack/react-router'

import PentagramSelect from './modal/PentagramSelect';
import NodeUpsert from './modal/NodeUpsert';
import NodeInsert from './modal/NodeInsert';
import RevisionSelect from './modal/RevisionSelect';
import NodeSelect from './modal/NodeSelect';
import AccountMenu from './modal/AccountMenu';

export default function ModalController(props: {
    context: UnprocessedContext,
    search: RootSearch
}) {
    const { search, context } = props
    const { nodeUpsertId, insertNode, pentagramMenuId, nodeViewId, revisionViewId, accountMenu } = search

    const navigate = useNavigate()

    const handleClickClose = () => {
        navigate({
            search: () => ({
                nodeUpsertId: undefined,
                insertNode: undefined,
                pentagramMenuId: undefined,
                nodeViewId: undefined,
                revisionViewId: undefined,
            }),
        })
    }

    return (
        <>
            {nodeUpsertId &&
                <NodeUpsert 
                    nodeId={nodeUpsertId}
                    handleClickClose={handleClickClose}
                />
            }
            {insertNode &&
                <NodeInsert
                    handleClickClose={handleClickClose}
                />
            }
            {nodeViewId &&
                <NodeSelect 
                    nodeId={nodeViewId}
                    handleClickClose={handleClickClose}
                />
            }
            {revisionViewId &&
                <RevisionSelect 
                    revisionId={revisionViewId}
                    handleClickClose={handleClickClose}
                />
            }
            {pentagramMenuId &&
                <PentagramSelect
                    context={context}
                    pentagramId={pentagramMenuId}
                    handleClickClose={handleClickClose}
                />
            }
        </>
    )
}