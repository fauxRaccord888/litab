/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation updateUser(\n        $id: UUID!,\n        $nickname: String,\n        $mutable_id: String,\n        $preference: [Int],\n        $description: String,\n    ) {\n        updateusersCollection(\n            filter: {id: {eq: $id}}\n            set: {\n                approved: true,\n                nickname: $nickname,\n                mutable_id: $mutable_id,\n                preference: $preference,\n                description: $description,\n            }\n        ) {\n            records {\n                id,\n                approved,\n                nickname,\n                mutable_id,\n                preference,\n                description,\n            }\n        }\n    }\n": types.UpdateUserDocument,
    "\n    fragment OeuvresInfo on oeuvresConnection {\n        edges {\n            node {\n                id\n                title\n                description\n                release_date\n                oeuvres_artistsCollection {\n                    ...ArtistsInfo\n                },\n                oeuvres_genresCollection {\n                    ...GenresInfo\n                }\n            }\n        }\n    }\n": types.OeuvresInfoFragmentDoc,
    "\n    fragment ArtistsInfo on oeuvres_artistsConnection {\n        edges {\n            node {\n                artists {\n                    id\n                    name\n                    birthdate\n                    bio\n                }\n            }\n        }\n    }\n": types.ArtistsInfoFragmentDoc,
    "\n    fragment GenresInfo on oeuvres_genresConnection {\n        edges {\n            node {\n                genres {\n                    id\n                    name\n                }\n            }\n        }\n    }\n": types.GenresInfoFragmentDoc,
    "\n    query searchOeuvres($word: String!) {\n        oeuvresCollection(\n            filter: { title: { ilike: $word } }\n        ) {\n            ...OeuvresInfo\n        }\n    }\n": types.SearchOeuvresDocument,
    "\n    fragment PentagramsInfo on pentagramsConnection {\n        edges {\n            node {\n                id\n                title\n                description\n                users {\n                    id\n                    mutable_id\n                }\n            }\n        }\n    }\n": types.PentagramsInfoFragmentDoc,
    "\n    query searchPentagrams($word: String!) {\n        pentagramsCollection(\n            filter: { title: { ilike: $word } }\n        ) {\n            ...PentagramsInfo\n        }\n    }\n": types.SearchPentagramsDocument,
    "\n    query getPentagramById($id: UUID!) {\n        pentagramsCollection(\n            filter: { id: { eq: $id } }\n        ) {\n            ...PentagramsInfo\n        }\n    }\n": types.GetPentagramByIdDocument,
    "\n    fragment MiniProfile on users {\n        mutable_id,\n        nickname,\n        id\n    }\n": types.MiniProfileFragmentDoc,
    "\n    fragment FollowingsMiniProfile on followingsConnection {\n        edges {\n            node {\n                following_id {\n                    ...MiniProfile\n                }\n            }\n        }\n    }\n": types.FollowingsMiniProfileFragmentDoc,
    "\n    fragment FollowersMiniProfile on followingsConnection {\n        edges {\n            node {\n                follower_id {\n                    ...MiniProfile\n                }\n            }\n        }\n    }\n": types.FollowersMiniProfileFragmentDoc,
    "\n    fragment PostsMiniData on postsConnection {\n        edges {\n            node {\n                id\n                title\n            }\n        }\n    }\n": types.PostsMiniDataFragmentDoc,
    "\n    fragment ProfileData on users {\n        ...MiniProfile,\n        description,\n        nickname,\n        preference,\n        followersCollection {\n            ...FollowersMiniProfile\n        },\n        followingsCollection {\n            ...FollowingsMiniProfile\n        },\n        postsCollection {\n            ...PostsMiniData\n        }\n    }\n": types.ProfileDataFragmentDoc,
    "\n    mutation insertFollowings($followerId:UUID!, $followingId:UUID!) {\n        insertIntofollowingsCollection(\n            objects: {\n                follower_id: $followerId,\n                following_id: $followingId\n            }\n        ) {\n            records{\n                follower_id { id },\n                follower_id { id }\n            }\n        }\n    }\n": types.InsertFollowingsDocument,
    "\n    mutation deleteFollowings($followerId:UUID!, $followingId:UUID!) {\n        deleteFromfollowingsCollection(\n            filter : {\n                following_id: {eq: $followingId },\n                follower_id: {eq: $followerId}\n            }\n        ) {\n            records {\n                follower_id { id },\n                follower_id { id }\n            }\n        }\n    }\n": types.DeleteFollowingsDocument,
    "\n    query GetProfileByMutableId($mutableId: String!) {\n        usersCollection(filter: { mutable_id: {eq: $mutableId } }) {\n            edges {\n                node {\n                    ...ProfileData\n                }\n            }\n        }\n    }\n": types.GetProfileByMutableIdDocument,
    "\n    query GetUserById($id: UUID!) {\n        usersCollection(filter: { id: {eq: $id } }) {\n            edges {\n                node {\n                    id,\n                    mutable_id,\n                    nickname,\n                    preference,\n                    followingsCollection {\n                        ...FollowingsMiniProfile\n                    },\n                }\n            }\n        }\n    }\n": types.GetUserByIdDocument,
    "\n    mutation registerUser($id: UUID!) {\n        insertIntousersCollection(objects: [\n            {id: $id},\n        ]) {\n            records {\n                id\n                mutable_id\n            }\n        }\n    }\n": types.RegisterUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation updateUser(\n        $id: UUID!,\n        $nickname: String,\n        $mutable_id: String,\n        $preference: [Int],\n        $description: String,\n    ) {\n        updateusersCollection(\n            filter: {id: {eq: $id}}\n            set: {\n                approved: true,\n                nickname: $nickname,\n                mutable_id: $mutable_id,\n                preference: $preference,\n                description: $description,\n            }\n        ) {\n            records {\n                id,\n                approved,\n                nickname,\n                mutable_id,\n                preference,\n                description,\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation updateUser(\n        $id: UUID!,\n        $nickname: String,\n        $mutable_id: String,\n        $preference: [Int],\n        $description: String,\n    ) {\n        updateusersCollection(\n            filter: {id: {eq: $id}}\n            set: {\n                approved: true,\n                nickname: $nickname,\n                mutable_id: $mutable_id,\n                preference: $preference,\n                description: $description,\n            }\n        ) {\n            records {\n                id,\n                approved,\n                nickname,\n                mutable_id,\n                preference,\n                description,\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment OeuvresInfo on oeuvresConnection {\n        edges {\n            node {\n                id\n                title\n                description\n                release_date\n                oeuvres_artistsCollection {\n                    ...ArtistsInfo\n                },\n                oeuvres_genresCollection {\n                    ...GenresInfo\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment OeuvresInfo on oeuvresConnection {\n        edges {\n            node {\n                id\n                title\n                description\n                release_date\n                oeuvres_artistsCollection {\n                    ...ArtistsInfo\n                },\n                oeuvres_genresCollection {\n                    ...GenresInfo\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment ArtistsInfo on oeuvres_artistsConnection {\n        edges {\n            node {\n                artists {\n                    id\n                    name\n                    birthdate\n                    bio\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment ArtistsInfo on oeuvres_artistsConnection {\n        edges {\n            node {\n                artists {\n                    id\n                    name\n                    birthdate\n                    bio\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment GenresInfo on oeuvres_genresConnection {\n        edges {\n            node {\n                genres {\n                    id\n                    name\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment GenresInfo on oeuvres_genresConnection {\n        edges {\n            node {\n                genres {\n                    id\n                    name\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query searchOeuvres($word: String!) {\n        oeuvresCollection(\n            filter: { title: { ilike: $word } }\n        ) {\n            ...OeuvresInfo\n        }\n    }\n"): (typeof documents)["\n    query searchOeuvres($word: String!) {\n        oeuvresCollection(\n            filter: { title: { ilike: $word } }\n        ) {\n            ...OeuvresInfo\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment PentagramsInfo on pentagramsConnection {\n        edges {\n            node {\n                id\n                title\n                description\n                users {\n                    id\n                    mutable_id\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment PentagramsInfo on pentagramsConnection {\n        edges {\n            node {\n                id\n                title\n                description\n                users {\n                    id\n                    mutable_id\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query searchPentagrams($word: String!) {\n        pentagramsCollection(\n            filter: { title: { ilike: $word } }\n        ) {\n            ...PentagramsInfo\n        }\n    }\n"): (typeof documents)["\n    query searchPentagrams($word: String!) {\n        pentagramsCollection(\n            filter: { title: { ilike: $word } }\n        ) {\n            ...PentagramsInfo\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPentagramById($id: UUID!) {\n        pentagramsCollection(\n            filter: { id: { eq: $id } }\n        ) {\n            ...PentagramsInfo\n        }\n    }\n"): (typeof documents)["\n    query getPentagramById($id: UUID!) {\n        pentagramsCollection(\n            filter: { id: { eq: $id } }\n        ) {\n            ...PentagramsInfo\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment MiniProfile on users {\n        mutable_id,\n        nickname,\n        id\n    }\n"): (typeof documents)["\n    fragment MiniProfile on users {\n        mutable_id,\n        nickname,\n        id\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment FollowingsMiniProfile on followingsConnection {\n        edges {\n            node {\n                following_id {\n                    ...MiniProfile\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment FollowingsMiniProfile on followingsConnection {\n        edges {\n            node {\n                following_id {\n                    ...MiniProfile\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment FollowersMiniProfile on followingsConnection {\n        edges {\n            node {\n                follower_id {\n                    ...MiniProfile\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment FollowersMiniProfile on followingsConnection {\n        edges {\n            node {\n                follower_id {\n                    ...MiniProfile\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment PostsMiniData on postsConnection {\n        edges {\n            node {\n                id\n                title\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment PostsMiniData on postsConnection {\n        edges {\n            node {\n                id\n                title\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment ProfileData on users {\n        ...MiniProfile,\n        description,\n        nickname,\n        preference,\n        followersCollection {\n            ...FollowersMiniProfile\n        },\n        followingsCollection {\n            ...FollowingsMiniProfile\n        },\n        postsCollection {\n            ...PostsMiniData\n        }\n    }\n"): (typeof documents)["\n    fragment ProfileData on users {\n        ...MiniProfile,\n        description,\n        nickname,\n        preference,\n        followersCollection {\n            ...FollowersMiniProfile\n        },\n        followingsCollection {\n            ...FollowingsMiniProfile\n        },\n        postsCollection {\n            ...PostsMiniData\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation insertFollowings($followerId:UUID!, $followingId:UUID!) {\n        insertIntofollowingsCollection(\n            objects: {\n                follower_id: $followerId,\n                following_id: $followingId\n            }\n        ) {\n            records{\n                follower_id { id },\n                follower_id { id }\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation insertFollowings($followerId:UUID!, $followingId:UUID!) {\n        insertIntofollowingsCollection(\n            objects: {\n                follower_id: $followerId,\n                following_id: $followingId\n            }\n        ) {\n            records{\n                follower_id { id },\n                follower_id { id }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation deleteFollowings($followerId:UUID!, $followingId:UUID!) {\n        deleteFromfollowingsCollection(\n            filter : {\n                following_id: {eq: $followingId },\n                follower_id: {eq: $followerId}\n            }\n        ) {\n            records {\n                follower_id { id },\n                follower_id { id }\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation deleteFollowings($followerId:UUID!, $followingId:UUID!) {\n        deleteFromfollowingsCollection(\n            filter : {\n                following_id: {eq: $followingId },\n                follower_id: {eq: $followerId}\n            }\n        ) {\n            records {\n                follower_id { id },\n                follower_id { id }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetProfileByMutableId($mutableId: String!) {\n        usersCollection(filter: { mutable_id: {eq: $mutableId } }) {\n            edges {\n                node {\n                    ...ProfileData\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetProfileByMutableId($mutableId: String!) {\n        usersCollection(filter: { mutable_id: {eq: $mutableId } }) {\n            edges {\n                node {\n                    ...ProfileData\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetUserById($id: UUID!) {\n        usersCollection(filter: { id: {eq: $id } }) {\n            edges {\n                node {\n                    id,\n                    mutable_id,\n                    nickname,\n                    preference,\n                    followingsCollection {\n                        ...FollowingsMiniProfile\n                    },\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetUserById($id: UUID!) {\n        usersCollection(filter: { id: {eq: $id } }) {\n            edges {\n                node {\n                    id,\n                    mutable_id,\n                    nickname,\n                    preference,\n                    followingsCollection {\n                        ...FollowingsMiniProfile\n                    },\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation registerUser($id: UUID!) {\n        insertIntousersCollection(objects: [\n            {id: $id},\n        ]) {\n            records {\n                id\n                mutable_id\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation registerUser($id: UUID!) {\n        insertIntousersCollection(objects: [\n            {id: $id},\n        ]) {\n            records {\n                id\n                mutable_id\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;