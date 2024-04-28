import type { GetUserInventoryByIdQuery } from "$lib/graphql/__generated__/graphql"
import { useQuery } from "@apollo/client"
import { useCurrentUser } from "$feature/auth/hooks"
import { NETWORK } from "$lib/constants"
import { getFirstNodeOfCollection } from "$lib/utils/graphql"
import { getUserInventoryId_QUERY } from "../graphql"
import { useCallback } from "react"

export function useInventoryItems(keyword: string) {
    const { currentUser } = useCurrentUser()
    
    const { 
        data: backgroundData, 
        error: backgroundError, 
        fetchMore: backgroundFetchMore 
    } = useQuery<GetUserInventoryByIdQuery>(getUserInventoryId_QUERY, {
        variables: { 
            id: currentUser?.id,
            limit: NETWORK.readLimit,
            isBackground: true,
            keyword: `%${keyword}%`,
            cursor: null,
        }
    })

    const { 
        data: foregroundData, 
        error: foregroundError, 
        fetchMore: foregroundFetchMore 
     } = useQuery<GetUserInventoryByIdQuery>(getUserInventoryId_QUERY, {
        variables: { 
            id: currentUser?.id,
            limit: NETWORK.readLimit,
            isBackground: false,
            keyword: `%${keyword}%`,
            cursor: null,
        }
    })

    const backgroundItems = getFirstNodeOfCollection(backgroundData?.usersCollection)?.decorationsCollection
    const foregroundItems = getFirstNodeOfCollection(foregroundData?.usersCollection)?.decorationsCollection

    const loadMore = useCallback((isBackground: boolean, withCursor?: boolean) => {
        if (isBackground) {
            backgroundFetchMore({
                variables: {
                    isBackground,
                    id: currentUser?.id,
                    cursor: withCursor ? backgroundItems?.pageInfo?.endCursor : null,
                    limit: NETWORK.readLimit,
                    keyword: `%${keyword}%`,
                }
            })
        } else {
            foregroundFetchMore({
                variables: {
                    isBackground,
                    id: currentUser?.id,
                    cursor: withCursor ? foregroundItems?.pageInfo?.endCursor : null,
                    limit: NETWORK.readLimit,
                    keyword: `%${keyword}%`,
                }
            })
        }
    }, [backgroundFetchMore, keyword, currentUser, backgroundItems, foregroundFetchMore, foregroundItems]);

    return { 
        foregroundData,
        foregroundItems,
        foregroundError,
        backgroundData,
        backgroundItems,
        backgroundError,
        loadMore
    }
}