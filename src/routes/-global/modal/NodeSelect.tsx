import type { GetPentagramNodesInfoByIdQuery } from '$lib/graphql/__generated__/graphql';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
import { getUnionedChanges } from '$feature/Pentagram/utils';
import { getPentagramNodesInfoById_QUERY } from '$feature/Pentagram/graphql';
import ChangeLogModal from '$feature/Pentagram/components/Modal/ChangeLogModal';

export default function NodeSelect(props: {
    nodeId: string;
    handleClickClose: () => void;
}) {
    const { nodeId, handleClickClose } = props;
    const { data } = useQuery<GetPentagramNodesInfoByIdQuery>(getPentagramNodesInfoById_QUERY, {
        variables: { id: nodeId }
    });

    const node = getFirstNodeOfCollection(data?.pentagramNodesCollection);

    const changes = getUnionedChanges(node);

    const { t } = useTranslation();
    const title = t("portal.modal.title.details");

    return (
        <ChangeLogModal
            changes={changes}
            title={title}
            handleClickClose={handleClickClose} 
        />
    );
}
