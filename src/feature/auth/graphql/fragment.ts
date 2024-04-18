import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment AuthInfo on Users {
        ...MiniProfileInfo,
        description,
        nickname,
        ...ProfileFollowInfo,
    }
`)