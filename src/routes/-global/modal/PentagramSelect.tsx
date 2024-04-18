import type { GetPentagramsSelectUserInfoByIdQuery } from '$lib/graphql/__generated__/graphql';
import type { CustomError } from '$lib/error/customError';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useCurrentUser } from '$feature/auth/hooks';
import { usePentagramNavigate } from "$feature/navigate/hooks"
import { useDeletePentagram } from '$feature/Pentagram/hooks';
import { pentagramDeleteErrorHandler } from '$lib/error/handler/pentagramErrorHandler';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
import { getPentagramsSelectUserInfoById_QUERY } from '$feature/Pentagram/graphql';
import PentagramMenuModal from '$feature/Pentagram/components/Modal/PentagramMenuModal';
import toast from 'react-hot-toast';

export default function PentagramSelect(props: {
    pentagramId: string;
    handleClickClose: () => void;
}) {
    const { pentagramId, handleClickClose } = props;
    const { data } = useQuery<GetPentagramsSelectUserInfoByIdQuery>(getPentagramsSelectUserInfoById_QUERY, {
        variables: { id: pentagramId }
    });

    const pentagram = getFirstNodeOfCollection(data?.pentagramsCollection);
    const { currentUser } = useCurrentUser()
    const { deletePentagram } = useDeletePentagram()

    const isAuthor = (currentUser?.id === pentagram?.user.id && currentUser?.id !== undefined);

    const { t } = useTranslation();
    const pentagramNavigate = usePentagramNavigate();

    const title = t("portal.modal.title.pentagramSelectMenu");

    const handleClickNavigate = () => {
        if (pentagramId) pentagramNavigate.select(pentagramId)
    }

    const handleClickUpdate = () => {
        if (pentagramId) pentagramNavigate.update(pentagramId);
    };

    const handleDeletePentagram = () => {
        if (!pentagramId) return;
        const response = pentagramDeleteErrorHandler(
            async () => await deletePentagram({ id: pentagramId })
        )

        toast.promise(response, {
            loading: t("pentagram.toast.loading.deletePentagram"),
            success: t("pentagram.toast.success.deletePentagram"),
            error: (err: CustomError) => t(err.i18nKey)
        })

        handleClickClose();
    }

    return (
        <PentagramMenuModal
            title={title}
            handleClickClose={handleClickClose}
            isAuthor={isAuthor}
            handleClickNavigate={handleClickNavigate}
            handleClickUpdate={handleClickUpdate} 
            handleClickDelete={handleDeletePentagram}
        />
    );
}
