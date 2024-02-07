/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: string; output: string; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: string; output: string; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date wihout time information */
  Date: { input: string; output: string; }
  /** A date and time */
  Datetime: { input: string; output: string; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: string; output: string; }
  /** A universally unique identifier */
  UUID: { input: string; output: string; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `artists` collection */
  deleteFromartistsCollection: ArtistsDeleteResponse;
  /** Deletes zero or more records from the `followings` collection */
  deleteFromfollowingsCollection: FollowingsDeleteResponse;
  /** Deletes zero or more records from the `genres` collection */
  deleteFromgenresCollection: GenresDeleteResponse;
  /** Deletes zero or more records from the `oeuvres` collection */
  deleteFromoeuvresCollection: OeuvresDeleteResponse;
  /** Deletes zero or more records from the `oeuvres_artists` collection */
  deleteFromoeuvres_artistsCollection: Oeuvres_ArtistsDeleteResponse;
  /** Deletes zero or more records from the `oeuvres_genres` collection */
  deleteFromoeuvres_genresCollection: Oeuvres_GenresDeleteResponse;
  /** Deletes zero or more records from the `pentagrams` collection */
  deleteFrompentagramsCollection: PentagramsDeleteResponse;
  /** Deletes zero or more records from the `pentagrams_oeuvres` collection */
  deleteFrompentagrams_oeuvresCollection: Pentagrams_OeuvresDeleteResponse;
  /** Deletes zero or more records from the `posts` collection */
  deleteFrompostsCollection: PostsDeleteResponse;
  /** Deletes zero or more records from the `users` collection */
  deleteFromusersCollection: UsersDeleteResponse;
  /** Adds one or more `artists` records to the collection */
  insertIntoartistsCollection?: Maybe<ArtistsInsertResponse>;
  /** Adds one or more `followings` records to the collection */
  insertIntofollowingsCollection?: Maybe<FollowingsInsertResponse>;
  /** Adds one or more `genres` records to the collection */
  insertIntogenresCollection?: Maybe<GenresInsertResponse>;
  /** Adds one or more `oeuvres` records to the collection */
  insertIntooeuvresCollection?: Maybe<OeuvresInsertResponse>;
  /** Adds one or more `oeuvres_artists` records to the collection */
  insertIntooeuvres_artistsCollection?: Maybe<Oeuvres_ArtistsInsertResponse>;
  /** Adds one or more `oeuvres_genres` records to the collection */
  insertIntooeuvres_genresCollection?: Maybe<Oeuvres_GenresInsertResponse>;
  /** Adds one or more `pentagrams` records to the collection */
  insertIntopentagramsCollection?: Maybe<PentagramsInsertResponse>;
  /** Adds one or more `pentagrams_oeuvres` records to the collection */
  insertIntopentagrams_oeuvresCollection?: Maybe<Pentagrams_OeuvresInsertResponse>;
  /** Adds one or more `posts` records to the collection */
  insertIntopostsCollection?: Maybe<PostsInsertResponse>;
  /** Adds one or more `users` records to the collection */
  insertIntousersCollection?: Maybe<UsersInsertResponse>;
  /** Updates zero or more records in the `artists` collection */
  updateartistsCollection: ArtistsUpdateResponse;
  /** Updates zero or more records in the `followings` collection */
  updatefollowingsCollection: FollowingsUpdateResponse;
  /** Updates zero or more records in the `genres` collection */
  updategenresCollection: GenresUpdateResponse;
  /** Updates zero or more records in the `oeuvres` collection */
  updateoeuvresCollection: OeuvresUpdateResponse;
  /** Updates zero or more records in the `oeuvres_artists` collection */
  updateoeuvres_artistsCollection: Oeuvres_ArtistsUpdateResponse;
  /** Updates zero or more records in the `oeuvres_genres` collection */
  updateoeuvres_genresCollection: Oeuvres_GenresUpdateResponse;
  /** Updates zero or more records in the `pentagrams` collection */
  updatepentagramsCollection: PentagramsUpdateResponse;
  /** Updates zero or more records in the `pentagrams_oeuvres` collection */
  updatepentagrams_oeuvresCollection: Pentagrams_OeuvresUpdateResponse;
  /** Updates zero or more records in the `posts` collection */
  updatepostsCollection: PostsUpdateResponse;
  /** Updates zero or more records in the `users` collection */
  updateusersCollection: UsersUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromartistsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ArtistsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromfollowingsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<FollowingsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromgenresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GenresFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromoeuvresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OeuvresFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromoeuvres_ArtistsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Oeuvres_ArtistsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromoeuvres_GenresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Oeuvres_GenresFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompentagramsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PentagramsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompentagrams_OeuvresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pentagrams_OeuvresFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompostsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PostsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromusersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UsersFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoartistsCollectionArgs = {
  objects: Array<ArtistsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntofollowingsCollectionArgs = {
  objects: Array<FollowingsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntogenresCollectionArgs = {
  objects: Array<GenresInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntooeuvresCollectionArgs = {
  objects: Array<OeuvresInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntooeuvres_ArtistsCollectionArgs = {
  objects: Array<Oeuvres_ArtistsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntooeuvres_GenresCollectionArgs = {
  objects: Array<Oeuvres_GenresInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopentagramsCollectionArgs = {
  objects: Array<PentagramsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopentagrams_OeuvresCollectionArgs = {
  objects: Array<Pentagrams_OeuvresInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopostsCollectionArgs = {
  objects: Array<PostsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntousersCollectionArgs = {
  objects: Array<UsersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateartistsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ArtistsFilter>;
  set: ArtistsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatefollowingsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<FollowingsFilter>;
  set: FollowingsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdategenresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GenresFilter>;
  set: GenresUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateoeuvresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OeuvresFilter>;
  set: OeuvresUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateoeuvres_ArtistsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Oeuvres_ArtistsFilter>;
  set: Oeuvres_ArtistsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateoeuvres_GenresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Oeuvres_GenresFilter>;
  set: Oeuvres_GenresUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepentagramsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PentagramsFilter>;
  set: PentagramsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepentagrams_OeuvresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pentagrams_OeuvresFilter>;
  set: Pentagrams_OeuvresUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepostsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PostsFilter>;
  set: PostsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateusersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UsersFilter>;
  set: UsersUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `artists` */
  artistsCollection?: Maybe<ArtistsConnection>;
  /** A pagable collection of type `followings` */
  followingsCollection?: Maybe<FollowingsConnection>;
  /** A pagable collection of type `genres` */
  genresCollection?: Maybe<GenresConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `oeuvres` */
  oeuvresCollection?: Maybe<OeuvresConnection>;
  /** A pagable collection of type `oeuvres_artists` */
  oeuvres_artistsCollection?: Maybe<Oeuvres_ArtistsConnection>;
  /** A pagable collection of type `oeuvres_genres` */
  oeuvres_genresCollection?: Maybe<Oeuvres_GenresConnection>;
  /** A pagable collection of type `pentagrams` */
  pentagramsCollection?: Maybe<PentagramsConnection>;
  /** A pagable collection of type `pentagrams_oeuvres` */
  pentagrams_oeuvresCollection?: Maybe<Pentagrams_OeuvresConnection>;
  /** A pagable collection of type `posts` */
  postsCollection?: Maybe<PostsConnection>;
  /** A pagable collection of type `users` */
  usersCollection?: Maybe<UsersConnection>;
};


/** The root type for querying data */
export type QueryArtistsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ArtistsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ArtistsOrderBy>>;
};


/** The root type for querying data */
export type QueryFollowingsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<FollowingsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FollowingsOrderBy>>;
};


/** The root type for querying data */
export type QueryGenresCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GenresFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GenresOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryOeuvresCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OeuvresFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OeuvresOrderBy>>;
};


/** The root type for querying data */
export type QueryOeuvres_ArtistsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Oeuvres_ArtistsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Oeuvres_ArtistsOrderBy>>;
};


/** The root type for querying data */
export type QueryOeuvres_GenresCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Oeuvres_GenresFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Oeuvres_GenresOrderBy>>;
};


/** The root type for querying data */
export type QueryPentagramsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramsOrderBy>>;
};


/** The root type for querying data */
export type QueryPentagrams_OeuvresCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagrams_OeuvresFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagrams_OeuvresOrderBy>>;
};


/** The root type for querying data */
export type QueryPostsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PostsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
};


/** The root type for querying data */
export type QueryUsersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UsersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

export type Artists = Node & {
  __typename?: 'artists';
  bio?: Maybe<Scalars['String']['output']>;
  birthdate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  oeuvres_artistsCollection?: Maybe<Oeuvres_ArtistsConnection>;
};


export type ArtistsOeuvres_ArtistsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Oeuvres_ArtistsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Oeuvres_ArtistsOrderBy>>;
};

export type ArtistsConnection = {
  __typename?: 'artistsConnection';
  edges: Array<ArtistsEdge>;
  pageInfo: PageInfo;
};

export type ArtistsDeleteResponse = {
  __typename?: 'artistsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Artists>;
};

export type ArtistsEdge = {
  __typename?: 'artistsEdge';
  cursor: Scalars['String']['output'];
  node: Artists;
};

export type ArtistsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ArtistsFilter>>;
  bio?: InputMaybe<StringFilter>;
  birthdate?: InputMaybe<DateFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ArtistsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ArtistsFilter>>;
};

