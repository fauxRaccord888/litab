import type { RootSearch } from 'routes/__root';
import type { AppRootState } from '$lib/stores/store';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '$feature/portal/store/modalSlice';

import PentagramSelect from './modal/PentagramSelect';
import NodeMenu from './modal/NodeMenu';
import NodeInsert from './modal/NodeInsert';
import RevisionSelect from './modal/RevisionSelect';
import NodeSelect from './modal/NodeSelect';
import AccountMenu from './modal/AccountMenu';
import Register from './modal/Register';
import SignIn from './modal/SignIn';
import MetaData from './modal/MetaData';

export default function ModalController(props: {
    search: RootSearch
}) {
    const { search } = props
    const { redirect } = search
    const { 
        nodeUpsertId, 
        insertNode, 
        pentagramMenuId, 
        nodeViewId, 
        revisionViewId, 
        accountMenu, 
        register, 
        signIn,
        metaData
    } = useSelector((state: AppRootState) => state.modal)
    const dispatch = useDispatch()

    const handleClickClose = () => {
        dispatch(closeModal())
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
            {register &&
                <Register
                    redirect={redirect}
                    handleClickClose={handleClickClose}
                />
            }
            {signIn &&
                <SignIn 
                    redirect={redirect}
                    handleClickClose={handleClickClose}
                />
            }
            {metaData &&
                <MetaData
                    handleClickClose={handleClickClose}
                />
            }
        </>
    )
}