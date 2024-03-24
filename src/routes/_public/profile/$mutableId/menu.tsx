/* types */
import type { SearchUsersQuery } from '$lib/graphql/__generated__/graphql';
import type { PropsWithChildren } from 'react';
/* hooks */
import { useQuery } from '@apollo/client';
import { useProfileNavigate } from '$feature/navigate/hooks';
import { useTranslation } from 'react-i18next';
/* query */
import { searchUsers_QUERY } from '$feature/search/graphql';
/* router */
import { createFileRoute } from '@tanstack/react-router';
/* utils */
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
/* components */
import Modal from '$feature/portal/components/Modal';

export const Route = createFileRoute('/_public/profile/$mutableId/menu')({
    component: ProfileSelectMenuModal
})

// TODO - Implement
function ProfileSelectMenuModal() {
    const params = Route.useParams()
    const { data } = useQuery<SearchUsersQuery>(searchUsers_QUERY, {variables: {keyword: params.mutableId }})
    const firstNode = getFirstNodeOfCollection(data?.usersCollection)

    return (
        <ProfileSelectMenuModalComponent>{firstNode?.__typename}</ProfileSelectMenuModalComponent>
    )
}

function ProfileSelectMenuModalComponent(props: PropsWithChildren) {
    const params = Route.useParams()
    const navigate = useProfileNavigate()
    const { t } = useTranslation()

    const title = t("modal.title.profileSelectMenu")
    const handleClickClose = () => {
        navigate.profileSelect(params.mutableId)
    }

    return (
        <Modal title={title} handleClickClose={handleClickClose}>
            {props.children}
            미구현
        </Modal>
    )
}