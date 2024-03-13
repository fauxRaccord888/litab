import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment AuthInfo on users {
        id,
        mutable_id,
        nickname,
        followingsCollection {
            ...FollowingsMiniProfile
        },
    }
`)