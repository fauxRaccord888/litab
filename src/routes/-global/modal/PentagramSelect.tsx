import type { GetPentagramsSelectUserInfoByIdQuery } from '$lib/graphql/__generated__/graphql';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useCurrentUser } from '$feature/auth/hooks';
import { usePentagramNavigate } from "$feature/navigate/hooks"
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
import { getPentagramsSelectUserInfoById_QUERY } from '$feature/Pentagram/graphql';
import PentagramMenuModal from '$feature/Pentagram/components/Modal/PentagramMenuModal';

export default function PentagramSelect(props: {
    pentagramId: string;
    handleClickClose: () => void;
}) {
    const { pentagramId, handleClickClose } = props;
    const { data } = useQuery<GetPentagramsSelectUserInfoByIdQuery>(getPentagramsSelectUserInfoById_QUERY, {
        variables: { id: pentagramId }
    });

    const pentagram = getFirstNodeOfCollection(data?.pentagramsCollection);
    const currentUser = useCurrentUser()

    const isAuthor = (currentUser?.id === pentagram?.users.id && currentUser?.id !== undefined);

    const { t } = useTranslation();
    const pentagramNavigate = usePentagramNavigate();

    const title = t("modal.title.pentagramSelectMenu");

    const handleClickNavigate = () => {
        if (pentagramId) pentagramNavigate.select(pentagramId)
    }

    const handleClickUpdate = () => {
        if (pentagramId) pentagramNavigate.update(pentagramId);
    };

    return (
        <PentagramMenuModal
            title={title}
            handleClickClose={handleClickClose}
            isAuthor={isAuthor}
            handleClickNavigate={handleClickNavigate}
            handleClickUpdate={handleClickUpdate} 
        />
    );
}
