import type { GetPentagramByIdQuery } from '$lib/graphql/__generated__/graphql';
import { Outlet, createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@apollo/client';
import { getPentagramById_QUERY } from '$feature/Pentagram/graphql';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
import PentagramUpdateView from '$feature/Pentagram/components/PentagramUpdateView';

export const Route = createFileRoute('/pentagram/$pentagramId/update')({
    component: PentagramUpdate
})

function PentagramUpdate() {
    const params = Route.useParams()

    const { data } = useQuery<GetPentagramByIdQuery>(getPentagramById_QUERY, {
        variables: { id: params.pentagramId }
    })

    const firstNode = getFirstNodeOfCollection(data?.pentagramsCollection)

    return (
        <>
            {firstNode && 
                <>
                    <PentagramUpdateView item={firstNode} />
                    <Outlet />
                </>
            }
        </>
    )
}