import type { GetPentagramSelectInfoByIdQuery } from '$lib/graphql/__generated__/graphql';
import type { DBAuthUser } from '$feature/auth/type';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { usePentagramNavigate } from '$feature/Pentagram/hooks';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
import { getPentagramSelectInfoById_QUERY } from '$feature/Pentagram/graphql';
import PentagramInteractionModal from '$feature/Pentagram/components/PentagramSelectView/Modal/PentagramInteractionModal';

export default function NodeViewnteractionModal(props: {
    pentagramId: string;
    currentUser: DBAuthUser | null;
    handleClickClose: () => void;
}) {
    const { pentagramId, currentUser, handleClickClose } = props;
    const { data } = useQuery<GetPentagramSelectInfoByIdQuery>(getPentagramSelectInfoById_QUERY, {
        variables: { id: pentagramId }
    });

    const pentagram = getFirstNodeOfCollection(data?.pentagramsCollection);

    const isAuthor = (currentUser?.id === pentagram?.users.id && currentUser?.id !== undefined);

    const { t } = useTranslation();
    const pentagramNavigate = usePentagramNavigate();

    const title = t("modal.title.interaction");

    const handleClickUpdate = () => {
        if (pentagramId) pentagramNavigate.update(pentagramId);
    };

    return (
        <PentagramInteractionModal
            title={title}
            handleClickClose={handleClickClose}
            isAuthor={isAuthor}
            handleClickUpdate={handleClickUpdate} />
    );
}
