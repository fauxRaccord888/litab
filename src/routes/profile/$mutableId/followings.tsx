/* types */
import type { PropsWithStatus } from '$lib/types/components';
import type { GetProfileByMutableIdQuery } from '$lib/graphql/__generated__/graphql';
import type { MiniProfileIteratorProps } from "$feature/Profile/MiniProfileIterator"
/* hooks */
import { useNavigate } from "@tanstack/react-router"
import { useTranslation } from 'react-i18next';
/* query */
import { getProfileByMutableId_QUERY } from '$feature/Profile/graphql';
/* router */
import { createFileRoute } from '@tanstack/react-router';
/* components */
import ModalContainer from '$feature/Modal/components/ModalContainer';
import MiniProfileIterator from '$feature/Profile/MiniProfileIterator';

export const Route = createFileRoute('/profile/$mutableId/followings')({
    loader: async ({ context, params }) => {
        const queryOption = { query: getProfileByMutableId_QUERY, variables: { mutableId: params.mutableId } }
        const { data } = await context.apolloClient.query<GetProfileByMutableIdQuery>(queryOption)

        const firstNode = data.usersCollection?.edges[0]?.node
        if (firstNode) return firstNode

        else throw new Error('profile not found')
    },
    errorComponent: ({ error }) => <FollowingsModalComponent status="error" error={error}/>,
    pendingComponent: () => <FollowingsModalComponent status="pending" />,
    component: FollowersModal
})

function FollowersModal() {
    const data  = Route.useLoaderData()
    
    const items = data.followings
    const action = {
        handleFollow: () => {},
        handleShowProfile: () => {}
    }

    if (!items) throw new Error()
    return (
        <FollowingsModalComponent 
            status="success"
            items={items}
            action={action}
        />
    )
}

function FollowingsModalComponent(props: PropsWithStatus<MiniProfileIteratorProps>) {
    const params = Route.useParams()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const title = t("modal.title.followings")
    const handleClickClose = () => {
        navigate({to: "/profile/$mutableId", params: params})
    }

    return (
        <ModalContainer title={title} handleClickClose={handleClickClose}>
            <MiniProfileIterator {...props}/>
        </ModalContainer>
    )
}