export type ArtistsInsertInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  birthdate?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ArtistsInsertResponse = {
  __typename?: 'artistsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Artists>;
};

export type ArtistsOrderBy = {
  bio?: InputMaybe<OrderByDirection>;
  birthdate?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type ArtistsUpdateInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  birthdate?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ArtistsUpdateResponse = {
  __typename?: 'artistsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Artists>;
};

export type Followings = Node & {
  __typename?: 'followings';
  follower_id: Users;
  following_id: Users;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type FollowingsConnection = {
  __typename?: 'followingsConnection';
  edges: Array<FollowingsEdge>;
  pageInfo: PageInfo;
};

export type FollowingsDeleteResponse = {
  __typename?: 'followingsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Followings>;
};

export type FollowingsEdge = {
  __typename?: 'followingsEdge';
  cursor: Scalars['String']['output'];
  node: Followings;
};

export type FollowingsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<FollowingsFilter>>;
  follower_id?: InputMaybe<UuidFilter>;
  following_id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<FollowingsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<FollowingsFilter>>;
};

export type FollowingsInsertInput = {
  follower_id?: InputMaybe<Scalars['UUID']['input']>;
  following_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type FollowingsInsertResponse = {
  __typename?: 'followingsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Followings>;
};

export type FollowingsOrderBy = {
  follower_id?: InputMaybe<OrderByDirection>;
  following_id?: InputMaybe<OrderByDirection>;
};

export type FollowingsUpdateInput = {
  follower_id?: InputMaybe<Scalars['UUID']['input']>;
  following_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type FollowingsUpdateResponse = {
  __typename?: 'followingsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Followings>;
};

export type Genres = Node & {
  __typename?: 'genres';
  id: Scalars['UUID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  oeuvres_genresCollection?: Maybe<Oeuvres_GenresConnection>;
};


export type GenresOeuvres_GenresCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Oeuvres_GenresFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Oeuvres_GenresOrderBy>>;
};

export type GenresConnection = {
  __typename?: 'genresConnection';
  edges: Array<GenresEdge>;
  pageInfo: PageInfo;
};

export type GenresDeleteResponse = {
  __typename?: 'genresDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Genres>;
};

export type GenresEdge = {
  __typename?: 'genresEdge';
  cursor: Scalars['String']['output'];
  node: Genres;
};

export type GenresFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GenresFilter>>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GenresFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GenresFilter>>;
};

export type GenresInsertInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GenresInsertResponse = {
  __typename?: 'genresInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Genres>;
};

export type GenresOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type GenresUpdateInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GenresUpdateResponse = {
  __typename?: 'genresUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Genres>;
};

export type Oeuvres = Node & {
  __typename?: 'oeuvres';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  oeuvres_artistsCollection?: Maybe<Oeuvres_ArtistsConnection>;
  oeuvres_genresCollection?: Maybe<Oeuvres_GenresConnection>;
  pentagrams_oeuvresCollection?: Maybe<Pentagrams_OeuvresConnection>;
  release_date: Scalars['Date']['output'];
  title: Scalars['String']['output'];
};


export type OeuvresOeuvres_ArtistsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Oeuvres_ArtistsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Oeuvres_ArtistsOrderBy>>;
};


export type OeuvresOeuvres_GenresCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Oeuvres_GenresFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Oeuvres_GenresOrderBy>>;
};


