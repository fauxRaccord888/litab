import { graphql } from "$lib/graphql/__generated__"

graphql(/* GraphQL */ `
    fragment FeedInfo on pentagram_revisions {
        id
        created_at
        users {
            ...MiniProfileInfo
        }
        pentagrams {
            ...PentagramsSelectInfo
        }
    }
`)