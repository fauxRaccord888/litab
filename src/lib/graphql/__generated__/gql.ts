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
    "\n    fragment MiniProfile on users {\n        mutable_id,\n        id\n    }\n": types.MiniProfileFragmentDoc,
    "\n    fragment FollowingsMiniProfile on usersConnection {\n        edges {\n            node {\n              ...MiniProfile\n            }\n        }\n    }\n": types.FollowingsMiniProfileFragmentDoc,
    "\n    fragment PostsMiniData on postsConnection {\n        edges {\n            node {\n                id\n                title\n            }\n        }\n    }\n": types.PostsMiniDataFragmentDoc,
    "\n    query GetProfileByMutableId($mutableId: String!) {\n        usersCollection(filter: { mutable_id: {eq: $mutableId } }) {\n            edges {\n                node {\n                    ...MiniProfile,\n                    description,\n                    nickname,\n                    preference,\n                    followers {\n                        ...FollowingsMiniProfile\n                    },\n                    followings {\n                        ...FollowingsMiniProfile\n                    },\n                    posts {\n                        ...PostsMiniData\n                    }\n                }\n            }\n        }\n    }\n": types.GetProfileByMutableIdDocument,
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
export function graphql(source: "\n    fragment MiniProfile on users {\n        mutable_id,\n        id\n    }\n"): (typeof documents)["\n    fragment MiniProfile on users {\n        mutable_id,\n        id\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment FollowingsMiniProfile on usersConnection {\n        edges {\n            node {\n              ...MiniProfile\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment FollowingsMiniProfile on usersConnection {\n        edges {\n            node {\n              ...MiniProfile\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment PostsMiniData on postsConnection {\n        edges {\n            node {\n                id\n                title\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment PostsMiniData on postsConnection {\n        edges {\n            node {\n                id\n                title\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetProfileByMutableId($mutableId: String!) {\n        usersCollection(filter: { mutable_id: {eq: $mutableId } }) {\n            edges {\n                node {\n                    ...MiniProfile,\n                    description,\n                    nickname,\n                    preference,\n                    followers {\n                        ...FollowingsMiniProfile\n                    },\n                    followings {\n                        ...FollowingsMiniProfile\n                    },\n                    posts {\n                        ...PostsMiniData\n                    }\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetProfileByMutableId($mutableId: String!) {\n        usersCollection(filter: { mutable_id: {eq: $mutableId } }) {\n            edges {\n                node {\n                    ...MiniProfile,\n                    description,\n                    nickname,\n                    preference,\n                    followers {\n                        ...FollowingsMiniProfile\n                    },\n                    followings {\n                        ...FollowingsMiniProfile\n                    },\n                    posts {\n                        ...PostsMiniData\n                    }\n                }\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;