export type OeuvresPentagrams_OeuvresCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagrams_OeuvresFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagrams_OeuvresOrderBy>>;
};

export type OeuvresConnection = {
  __typename?: 'oeuvresConnection';
  edges: Array<OeuvresEdge>;
  pageInfo: PageInfo;
};

export type OeuvresDeleteResponse = {
  __typename?: 'oeuvresDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Oeuvres>;
};

export type OeuvresEdge = {
  __typename?: 'oeuvresEdge';
  cursor: Scalars['String']['output'];
  node: Oeuvres;
};

export type OeuvresFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<OeuvresFilter>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<OeuvresFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<OeuvresFilter>>;
  release_date?: InputMaybe<DateFilter>;
  title?: InputMaybe<StringFilter>;
};

export type OeuvresInsertInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  release_date?: InputMaybe<Scalars['Date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type OeuvresInsertResponse = {
  __typename?: 'oeuvresInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Oeuvres>;
};

export type OeuvresOrderBy = {
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  release_date?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
};

export type OeuvresUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  release_date?: InputMaybe<Scalars['Date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type OeuvresUpdateResponse = {
  __typename?: 'oeuvresUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Oeuvres>;
};

export type Oeuvres_Artists = Node & {
  __typename?: 'oeuvres_artists';
  artist_id: Scalars['UUID']['output'];
  artists: Artists;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  oeuvre_id: Scalars['UUID']['output'];
  oeuvres: Oeuvres;
};

