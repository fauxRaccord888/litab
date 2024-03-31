import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment AuthInfo on users {
        ...MiniProfileInfo,
        description,
        nickname,
        ...ProfileFollowInfo,
    }
`)