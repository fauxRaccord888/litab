import type { RootSearch } from 'routes/__root';
import { useNavigate } from '@tanstack/react-router'

import PentagramSelect from './modal/PentagramSelect';
import NodeMenu from './modal/NodeMenu';
import NodeInsert from './modal/NodeInsert';
import RevisionSelect from './modal/RevisionSelect';
import NodeSelect from './modal/NodeSelect';
import AccountMenu from './modal/AccountMenu';

export default function ModalController(props: {
    search: RootSearch
}) {
    const { search } = props
    const { nodeUpsertId, insertNode, pentagramMenuId, nodeViewId, revisionViewId, accountMenu } = search

    const navigate = useNavigate()

    const handleClickClose = () => {
        navigate({
            params: {},
            search: () => ({
                nodeUpsertId: undefined,
                insertNode: undefined,
                pentagramMenuId: undefined,
                nodeViewId: undefined,
                revisionViewId: undefined,
                accountMenu: undefined,
            }),
        })
    }

    return (
        <>
            {nodeUpsertId &&
                <NodeMenu 
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
                    pentagramId={pentagramMenuId}
                    handleClickClose={handleClickClose}
                />
            }
            {accountMenu &&
                <AccountMenu 
                    handleClickClose={handleClickClose}
                />
            }
        </>
    )
}