export type Oeuvres_ArtistsConnection = {
  __typename?: 'oeuvres_artistsConnection';
  edges: Array<Oeuvres_ArtistsEdge>;
  pageInfo: PageInfo;
};

export type Oeuvres_ArtistsDeleteResponse = {
  __typename?: 'oeuvres_artistsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Oeuvres_Artists>;
};

export type Oeuvres_ArtistsEdge = {
  __typename?: 'oeuvres_artistsEdge';
  cursor: Scalars['String']['output'];
  node: Oeuvres_Artists;
};

export type Oeuvres_ArtistsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Oeuvres_ArtistsFilter>>;
  artist_id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Oeuvres_ArtistsFilter>;
  oeuvre_id?: InputMaybe<UuidFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Oeuvres_ArtistsFilter>>;
};

export type Oeuvres_ArtistsInsertInput = {
  artist_id?: InputMaybe<Scalars['UUID']['input']>;
  oeuvre_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Oeuvres_ArtistsInsertResponse = {
  __typename?: 'oeuvres_artistsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Oeuvres_Artists>;
};

export type Oeuvres_ArtistsOrderBy = {
  artist_id?: InputMaybe<OrderByDirection>;
  oeuvre_id?: InputMaybe<OrderByDirection>;
};

export type Oeuvres_ArtistsUpdateInput = {
  artist_id?: InputMaybe<Scalars['UUID']['input']>;
  oeuvre_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Oeuvres_ArtistsUpdateResponse = {
  __typename?: 'oeuvres_artistsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Oeuvres_Artists>;
};

export type Oeuvres_Genres = Node & {
  __typename?: 'oeuvres_genres';
  genre_id: Scalars['UUID']['output'];
  genres: Genres;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  oeuvre_id: Scalars['UUID']['output'];
  oeuvres: Oeuvres;
};

export type Oeuvres_GenresConnection = {
  __typename?: 'oeuvres_genresConnection';
  edges: Array<Oeuvres_GenresEdge>;
  pageInfo: PageInfo;
};

export type Oeuvres_GenresDeleteResponse = {
  __typename?: 'oeuvres_genresDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Oeuvres_Genres>;
};

export type Oeuvres_GenresEdge = {
  __typename?: 'oeuvres_genresEdge';
  cursor: Scalars['String']['output'];
  node: Oeuvres_Genres;
};

export type Oeuvres_GenresFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Oeuvres_GenresFilter>>;
  genre_id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Oeuvres_GenresFilter>;
  oeuvre_id?: InputMaybe<UuidFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Oeuvres_GenresFilter>>;
};

export type Oeuvres_GenresInsertInput = {
  genre_id?: InputMaybe<Scalars['UUID']['input']>;
  oeuvre_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Oeuvres_GenresInsertResponse = {
  __typename?: 'oeuvres_genresInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Oeuvres_Genres>;
};

export type Oeuvres_GenresOrderBy = {
  genre_id?: InputMaybe<OrderByDirection>;
  oeuvre_id?: InputMaybe<OrderByDirection>;
};

export type Oeuvres_GenresUpdateInput = {
  genre_id?: InputMaybe<Scalars['UUID']['input']>;
  oeuvre_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Oeuvres_GenresUpdateResponse = {
  __typename?: 'oeuvres_genresUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Oeuvres_Genres>;
};

export type Pentagrams = Node & {
  __typename?: 'pentagrams';
  created_at: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pentagrams_oeuvresCollection?: Maybe<Pentagrams_OeuvresConnection>;
  title?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['UUID']['output'];
  users: Users;
};


export type PentagramsPentagrams_OeuvresCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagrams_OeuvresFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagrams_OeuvresOrderBy>>;
};

export type PentagramsConnection = {
  __typename?: 'pentagramsConnection';
  edges: Array<PentagramsEdge>;
  pageInfo: PageInfo;
};

export type PentagramsDeleteResponse = {
  __typename?: 'pentagramsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagrams>;
};

export type PentagramsEdge = {
  __typename?: 'pentagramsEdge';
  cursor: Scalars['String']['output'];
  node: Pentagrams;
};

export type PentagramsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PentagramsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<PentagramsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PentagramsFilter>>;
  title?: InputMaybe<StringFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type PentagramsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type PentagramsInsertResponse = {
  __typename?: 'pentagramsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagrams>;
};

export type PentagramsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type PentagramsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type PentagramsUpdateResponse = {
  __typename?: 'pentagramsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagrams>;
};

export type Pentagrams_Oeuvres = Node & {
  __typename?: 'pentagrams_oeuvres';
  index: Scalars['Int']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  oeuvre_id: Scalars['UUID']['output'];
  oeuvres: Oeuvres;
  pentagram_id: Scalars['UUID']['output'];
  pentagrams: Pentagrams;
};

export type Pentagrams_OeuvresConnection = {
  __typename?: 'pentagrams_oeuvresConnection';
  edges: Array<Pentagrams_OeuvresEdge>;
  pageInfo: PageInfo;
};

export type Pentagrams_OeuvresDeleteResponse = {
  __typename?: 'pentagrams_oeuvresDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagrams_Oeuvres>;
};

export type Pentagrams_OeuvresEdge = {
  __typename?: 'pentagrams_oeuvresEdge';
  cursor: Scalars['String']['output'];
  node: Pentagrams_Oeuvres;
};

export type Pentagrams_OeuvresFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Pentagrams_OeuvresFilter>>;
  index?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Pentagrams_OeuvresFilter>;
  oeuvre_id?: InputMaybe<UuidFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Pentagrams_OeuvresFilter>>;
  pentagram_id?: InputMaybe<UuidFilter>;
};

export type Pentagrams_OeuvresInsertInput = {
  index?: InputMaybe<Scalars['Int']['input']>;
  oeuvre_id?: InputMaybe<Scalars['UUID']['input']>;
  pentagram_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Pentagrams_OeuvresInsertResponse = {
  __typename?: 'pentagrams_oeuvresInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagrams_Oeuvres>;
};

export type Pentagrams_OeuvresOrderBy = {
  index?: InputMaybe<OrderByDirection>;
  oeuvre_id?: InputMaybe<OrderByDirection>;
  pentagram_id?: InputMaybe<OrderByDirection>;
};

export type Pentagrams_OeuvresUpdateInput = {
  index?: InputMaybe<Scalars['Int']['input']>;
  oeuvre_id?: InputMaybe<Scalars['UUID']['input']>;
  pentagram_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Pentagrams_OeuvresUpdateResponse = {
  __typename?: 'pentagrams_oeuvresUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagrams_Oeuvres>;
};

export type Posts = Node & {
  __typename?: 'posts';
  author: Scalars['UUID']['output'];
  content: Scalars['String']['output'];
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  users: Users;
};

export type PostsConnection = {
  __typename?: 'postsConnection';
  edges: Array<PostsEdge>;
  pageInfo: PageInfo;
};

export type PostsDeleteResponse = {
  __typename?: 'postsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Posts>;
};

export type PostsEdge = {
  __typename?: 'postsEdge';
  cursor: Scalars['String']['output'];
  node: Posts;
};

export type PostsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PostsFilter>>;
  author?: InputMaybe<UuidFilter>;
  content?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<PostsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PostsFilter>>;
  title?: InputMaybe<StringFilter>;
};

export type PostsInsertInput = {
  author?: InputMaybe<Scalars['UUID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostsInsertResponse = {
  __typename?: 'postsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Posts>;
};

export type PostsOrderBy = {
  author?: InputMaybe<OrderByDirection>;
  content?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
};

export type PostsUpdateInput = {
  author?: InputMaybe<Scalars['UUID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostsUpdateResponse = {
  __typename?: 'postsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Posts>;
};

export type Users = Node & {
  __typename?: 'users';
  approved?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  followersCollection?: Maybe<FollowingsConnection>;
  followingsCollection?: Maybe<FollowingsConnection>;
  id: Scalars['UUID']['output'];
  mutable_id: Scalars['String']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pentagramsCollection?: Maybe<PentagramsConnection>;
  postsCollection?: Maybe<PostsConnection>;
  preference?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};


export type UsersFollowersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<FollowingsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FollowingsOrderBy>>;
};


export type UsersFollowingsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<FollowingsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FollowingsOrderBy>>;
};


export type UsersPentagramsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramsOrderBy>>;
};


export type UsersPostsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PostsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
};

