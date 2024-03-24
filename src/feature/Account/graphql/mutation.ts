import { graphql } from "$lib/graphql/__generated__"

export const updateProfile_MUTATION = graphql(/* GraphQL */ `
    mutation updateProfile(
        $nickname: String,
        $mutableId: String,
        $description: String,
    ) {
        updateusersCollection(
            set: {
                nickname: $nickname,
                mutable_id: $mutableId,
                description: $description,
            }
        ) {
            records {
                id,
                nickname,
                mutable_id,
                description,
            }
        }
    }
`)