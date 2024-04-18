import { graphql } from "$lib/graphql/__generated__"

export const updateProfile_MUTATION = graphql(/* GraphQL */ `
    mutation updateProfile(
        $nickname: String,
        $mutableId: String,
        $description: String,
    ) {
        updateUsersCollection(
            set: {
                nickname: $nickname,
                mutableId: $mutableId,
                description: $description,
            }
        ) {
            records {
                id,
                nickname,
                mutableId,
                description,
            }
        }
    }
`)