export type UsersConnection = {
  __typename?: 'usersConnection';
  edges: Array<UsersEdge>;
  pageInfo: PageInfo;
};

export type UsersDeleteResponse = {
  __typename?: 'usersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type UsersEdge = {
  __typename?: 'usersEdge';
  cursor: Scalars['String']['output'];
  node: Users;
};

export type UsersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UsersFilter>>;
  approved?: InputMaybe<BooleanFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  mutable_id?: InputMaybe<StringFilter>;
  nickname?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<UsersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UsersFilter>>;
};

export type UsersInsertInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  mutable_id?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  preference?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type UsersInsertResponse = {
  __typename?: 'usersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type UsersOrderBy = {
  approved?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  mutable_id?: InputMaybe<OrderByDirection>;
  nickname?: InputMaybe<OrderByDirection>;
};

export type UsersUpdateInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  mutable_id?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  preference?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type UsersUpdateResponse = {
  __typename?: 'usersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  nickname?: InputMaybe<Scalars['String']['input']>;
  mutable_id?: InputMaybe<Scalars['String']['input']>;
  preference?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateUserMutation = { __typename: 'Mutation', updateusersCollection: { __typename: 'usersUpdateResponse', records: Array<{ __typename: 'users', id: string, approved?: boolean | null, nickname?: string | null, mutable_id: string, preference?: Array<number | null> | null, description?: string | null }> } };

export type OeuvresInfoFragment = { __typename: 'oeuvres', id: string, title: string, description?: string | null, release_date: string, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, birthdate?: string | null, bio?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null } } }> } | null };

