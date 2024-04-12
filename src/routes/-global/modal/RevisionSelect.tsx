import type { GetPentagramRevisionsInfoByIdQuery } from '$lib/graphql/__generated__/graphql';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
import { getUnionedChanges } from '$feature/Pentagram/utils';
import { getPentagramRevisionsInfoById_QUERY } from '$feature/Pentagram/graphql';
import ChangeLogModal from '$feature/Pentagram/components/Modal/ChangeLogModal';

export default function RevisionSelect(props: {
    revisionId: string;
    handleClickClose: () => void;
}) {
    const { revisionId, handleClickClose } = props;
    const { data } = useQuery<GetPentagramRevisionsInfoByIdQuery>(getPentagramRevisionsInfoById_QUERY, {
        variables: { id: revisionId }
    });

    const revision = getFirstNodeOfCollection(data?.pentagram_revisionsCollection);

    const changes = getUnionedChanges(revision);

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
