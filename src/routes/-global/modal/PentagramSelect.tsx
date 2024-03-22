import type { GetPentagramsSelectUserInfoByIdQuery } from '$lib/graphql/__generated__/graphql';
import type { UnprocessedContext } from '$lib/types/components';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { usePentagramNavigate } from "$feature/navigate/hooks"
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
import { getCurrentUserFromObservable } from '$feature/auth/utils';
import { getPentagramsSelectUserInfoById_QUERY } from '$feature/Pentagram/graphql';
import PentagramMenuModal from '$feature/Pentagram/components/PentagramSelectView/Modal/PentagramMenuModal';

export default function PentagramSelect(props: {
    pentagramId: string;
    context: UnprocessedContext;
    handleClickClose: () => void;
}) {
    const { pentagramId, context, handleClickClose } = props;
    const { data } = useQuery<GetPentagramsSelectUserInfoByIdQuery>(getPentagramsSelectUserInfoById_QUERY, {
        variables: { id: pentagramId }
    });

    const pentagram = getFirstNodeOfCollection(data?.pentagramsCollection);
    const currentUser = getCurrentUserFromObservable(context.userObservable)

    const isAuthor = (currentUser?.id === pentagram?.users.id && currentUser?.id !== undefined);

    const { t } = useTranslation();
    const pentagramNavigate = usePentagramNavigate();

    const title = t("modal.title.pentagramSelectMenu");

    const handleClickUpdate = () => {
        if (pentagramId) pentagramNavigate.update(pentagramId);
    };

    return (
        <PentagramMenuModal
            title={title}
            handleClickClose={handleClickClose}
            isAuthor={isAuthor}
            handleClickUpdate={handleClickUpdate} 
        />
    );
}