export type ArtistsInfoFragment = { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, birthdate?: string | null, bio?: string | null } } }> };

export type GenresInfoFragment = { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null } } }> };

export type SearchOeuvresQueryVariables = Exact<{
  word: Scalars['String']['input'];
}>;


export type SearchOeuvresQuery = { __typename: 'Query', oeuvresCollection?: { __typename: 'oeuvresConnection', edges: Array<{ __typename: 'oeuvresEdge', node: { __typename: 'oeuvres', id: string, title: string, description?: string | null, release_date: string, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, birthdate?: string | null, bio?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null } } }> } | null } }> } | null };

export type OeuvresCollectionsFragment = { __typename: 'pentagrams_oeuvresConnection', edges: Array<{ __typename: 'pentagrams_oeuvresEdge', node: { __typename: 'pentagrams_oeuvres', index: number, oeuvres: { __typename: 'oeuvres', id: string, title: string, description?: string | null, release_date: string, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, birthdate?: string | null, bio?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null } } }> } | null } } }> };

export type PentagramsInfoFragment = { __typename: 'pentagramsConnection', edges: Array<{ __typename: 'pentagramsEdge', node: { __typename: 'pentagrams', id: string, title?: string | null, description?: string | null, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string }, pentagrams_oeuvresCollection?: { __typename: 'pentagrams_oeuvresConnection', edges: Array<{ __typename: 'pentagrams_oeuvresEdge', node: { __typename: 'pentagrams_oeuvres', index: number, oeuvres: { __typename: 'oeuvres', id: string, title: string, description?: string | null, release_date: string, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, birthdate?: string | null, bio?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null } } }> } | null } } }> } | null } }> };

export type SearchPentagramsQueryVariables = Exact<{
  word: Scalars['String']['input'];
}>;


export type SearchPentagramsQuery = { __typename: 'Query', pentagramsCollection?: { __typename: 'pentagramsConnection', edges: Array<{ __typename: 'pentagramsEdge', node: { __typename: 'pentagrams', id: string, title?: string | null, description?: string | null, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string }, pentagrams_oeuvresCollection?: { __typename: 'pentagrams_oeuvresConnection', edges: Array<{ __typename: 'pentagrams_oeuvresEdge', node: { __typename: 'pentagrams_oeuvres', index: number, oeuvres: { __typename: 'oeuvres', id: string, title: string, description?: string | null, release_date: string, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, birthdate?: string | null, bio?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null } } }> } | null } } }> } | null } }> } | null };

export type GetPentagramByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetPentagramByIdQuery = { __typename: 'Query', pentagramsCollection?: { __typename: 'pentagramsConnection', edges: Array<{ __typename: 'pentagramsEdge', node: { __typename: 'pentagrams', id: string, title?: string | null, description?: string | null, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string }, pentagrams_oeuvresCollection?: { __typename: 'pentagrams_oeuvresConnection', edges: Array<{ __typename: 'pentagrams_oeuvresEdge', node: { __typename: 'pentagrams_oeuvres', index: number, oeuvres: { __typename: 'oeuvres', id: string, title: string, description?: string | null, release_date: string, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, birthdate?: string | null, bio?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null } } }> } | null } } }> } | null } }> } | null };

export type MiniProfileFragment = { __typename: 'users', mutable_id: string, nickname?: string | null, id: string };

export type FollowingsMiniProfileFragment = { __typename: 'followingsConnection', edges: Array<{ __typename: 'followingsEdge', node: { __typename: 'followings', following_id: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string } } }> };

export type FollowersMiniProfileFragment = { __typename: 'followingsConnection', edges: Array<{ __typename: 'followingsEdge', node: { __typename: 'followings', follower_id: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string } } }> };

export type PostsMiniDataFragment = { __typename: 'postsConnection', edges: Array<{ __typename: 'postsEdge', node: { __typename: 'posts', id: string, title: string } }> };

export type ProfileDataFragment = { __typename: 'users', description?: string | null, nickname?: string | null, preference?: Array<number | null> | null, mutable_id: string, id: string, followersCollection?: { __typename: 'followingsConnection', edges: Array<{ __typename: 'followingsEdge', node: { __typename: 'followings', follower_id: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string } } }> } | null, followingsCollection?: { __typename: 'followingsConnection', edges: Array<{ __typename: 'followingsEdge', node: { __typename: 'followings', following_id: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string } } }> } | null, postsCollection?: { __typename: 'postsConnection', edges: Array<{ __typename: 'postsEdge', node: { __typename: 'posts', id: string, title: string } }> } | null };

export type InsertFollowingsMutationVariables = Exact<{
  followerId: Scalars['UUID']['input'];
  followingId: Scalars['UUID']['input'];
}>;


export type InsertFollowingsMutation = { __typename: 'Mutation', insertIntofollowingsCollection?: { __typename: 'followingsInsertResponse', records: Array<{ __typename: 'followings', follower_id: { __typename: 'users', id: string } }> } | null };

export type DeleteFollowingsMutationVariables = Exact<{
  followerId: Scalars['UUID']['input'];
  followingId: Scalars['UUID']['input'];
}>;


export type DeleteFollowingsMutation = { __typename: 'Mutation', deleteFromfollowingsCollection: { __typename: 'followingsDeleteResponse', records: Array<{ __typename: 'followings', follower_id: { __typename: 'users', id: string } }> } };

export type GetProfileByMutableIdQueryVariables = Exact<{
  mutableId: Scalars['String']['input'];
}>;


export type GetProfileByMutableIdQuery = { __typename: 'Query', usersCollection?: { __typename: 'usersConnection', edges: Array<{ __typename: 'usersEdge', node: { __typename: 'users', description?: string | null, nickname?: string | null, preference?: Array<number | null> | null, mutable_id: string, id: string, followersCollection?: { __typename: 'followingsConnection', edges: Array<{ __typename: 'followingsEdge', node: { __typename: 'followings', follower_id: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string } } }> } | null, followingsCollection?: { __typename: 'followingsConnection', edges: Array<{ __typename: 'followingsEdge', node: { __typename: 'followings', following_id: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string } } }> } | null, postsCollection?: { __typename: 'postsConnection', edges: Array<{ __typename: 'postsEdge', node: { __typename: 'posts', id: string, title: string } }> } | null } }> } | null };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetUserByIdQuery = { __typename: 'Query', usersCollection?: { __typename: 'usersConnection', edges: Array<{ __typename: 'usersEdge', node: { __typename: 'users', id: string, mutable_id: string, nickname?: string | null, preference?: Array<number | null> | null, followingsCollection?: { __typename: 'followingsConnection', edges: Array<{ __typename: 'followingsEdge', node: { __typename: 'followings', following_id: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string } } }> } | null } }> } | null };

export type RegisterUserMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type RegisterUserMutation = { __typename: 'Mutation', insertIntousersCollection?: { __typename: 'usersInsertResponse', records: Array<{ __typename: 'users', id: string, mutable_id: string }> } | null };

export const MiniProfileFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<MiniProfileFragment, unknown>;
export const ArtistsInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres_artistsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ArtistsInfoFragment, unknown>;
export const GenresInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres_genresConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GenresInfoFragment, unknown>;
export const OeuvresInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres_artistsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres_genresConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<OeuvresInfoFragment, unknown>;
export const OeuvresCollectionsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresCollections"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagrams_oeuvresConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres_artistsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres_genresConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresInfo"}}]}}]}}]} as unknown as DocumentNode<OeuvresCollectionsFragment, unknown>;
export const PentagramsInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagramsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams_oeuvresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresCollections"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres_artistsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres_genresConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresCollections"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagrams_oeuvresConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PentagramsInfoFragment, unknown>;
export const FollowersMiniProfileFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowersMiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"followingsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfile"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<FollowersMiniProfileFragment, unknown>;
export const FollowingsMiniProfileFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowingsMiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"followingsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"following_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfile"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<FollowingsMiniProfileFragment, unknown>;
export const PostsMiniDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostsMiniData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"postsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<PostsMiniDataFragment, unknown>;
export const ProfileDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfile"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"preference"}},{"kind":"Field","name":{"kind":"Name","value":"followersCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FollowersMiniProfile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"followingsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FollowingsMiniProfile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"postsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostsMiniData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowersMiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"followingsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfile"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowingsMiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"followingsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"following_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfile"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostsMiniData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"postsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<ProfileDataFragment, unknown>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mutable_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preference"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"updateusersCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"approved"},"value":{"kind":"BooleanValue","value":true}},{"kind":"ObjectField","name":{"kind":"Name","value":"nickname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mutable_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mutable_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"preference"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preference"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"preference"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const SearchOeuvresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchOeuvres"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"word"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"word"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres_artistsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres_genresConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresInfo"}}]}}]}}]} as unknown as DocumentNode<SearchOeuvresQuery, SearchOeuvresQueryVariables>;
export const SearchPentagramsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchPentagrams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"word"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"word"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres_artistsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres_genresConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresCollections"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagrams_oeuvresConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagramsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams_oeuvresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresCollections"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchPentagramsQuery, SearchPentagramsQueryVariables>;
export const GetPentagramByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPentagramById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres_artistsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres_genresConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresCollections"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagrams_oeuvresConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagramsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams_oeuvresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresCollections"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPentagramByIdQuery, GetPentagramByIdQueryVariables>;
export const InsertFollowingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertFollowings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"followerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"followingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"insertIntofollowingsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"follower_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"followerId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"following_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"followingId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<InsertFollowingsMutation, InsertFollowingsMutationVariables>;
export const DeleteFollowingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteFollowings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"followerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"followingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"deleteFromfollowingsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"following_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"followingId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"follower_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"followerId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DeleteFollowingsMutation, DeleteFollowingsMutationVariables>;
export const GetProfileByMutableIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProfileByMutableId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mutableId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"usersCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"mutable_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mutableId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileData"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowersMiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"followingsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfile"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowingsMiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"followingsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"following_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfile"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostsMiniData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"postsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfile"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"preference"}},{"kind":"Field","name":{"kind":"Name","value":"followersCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FollowersMiniProfile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"followingsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FollowingsMiniProfile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"postsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostsMiniData"}}]}}]}}]} as unknown as DocumentNode<GetProfileByMutableIdQuery, GetProfileByMutableIdQueryVariables>;
export const GetUserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"usersCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"preference"}},{"kind":"Field","name":{"kind":"Name","value":"followingsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FollowingsMiniProfile"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowingsMiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"followingsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"following_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfile"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registerUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"insertIntousersCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;