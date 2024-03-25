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
  /** Deletes zero or more records from the `pentagram_nodes` collection */
  deleteFrompentagram_nodesCollection: Pentagram_NodesDeleteResponse;
  /** Deletes zero or more records from the `pentagram_revision_recover_records` collection */
  deleteFrompentagram_revision_recover_recordsCollection: Pentagram_Revision_Recover_RecordsDeleteResponse;
  /** Deletes zero or more records from the `pentagram_revision_remove_records` collection */
  deleteFrompentagram_revision_remove_recordsCollection: Pentagram_Revision_Remove_RecordsDeleteResponse;
  /** Deletes zero or more records from the `pentagram_revision_update_records` collection */
  deleteFrompentagram_revision_update_recordsCollection: Pentagram_Revision_Update_RecordsDeleteResponse;
  /** Deletes zero or more records from the `pentagram_revision_upsert_records` collection */
  deleteFrompentagram_revision_upsert_recordsCollection: Pentagram_Revision_Upsert_RecordsDeleteResponse;
  /** Deletes zero or more records from the `pentagram_revisions` collection */
  deleteFrompentagram_revisionsCollection: Pentagram_RevisionsDeleteResponse;
  /** Deletes zero or more records from the `pentagrams` collection */
  deleteFrompentagramsCollection: PentagramsDeleteResponse;
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
  /** Adds one or more `pentagram_nodes` records to the collection */
  insertIntopentagram_nodesCollection?: Maybe<Pentagram_NodesInsertResponse>;
  /** Adds one or more `pentagram_revision_recover_records` records to the collection */
  insertIntopentagram_revision_recover_recordsCollection?: Maybe<Pentagram_Revision_Recover_RecordsInsertResponse>;
  /** Adds one or more `pentagram_revision_remove_records` records to the collection */
  insertIntopentagram_revision_remove_recordsCollection?: Maybe<Pentagram_Revision_Remove_RecordsInsertResponse>;
  /** Adds one or more `pentagram_revision_update_records` records to the collection */
  insertIntopentagram_revision_update_recordsCollection?: Maybe<Pentagram_Revision_Update_RecordsInsertResponse>;
  /** Adds one or more `pentagram_revision_upsert_records` records to the collection */
  insertIntopentagram_revision_upsert_recordsCollection?: Maybe<Pentagram_Revision_Upsert_RecordsInsertResponse>;
  /** Adds one or more `pentagram_revisions` records to the collection */
  insertIntopentagram_revisionsCollection?: Maybe<Pentagram_RevisionsInsertResponse>;
  /** Adds one or more `pentagrams` records to the collection */
  insertIntopentagramsCollection?: Maybe<PentagramsInsertResponse>;
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
  /** Updates zero or more records in the `pentagram_nodes` collection */
  updatepentagram_nodesCollection: Pentagram_NodesUpdateResponse;
  /** Updates zero or more records in the `pentagram_revision_recover_records` collection */
  updatepentagram_revision_recover_recordsCollection: Pentagram_Revision_Recover_RecordsUpdateResponse;
  /** Updates zero or more records in the `pentagram_revision_remove_records` collection */
  updatepentagram_revision_remove_recordsCollection: Pentagram_Revision_Remove_RecordsUpdateResponse;
  /** Updates zero or more records in the `pentagram_revision_update_records` collection */
  updatepentagram_revision_update_recordsCollection: Pentagram_Revision_Update_RecordsUpdateResponse;
  /** Updates zero or more records in the `pentagram_revision_upsert_records` collection */
  updatepentagram_revision_upsert_recordsCollection: Pentagram_Revision_Upsert_RecordsUpdateResponse;
  /** Updates zero or more records in the `pentagram_revisions` collection */
  updatepentagram_revisionsCollection: Pentagram_RevisionsUpdateResponse;
  /** Updates zero or more records in the `pentagrams` collection */
  updatepentagramsCollection: PentagramsUpdateResponse;
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
export type MutationDeleteFrompentagram_NodesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pentagram_NodesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompentagram_Revision_Recover_RecordsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pentagram_Revision_Recover_RecordsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompentagram_Revision_Remove_RecordsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pentagram_Revision_Remove_RecordsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompentagram_Revision_Update_RecordsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pentagram_Revision_Update_RecordsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompentagram_Revision_Upsert_RecordsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pentagram_Revision_Upsert_RecordsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompentagram_RevisionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pentagram_RevisionsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompentagramsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PentagramsFilter>;
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
export type MutationInsertIntopentagram_NodesCollectionArgs = {
  objects: Array<Pentagram_NodesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopentagram_Revision_Recover_RecordsCollectionArgs = {
  objects: Array<Pentagram_Revision_Recover_RecordsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopentagram_Revision_Remove_RecordsCollectionArgs = {
  objects: Array<Pentagram_Revision_Remove_RecordsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopentagram_Revision_Update_RecordsCollectionArgs = {
  objects: Array<Pentagram_Revision_Update_RecordsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopentagram_Revision_Upsert_RecordsCollectionArgs = {
  objects: Array<Pentagram_Revision_Upsert_RecordsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopentagram_RevisionsCollectionArgs = {
  objects: Array<Pentagram_RevisionsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopentagramsCollectionArgs = {
  objects: Array<PentagramsInsertInput>;
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
export type MutationUpdatepentagram_NodesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pentagram_NodesFilter>;
  set: Pentagram_NodesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepentagram_Revision_Recover_RecordsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pentagram_Revision_Recover_RecordsFilter>;
  set: Pentagram_Revision_Recover_RecordsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepentagram_Revision_Remove_RecordsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pentagram_Revision_Remove_RecordsFilter>;
  set: Pentagram_Revision_Remove_RecordsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepentagram_Revision_Update_RecordsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pentagram_Revision_Update_RecordsFilter>;
  set: Pentagram_Revision_Update_RecordsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepentagram_Revision_Upsert_RecordsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pentagram_Revision_Upsert_RecordsFilter>;
  set: Pentagram_Revision_Upsert_RecordsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepentagram_RevisionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pentagram_RevisionsFilter>;
  set: Pentagram_RevisionsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepentagramsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PentagramsFilter>;
  set: PentagramsUpdateInput;
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
  /** A pagable collection of type `pentagram_nodes` */
  pentagram_nodesCollection?: Maybe<Pentagram_NodesConnection>;
  /** A pagable collection of type `pentagram_revision_recover_records` */
  pentagram_revision_recover_recordsCollection?: Maybe<Pentagram_Revision_Recover_RecordsConnection>;
  /** A pagable collection of type `pentagram_revision_remove_records` */
  pentagram_revision_remove_recordsCollection?: Maybe<Pentagram_Revision_Remove_RecordsConnection>;
  /** A pagable collection of type `pentagram_revision_update_records` */
  pentagram_revision_update_recordsCollection?: Maybe<Pentagram_Revision_Update_RecordsConnection>;
  /** A pagable collection of type `pentagram_revision_upsert_records` */
  pentagram_revision_upsert_recordsCollection?: Maybe<Pentagram_Revision_Upsert_RecordsConnection>;
  /** A pagable collection of type `pentagram_revisions` */
  pentagram_revisionsCollection?: Maybe<Pentagram_RevisionsConnection>;
  /** A pagable collection of type `pentagrams` */
  pentagramsCollection?: Maybe<PentagramsConnection>;
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
export type QueryPentagram_NodesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_NodesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_NodesOrderBy>>;
};


/** The root type for querying data */
export type QueryPentagram_Revision_Recover_RecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_Revision_Recover_RecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_Revision_Recover_RecordsOrderBy>>;
};


/** The root type for querying data */
export type QueryPentagram_Revision_Remove_RecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_Revision_Remove_RecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_Revision_Remove_RecordsOrderBy>>;
};


/** The root type for querying data */
export type QueryPentagram_Revision_Update_RecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_Revision_Update_RecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_Revision_Update_RecordsOrderBy>>;
};


/** The root type for querying data */
export type QueryPentagram_Revision_Upsert_RecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_Revision_Upsert_RecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_Revision_Upsert_RecordsOrderBy>>;
};


/** The root type for querying data */
export type QueryPentagram_RevisionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_RevisionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_RevisionsOrderBy>>;
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
  abstract?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  oeuvres_artistsCollection?: Maybe<Oeuvres_ArtistsConnection>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
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
  abstract?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ArtistsFilter>>;
  bio?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ArtistsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ArtistsFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type ArtistsInsertInput = {
  abstract?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ArtistsInsertResponse = {
  __typename?: 'artistsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Artists>;
};

export type ArtistsOrderBy = {
  abstract?: InputMaybe<OrderByDirection>;
  bio?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type ArtistsUpdateInput = {
  abstract?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
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
  abstract?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  oeuvres_genresCollection?: Maybe<Oeuvres_GenresConnection>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
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
  abstract?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GenresFilter>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GenresFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GenresFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type GenresInsertInput = {
  abstract?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type GenresInsertResponse = {
  __typename?: 'genresInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Genres>;
};

export type GenresOrderBy = {
  abstract?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type GenresUpdateInput = {
  abstract?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
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
  pentagram_nodesCollection?: Maybe<Pentagram_NodesConnection>;
  release_date?: Maybe<Scalars['Date']['output']>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
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


export type OeuvresPentagram_NodesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_NodesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_NodesOrderBy>>;
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
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type OeuvresInsertInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  release_date?: InputMaybe<Scalars['Date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
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
  updated_at?: InputMaybe<OrderByDirection>;
};

export type OeuvresUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  release_date?: InputMaybe<Scalars['Date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
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

export type Pentagram_Nodes = Node & {
  __typename?: 'pentagram_nodes';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  oeuvre_id: Scalars['UUID']['output'];
  oeuvres: Oeuvres;
  pentagram_id: Scalars['UUID']['output'];
  pentagram_revision_recover_recordsCollection?: Maybe<Pentagram_Revision_Recover_RecordsConnection>;
  pentagram_revision_remove_recordsCollection?: Maybe<Pentagram_Revision_Remove_RecordsConnection>;
  pentagram_revision_update_recordsCollection?: Maybe<Pentagram_Revision_Update_RecordsConnection>;
  pentagram_revision_upsert_recordsCollection?: Maybe<Pentagram_Revision_Upsert_RecordsConnection>;
  pentagrams: Pentagrams;
};


export type Pentagram_NodesPentagram_Revision_Recover_RecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_Revision_Recover_RecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_Revision_Recover_RecordsOrderBy>>;
};


export type Pentagram_NodesPentagram_Revision_Remove_RecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_Revision_Remove_RecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_Revision_Remove_RecordsOrderBy>>;
};


export type Pentagram_NodesPentagram_Revision_Update_RecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_Revision_Update_RecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_Revision_Update_RecordsOrderBy>>;
};


export type Pentagram_NodesPentagram_Revision_Upsert_RecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_Revision_Upsert_RecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_Revision_Upsert_RecordsOrderBy>>;
};

export type Pentagram_NodesConnection = {
  __typename?: 'pentagram_nodesConnection';
  edges: Array<Pentagram_NodesEdge>;
  pageInfo: PageInfo;
};

export type Pentagram_NodesDeleteResponse = {
  __typename?: 'pentagram_nodesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagram_Nodes>;
};

export type Pentagram_NodesEdge = {
  __typename?: 'pentagram_nodesEdge';
  cursor: Scalars['String']['output'];
  node: Pentagram_Nodes;
};

export type Pentagram_NodesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Pentagram_NodesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Pentagram_NodesFilter>;
  oeuvre_id?: InputMaybe<UuidFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Pentagram_NodesFilter>>;
  pentagram_id?: InputMaybe<UuidFilter>;
};

export type Pentagram_NodesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  oeuvre_id?: InputMaybe<Scalars['UUID']['input']>;
  pentagram_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Pentagram_NodesInsertResponse = {
  __typename?: 'pentagram_nodesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagram_Nodes>;
};

export type Pentagram_NodesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  oeuvre_id?: InputMaybe<OrderByDirection>;
  pentagram_id?: InputMaybe<OrderByDirection>;
};

export type Pentagram_NodesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  oeuvre_id?: InputMaybe<Scalars['UUID']['input']>;
  pentagram_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Pentagram_NodesUpdateResponse = {
  __typename?: 'pentagram_nodesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagram_Nodes>;
};

export type Pentagram_Revision_Recover_Records = Node & {
  __typename?: 'pentagram_revision_recover_records';
  current_angle: Scalars['Int']['output'];
  current_distance: Scalars['Int']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  node_id: Scalars['UUID']['output'];
  pentagram_nodes: Pentagram_Nodes;
  pentagram_revisions: Pentagram_Revisions;
  revision_id: Scalars['UUID']['output'];
};

export type Pentagram_Revision_Recover_RecordsConnection = {
  __typename?: 'pentagram_revision_recover_recordsConnection';
  edges: Array<Pentagram_Revision_Recover_RecordsEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type Pentagram_Revision_Recover_RecordsDeleteResponse = {
  __typename?: 'pentagram_revision_recover_recordsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagram_Revision_Recover_Records>;
};

export type Pentagram_Revision_Recover_RecordsEdge = {
  __typename?: 'pentagram_revision_recover_recordsEdge';
  cursor: Scalars['String']['output'];
  node: Pentagram_Revision_Recover_Records;
};

export type Pentagram_Revision_Recover_RecordsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Pentagram_Revision_Recover_RecordsFilter>>;
  current_angle?: InputMaybe<IntFilter>;
  current_distance?: InputMaybe<IntFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  node_id?: InputMaybe<UuidFilter>;
  /** Negates a filter */
  not?: InputMaybe<Pentagram_Revision_Recover_RecordsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Pentagram_Revision_Recover_RecordsFilter>>;
  revision_id?: InputMaybe<UuidFilter>;
};

export type Pentagram_Revision_Recover_RecordsInsertInput = {
  current_angle?: InputMaybe<Scalars['Int']['input']>;
  current_distance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  node_id?: InputMaybe<Scalars['UUID']['input']>;
  revision_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Pentagram_Revision_Recover_RecordsInsertResponse = {
  __typename?: 'pentagram_revision_recover_recordsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagram_Revision_Recover_Records>;
};

export type Pentagram_Revision_Recover_RecordsOrderBy = {
  current_angle?: InputMaybe<OrderByDirection>;
  current_distance?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  node_id?: InputMaybe<OrderByDirection>;
  revision_id?: InputMaybe<OrderByDirection>;
};

export type Pentagram_Revision_Recover_RecordsUpdateInput = {
  current_angle?: InputMaybe<Scalars['Int']['input']>;
  current_distance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  node_id?: InputMaybe<Scalars['UUID']['input']>;
  revision_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Pentagram_Revision_Recover_RecordsUpdateResponse = {
  __typename?: 'pentagram_revision_recover_recordsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagram_Revision_Recover_Records>;
};

export type Pentagram_Revision_Remove_Records = Node & {
  __typename?: 'pentagram_revision_remove_records';
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  node_id: Scalars['UUID']['output'];
  pentagram_nodes: Pentagram_Nodes;
  pentagram_revisions: Pentagram_Revisions;
  previous_angle: Scalars['Int']['output'];
  previous_distance: Scalars['Int']['output'];
  revision_id: Scalars['UUID']['output'];
};

export type Pentagram_Revision_Remove_RecordsConnection = {
  __typename?: 'pentagram_revision_remove_recordsConnection';
  edges: Array<Pentagram_Revision_Remove_RecordsEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type Pentagram_Revision_Remove_RecordsDeleteResponse = {
  __typename?: 'pentagram_revision_remove_recordsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagram_Revision_Remove_Records>;
};

export type Pentagram_Revision_Remove_RecordsEdge = {
  __typename?: 'pentagram_revision_remove_recordsEdge';
  cursor: Scalars['String']['output'];
  node: Pentagram_Revision_Remove_Records;
};

export type Pentagram_Revision_Remove_RecordsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Pentagram_Revision_Remove_RecordsFilter>>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  node_id?: InputMaybe<UuidFilter>;
  /** Negates a filter */
  not?: InputMaybe<Pentagram_Revision_Remove_RecordsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Pentagram_Revision_Remove_RecordsFilter>>;
  previous_angle?: InputMaybe<IntFilter>;
  previous_distance?: InputMaybe<IntFilter>;
  revision_id?: InputMaybe<UuidFilter>;
};

export type Pentagram_Revision_Remove_RecordsInsertInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  node_id?: InputMaybe<Scalars['UUID']['input']>;
  previous_angle?: InputMaybe<Scalars['Int']['input']>;
  previous_distance?: InputMaybe<Scalars['Int']['input']>;
  revision_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Pentagram_Revision_Remove_RecordsInsertResponse = {
  __typename?: 'pentagram_revision_remove_recordsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagram_Revision_Remove_Records>;
};

export type Pentagram_Revision_Remove_RecordsOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  node_id?: InputMaybe<OrderByDirection>;
  previous_angle?: InputMaybe<OrderByDirection>;
  previous_distance?: InputMaybe<OrderByDirection>;
  revision_id?: InputMaybe<OrderByDirection>;
};

export type Pentagram_Revision_Remove_RecordsUpdateInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  node_id?: InputMaybe<Scalars['UUID']['input']>;
  previous_angle?: InputMaybe<Scalars['Int']['input']>;
  previous_distance?: InputMaybe<Scalars['Int']['input']>;
  revision_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Pentagram_Revision_Remove_RecordsUpdateResponse = {
  __typename?: 'pentagram_revision_remove_recordsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagram_Revision_Remove_Records>;
};

export type Pentagram_Revision_Update_Records = Node & {
  __typename?: 'pentagram_revision_update_records';
  current_angle: Scalars['Int']['output'];
  current_distance: Scalars['Int']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  node_id: Scalars['UUID']['output'];
  pentagram_nodes: Pentagram_Nodes;
  pentagram_revisions: Pentagram_Revisions;
  previous_angle: Scalars['Int']['output'];
  previous_distance: Scalars['Int']['output'];
  revision_id: Scalars['UUID']['output'];
};

export type Pentagram_Revision_Update_RecordsConnection = {
  __typename?: 'pentagram_revision_update_recordsConnection';
  edges: Array<Pentagram_Revision_Update_RecordsEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type Pentagram_Revision_Update_RecordsDeleteResponse = {
  __typename?: 'pentagram_revision_update_recordsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagram_Revision_Update_Records>;
};

export type Pentagram_Revision_Update_RecordsEdge = {
  __typename?: 'pentagram_revision_update_recordsEdge';
  cursor: Scalars['String']['output'];
  node: Pentagram_Revision_Update_Records;
};

export type Pentagram_Revision_Update_RecordsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Pentagram_Revision_Update_RecordsFilter>>;
  current_angle?: InputMaybe<IntFilter>;
  current_distance?: InputMaybe<IntFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  node_id?: InputMaybe<UuidFilter>;
  /** Negates a filter */
  not?: InputMaybe<Pentagram_Revision_Update_RecordsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Pentagram_Revision_Update_RecordsFilter>>;
  previous_angle?: InputMaybe<IntFilter>;
  previous_distance?: InputMaybe<IntFilter>;
  revision_id?: InputMaybe<UuidFilter>;
};

export type Pentagram_Revision_Update_RecordsInsertInput = {
  current_angle?: InputMaybe<Scalars['Int']['input']>;
  current_distance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  node_id?: InputMaybe<Scalars['UUID']['input']>;
  previous_angle?: InputMaybe<Scalars['Int']['input']>;
  previous_distance?: InputMaybe<Scalars['Int']['input']>;
  revision_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Pentagram_Revision_Update_RecordsInsertResponse = {
  __typename?: 'pentagram_revision_update_recordsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagram_Revision_Update_Records>;
};

export type Pentagram_Revision_Update_RecordsOrderBy = {
  current_angle?: InputMaybe<OrderByDirection>;
  current_distance?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  node_id?: InputMaybe<OrderByDirection>;
  previous_angle?: InputMaybe<OrderByDirection>;
  previous_distance?: InputMaybe<OrderByDirection>;
  revision_id?: InputMaybe<OrderByDirection>;
};

export type Pentagram_Revision_Update_RecordsUpdateInput = {
  current_angle?: InputMaybe<Scalars['Int']['input']>;
  current_distance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  node_id?: InputMaybe<Scalars['UUID']['input']>;
  previous_angle?: InputMaybe<Scalars['Int']['input']>;
  previous_distance?: InputMaybe<Scalars['Int']['input']>;
  revision_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Pentagram_Revision_Update_RecordsUpdateResponse = {
  __typename?: 'pentagram_revision_update_recordsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagram_Revision_Update_Records>;
};

export type Pentagram_Revision_Upsert_Records = Node & {
  __typename?: 'pentagram_revision_upsert_records';
  current_angle: Scalars['Int']['output'];
  current_distance: Scalars['Int']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  node_id: Scalars['UUID']['output'];
  pentagram_nodes: Pentagram_Nodes;
  pentagram_revisions: Pentagram_Revisions;
  revision_id: Scalars['UUID']['output'];
};

export type Pentagram_Revision_Upsert_RecordsConnection = {
  __typename?: 'pentagram_revision_upsert_recordsConnection';
  edges: Array<Pentagram_Revision_Upsert_RecordsEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type Pentagram_Revision_Upsert_RecordsDeleteResponse = {
  __typename?: 'pentagram_revision_upsert_recordsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagram_Revision_Upsert_Records>;
};

export type Pentagram_Revision_Upsert_RecordsEdge = {
  __typename?: 'pentagram_revision_upsert_recordsEdge';
  cursor: Scalars['String']['output'];
  node: Pentagram_Revision_Upsert_Records;
};

export type Pentagram_Revision_Upsert_RecordsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Pentagram_Revision_Upsert_RecordsFilter>>;
  current_angle?: InputMaybe<IntFilter>;
  current_distance?: InputMaybe<IntFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  node_id?: InputMaybe<UuidFilter>;
  /** Negates a filter */
  not?: InputMaybe<Pentagram_Revision_Upsert_RecordsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Pentagram_Revision_Upsert_RecordsFilter>>;
  revision_id?: InputMaybe<UuidFilter>;
};

export type Pentagram_Revision_Upsert_RecordsInsertInput = {
  current_angle?: InputMaybe<Scalars['Int']['input']>;
  current_distance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  node_id?: InputMaybe<Scalars['UUID']['input']>;
  revision_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Pentagram_Revision_Upsert_RecordsInsertResponse = {
  __typename?: 'pentagram_revision_upsert_recordsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagram_Revision_Upsert_Records>;
};

export type Pentagram_Revision_Upsert_RecordsOrderBy = {
  current_angle?: InputMaybe<OrderByDirection>;
  current_distance?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  node_id?: InputMaybe<OrderByDirection>;
  revision_id?: InputMaybe<OrderByDirection>;
};

export type Pentagram_Revision_Upsert_RecordsUpdateInput = {
  current_angle?: InputMaybe<Scalars['Int']['input']>;
  current_distance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  node_id?: InputMaybe<Scalars['UUID']['input']>;
  revision_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Pentagram_Revision_Upsert_RecordsUpdateResponse = {
  __typename?: 'pentagram_revision_upsert_recordsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagram_Revision_Upsert_Records>;
};

export type Pentagram_Revisions = Node & {
  __typename?: 'pentagram_revisions';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pentagram_id: Scalars['UUID']['output'];
  pentagram_revision_recover_recordsCollection?: Maybe<Pentagram_Revision_Recover_RecordsConnection>;
  pentagram_revision_remove_recordsCollection?: Maybe<Pentagram_Revision_Remove_RecordsConnection>;
  pentagram_revision_update_recordsCollection?: Maybe<Pentagram_Revision_Update_RecordsConnection>;
  pentagram_revision_upsert_recordsCollection?: Maybe<Pentagram_Revision_Upsert_RecordsConnection>;
  pentagrams: Pentagrams;
  user_id: Scalars['UUID']['output'];
  users: Users;
};


export type Pentagram_RevisionsPentagram_Revision_Recover_RecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_Revision_Recover_RecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_Revision_Recover_RecordsOrderBy>>;
};


export type Pentagram_RevisionsPentagram_Revision_Remove_RecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_Revision_Remove_RecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_Revision_Remove_RecordsOrderBy>>;
};


export type Pentagram_RevisionsPentagram_Revision_Update_RecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_Revision_Update_RecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_Revision_Update_RecordsOrderBy>>;
};


export type Pentagram_RevisionsPentagram_Revision_Upsert_RecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_Revision_Upsert_RecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_Revision_Upsert_RecordsOrderBy>>;
};

export type Pentagram_RevisionsConnection = {
  __typename?: 'pentagram_revisionsConnection';
  edges: Array<Pentagram_RevisionsEdge>;
  pageInfo: PageInfo;
};

export type Pentagram_RevisionsDeleteResponse = {
  __typename?: 'pentagram_revisionsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagram_Revisions>;
};

export type Pentagram_RevisionsEdge = {
  __typename?: 'pentagram_revisionsEdge';
  cursor: Scalars['String']['output'];
  node: Pentagram_Revisions;
};

export type Pentagram_RevisionsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Pentagram_RevisionsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Pentagram_RevisionsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Pentagram_RevisionsFilter>>;
  pentagram_id?: InputMaybe<UuidFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type Pentagram_RevisionsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  pentagram_id?: InputMaybe<Scalars['UUID']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Pentagram_RevisionsInsertResponse = {
  __typename?: 'pentagram_revisionsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagram_Revisions>;
};

export type Pentagram_RevisionsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  pentagram_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type Pentagram_RevisionsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  pentagram_id?: InputMaybe<Scalars['UUID']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Pentagram_RevisionsUpdateResponse = {
  __typename?: 'pentagram_revisionsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagram_Revisions>;
};

export type Pentagrams = Node & {
  __typename?: 'pentagrams';
  created_at: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pentagram_nodesCollection?: Maybe<Pentagram_NodesConnection>;
  pentagram_revisionsCollection?: Maybe<Pentagram_RevisionsConnection>;
  user_id: Scalars['UUID']['output'];
  users: Users;
};


export type PentagramsPentagram_NodesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_NodesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_NodesOrderBy>>;
};


export type PentagramsPentagram_RevisionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_RevisionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_RevisionsOrderBy>>;
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
  user_id?: InputMaybe<UuidFilter>;
};

export type PentagramsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
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
  user_id?: InputMaybe<OrderByDirection>;
};

export type PentagramsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type PentagramsUpdateResponse = {
  __typename?: 'pentagramsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagrams>;
};

export type Users = Node & {
  __typename?: 'users';
  description?: Maybe<Scalars['String']['output']>;
  feed?: Maybe<Pentagram_RevisionsConnection>;
  followersCollection?: Maybe<FollowingsConnection>;
  followingsCollection?: Maybe<FollowingsConnection>;
  id: Scalars['UUID']['output'];
  mutable_id: Scalars['String']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pentagram_revisionsCollection?: Maybe<Pentagram_RevisionsConnection>;
  pentagramsCollection?: Maybe<PentagramsConnection>;
  recommendation?: Maybe<UsersConnection>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type UsersFeedArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_RevisionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_RevisionsOrderBy>>;
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


export type UsersPentagram_RevisionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pentagram_RevisionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pentagram_RevisionsOrderBy>>;
};


export type UsersPentagramsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramsOrderBy>>;
};


export type UsersRecommendationArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UsersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
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
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  mutable_id?: InputMaybe<StringFilter>;
  nickname?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<UsersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UsersFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type UsersInsertInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  mutable_id?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type UsersInsertResponse = {
  __typename?: 'usersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type UsersOrderBy = {
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  mutable_id?: InputMaybe<OrderByDirection>;
  nickname?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type UsersUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  mutable_id?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type UsersUpdateResponse = {
  __typename?: 'usersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type UpdateProfileMutationVariables = Exact<{
  nickname?: InputMaybe<Scalars['String']['input']>;
  mutableId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateProfileMutation = { __typename: 'Mutation', updateusersCollection: { __typename: 'usersUpdateResponse', records: Array<{ __typename: 'users', id: string, nickname?: string | null, mutable_id: string, description?: string | null }> } };

export type ArtistsMinimalInfoFragment = { __typename: 'artists', id: string, name: string, updated_at?: string | null };

export type ArtistsInfoFragment = { __typename: 'artists', abstract?: string | null, bio?: string | null, id: string, name: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } } }> } | null };

export type GetArtistInfoByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetArtistInfoByIdQuery = { __typename: 'Query', artistsCollection?: { __typename: 'artistsConnection', edges: Array<{ __typename: 'artistsEdge', node: { __typename: 'artists', abstract?: string | null, bio?: string | null, id: string, name: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } } }> } | null } }> } | null };

export type GenresMinimalInfoFragment = { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null };

export type GenresInfoFragment = { __typename: 'genres', abstract?: string | null, description?: string | null, id: string, name?: string | null, updated_at?: string | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } } }> } | null };

export type GetGenreInfoByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetGenreInfoByIdQuery = { __typename: 'Query', genresCollection?: { __typename: 'genresConnection', edges: Array<{ __typename: 'genresEdge', node: { __typename: 'genres', abstract?: string | null, description?: string | null, id: string, name?: string | null, updated_at?: string | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } } }> } | null } }> } | null };

export type OeuvresMinimalInfoFragment = { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null };

export type OeuvresInfoFragment = { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null };

export type OeuvresExtensiveInfoFragment = { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, pentagram_nodesCollection?: { __typename: 'pentagram_nodesConnection', edges: Array<{ __typename: 'pentagram_nodesEdge', node: { __typename: 'pentagram_nodes', pentagrams: { __typename: 'pentagrams', id: string, description?: string | null, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagram_nodesCollection?: { __typename: 'pentagram_nodesConnection', edges: Array<{ __typename: 'pentagram_nodesEdge', node: { __typename: 'pentagram_nodes', id: string, oeuvres: { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_update_recordsEdge', node: { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_upsert_recordsEdge', node: { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_remove_recordsEdge', node: { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_recover_recordsEdge', node: { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null } }> } | null, pentagram_revisionsCollection?: { __typename: 'pentagram_revisionsConnection', edges: Array<{ __typename: 'pentagram_revisionsEdge', node: { __typename: 'pentagram_revisions', id: string, created_at: string, pentagrams: { __typename: 'pentagrams', id: string }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', totalCount: number } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', totalCount: number } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', totalCount: number } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', totalCount: number } | null } }> } | null } } }> } | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null };

export type GetOeuvreExtensiveInfoByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetOeuvreExtensiveInfoByIdQuery = { __typename: 'Query', oeuvresCollection?: { __typename: 'oeuvresConnection', edges: Array<{ __typename: 'oeuvresEdge', node: { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, pentagram_nodesCollection?: { __typename: 'pentagram_nodesConnection', edges: Array<{ __typename: 'pentagram_nodesEdge', node: { __typename: 'pentagram_nodes', pentagrams: { __typename: 'pentagrams', id: string, description?: string | null, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagram_nodesCollection?: { __typename: 'pentagram_nodesConnection', edges: Array<{ __typename: 'pentagram_nodesEdge', node: { __typename: 'pentagram_nodes', id: string, oeuvres: { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_update_recordsEdge', node: { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_upsert_recordsEdge', node: { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_remove_recordsEdge', node: { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_recover_recordsEdge', node: { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null } }> } | null, pentagram_revisionsCollection?: { __typename: 'pentagram_revisionsConnection', edges: Array<{ __typename: 'pentagram_revisionsEdge', node: { __typename: 'pentagram_revisions', id: string, created_at: string, pentagrams: { __typename: 'pentagrams', id: string }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', totalCount: number } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', totalCount: number } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', totalCount: number } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', totalCount: number } | null } }> } | null } } }> } | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null } }> } | null };

export type UpdateRecordInfoFragment = { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } };

export type UpsertRecordInfoFragment = { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } };

export type RemoveRecordInfoFragment = { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } };

export type RecoverRecordInfoFragment = { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } };

export type PentagramNodesInfoFragment = { __typename: 'pentagram_nodes', id: string, oeuvres: { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_update_recordsEdge', node: { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_upsert_recordsEdge', node: { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_remove_recordsEdge', node: { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_recover_recordsEdge', node: { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null };

export type PentagramsUpdateInfoFragment = { __typename: 'pentagrams', id: string, description?: string | null, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagram_nodesCollection?: { __typename: 'pentagram_nodesConnection', edges: Array<{ __typename: 'pentagram_nodesEdge', node: { __typename: 'pentagram_nodes', id: string, oeuvres: { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_update_recordsEdge', node: { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_upsert_recordsEdge', node: { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_remove_recordsEdge', node: { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_recover_recordsEdge', node: { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null } }> } | null };

export type PentagramsSelectInfoFragment = { __typename: 'pentagrams', id: string, description?: string | null, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagram_nodesCollection?: { __typename: 'pentagram_nodesConnection', edges: Array<{ __typename: 'pentagram_nodesEdge', node: { __typename: 'pentagram_nodes', id: string, oeuvres: { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_update_recordsEdge', node: { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_upsert_recordsEdge', node: { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_remove_recordsEdge', node: { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_recover_recordsEdge', node: { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null } }> } | null, pentagram_revisionsCollection?: { __typename: 'pentagram_revisionsConnection', edges: Array<{ __typename: 'pentagram_revisionsEdge', node: { __typename: 'pentagram_revisions', id: string, created_at: string, pentagrams: { __typename: 'pentagrams', id: string }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', totalCount: number } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', totalCount: number } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', totalCount: number } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', totalCount: number } | null } }> } | null };

export type PentagramsSelectUserInfoFragment = { __typename: 'pentagrams', id: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null } };

export type PentagramRevisionsInfoFragment = { __typename: 'pentagram_revisions', id: string, created_at: string, pentagrams: { __typename: 'pentagrams', id: string }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', totalCount: number, edges: Array<{ __typename: 'pentagram_revision_update_recordsEdge', node: { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', totalCount: number, edges: Array<{ __typename: 'pentagram_revision_upsert_recordsEdge', node: { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', totalCount: number, edges: Array<{ __typename: 'pentagram_revision_remove_recordsEdge', node: { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', totalCount: number, edges: Array<{ __typename: 'pentagram_revision_recover_recordsEdge', node: { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null };

export type PentagramRevisionsMinimalInfoFragment = { __typename: 'pentagram_revisions', id: string, created_at: string, pentagrams: { __typename: 'pentagrams', id: string }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', totalCount: number } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', totalCount: number } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', totalCount: number } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', totalCount: number } | null };

export type GetPentagramUpdateInfoByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetPentagramUpdateInfoByIdQuery = { __typename: 'Query', pentagramsCollection?: { __typename: 'pentagramsConnection', edges: Array<{ __typename: 'pentagramsEdge', node: { __typename: 'pentagrams', id: string, description?: string | null, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagram_nodesCollection?: { __typename: 'pentagram_nodesConnection', edges: Array<{ __typename: 'pentagram_nodesEdge', node: { __typename: 'pentagram_nodes', id: string, oeuvres: { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_update_recordsEdge', node: { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_upsert_recordsEdge', node: { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_remove_recordsEdge', node: { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_recover_recordsEdge', node: { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null } }> } | null } }> } | null };

export type GetPentagramSelectInfoByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetPentagramSelectInfoByIdQuery = { __typename: 'Query', pentagramsCollection?: { __typename: 'pentagramsConnection', edges: Array<{ __typename: 'pentagramsEdge', node: { __typename: 'pentagrams', id: string, description?: string | null, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagram_nodesCollection?: { __typename: 'pentagram_nodesConnection', edges: Array<{ __typename: 'pentagram_nodesEdge', node: { __typename: 'pentagram_nodes', id: string, oeuvres: { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_update_recordsEdge', node: { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_upsert_recordsEdge', node: { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_remove_recordsEdge', node: { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_recover_recordsEdge', node: { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null } }> } | null, pentagram_revisionsCollection?: { __typename: 'pentagram_revisionsConnection', edges: Array<{ __typename: 'pentagram_revisionsEdge', node: { __typename: 'pentagram_revisions', id: string, created_at: string, pentagrams: { __typename: 'pentagrams', id: string }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', totalCount: number } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', totalCount: number } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', totalCount: number } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', totalCount: number } | null } }> } | null } }> } | null };

export type GetPentagramsSelectUserInfoByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetPentagramsSelectUserInfoByIdQuery = { __typename: 'Query', pentagramsCollection?: { __typename: 'pentagramsConnection', edges: Array<{ __typename: 'pentagramsEdge', node: { __typename: 'pentagrams', id: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null } } }> } | null };

export type GetPentagramNodesInfoByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetPentagramNodesInfoByIdQuery = { __typename: 'Query', pentagram_nodesCollection?: { __typename: 'pentagram_nodesConnection', edges: Array<{ __typename: 'pentagram_nodesEdge', node: { __typename: 'pentagram_nodes', id: string, oeuvres: { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_update_recordsEdge', node: { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_upsert_recordsEdge', node: { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_remove_recordsEdge', node: { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_recover_recordsEdge', node: { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null } }> } | null };

export type GetPentagramRevisionsInfoByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetPentagramRevisionsInfoByIdQuery = { __typename: 'Query', pentagram_revisionsCollection?: { __typename: 'pentagram_revisionsConnection', edges: Array<{ __typename: 'pentagram_revisionsEdge', node: { __typename: 'pentagram_revisions', id: string, created_at: string, pentagrams: { __typename: 'pentagrams', id: string }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', totalCount: number, edges: Array<{ __typename: 'pentagram_revision_update_recordsEdge', node: { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', totalCount: number, edges: Array<{ __typename: 'pentagram_revision_upsert_recordsEdge', node: { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', totalCount: number, edges: Array<{ __typename: 'pentagram_revision_remove_recordsEdge', node: { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', totalCount: number, edges: Array<{ __typename: 'pentagram_revision_recover_recordsEdge', node: { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null } }> } | null };

export type MiniProfileInfoFragment = { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null };

export type FollowingsMiniProfileFragment = { __typename: 'followingsConnection', edges: Array<{ __typename: 'followingsEdge', node: { __typename: 'followings', following_id: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null } } }> };

export type FollowersMiniProfileFragment = { __typename: 'followingsConnection', edges: Array<{ __typename: 'followingsEdge', node: { __typename: 'followings', follower_id: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null } } }> };

export type ProfilesInfoFragment = { __typename: 'users', description?: string | null, nickname?: string | null, mutable_id: string, id: string, updated_at?: string | null, followersCollection?: { __typename: 'followingsConnection', edges: Array<{ __typename: 'followingsEdge', node: { __typename: 'followings', follower_id: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null } } }> } | null, followingsCollection?: { __typename: 'followingsConnection', edges: Array<{ __typename: 'followingsEdge', node: { __typename: 'followings', following_id: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null } } }> } | null, pentagramsCollection?: { __typename: 'pentagramsConnection', edges: Array<{ __typename: 'pentagramsEdge', node: { __typename: 'pentagrams', id: string, description?: string | null, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagram_nodesCollection?: { __typename: 'pentagram_nodesConnection', edges: Array<{ __typename: 'pentagram_nodesEdge', node: { __typename: 'pentagram_nodes', id: string, oeuvres: { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_update_recordsEdge', node: { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_upsert_recordsEdge', node: { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_remove_recordsEdge', node: { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_recover_recordsEdge', node: { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null } }> } | null, pentagram_revisionsCollection?: { __typename: 'pentagram_revisionsConnection', edges: Array<{ __typename: 'pentagram_revisionsEdge', node: { __typename: 'pentagram_revisions', id: string, created_at: string, pentagrams: { __typename: 'pentagrams', id: string }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', totalCount: number } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', totalCount: number } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', totalCount: number } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', totalCount: number } | null } }> } | null } }> } | null, pentagram_revisionsCollection?: { __typename: 'pentagram_revisionsConnection', edges: Array<{ __typename: 'pentagram_revisionsEdge', node: { __typename: 'pentagram_revisions', id: string, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagrams: { __typename: 'pentagrams', id: string, description?: string | null, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagram_nodesCollection?: { __typename: 'pentagram_nodesConnection', edges: Array<{ __typename: 'pentagram_nodesEdge', node: { __typename: 'pentagram_nodes', id: string, oeuvres: { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_update_recordsEdge', node: { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_upsert_recordsEdge', node: { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_remove_recordsEdge', node: { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_recover_recordsEdge', node: { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null } }> } | null, pentagram_revisionsCollection?: { __typename: 'pentagram_revisionsConnection', edges: Array<{ __typename: 'pentagram_revisionsEdge', node: { __typename: 'pentagram_revisions', id: string, created_at: string, pentagrams: { __typename: 'pentagrams', id: string }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', totalCount: number } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', totalCount: number } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', totalCount: number } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', totalCount: number } | null } }> } | null } } }> } | null };

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

export type InsertArtistsMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']['input']>;
  abstract?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type InsertArtistsMutation = { __typename: 'Mutation', insertIntoartistsCollection?: { __typename: 'artistsInsertResponse', records: Array<{ __typename: 'artists', id: string }> } | null };

export type InsertOeuvresMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type InsertOeuvresMutation = { __typename: 'Mutation', insertIntooeuvresCollection?: { __typename: 'oeuvresInsertResponse', records: Array<{ __typename: 'oeuvres', id: string }> } | null };

export type InsertGenresMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']['input']>;
  abstract?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type InsertGenresMutation = { __typename: 'Mutation', insertIntogenresCollection?: { __typename: 'genresInsertResponse', records: Array<{ __typename: 'genres', id: string }> } | null };

export type AuthInfoFragment = { __typename: 'users', id: string, mutable_id: string, nickname?: string | null, description?: string | null, followingsCollection?: { __typename: 'followingsConnection', edges: Array<{ __typename: 'followingsEdge', node: { __typename: 'followings', following_id: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null } } }> } | null };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetUserByIdQuery = { __typename: 'Query', usersCollection?: { __typename: 'usersConnection', edges: Array<{ __typename: 'usersEdge', node: { __typename: 'users', id: string, mutable_id: string, nickname?: string | null, description?: string | null, followingsCollection?: { __typename: 'followingsConnection', edges: Array<{ __typename: 'followingsEdge', node: { __typename: 'followings', following_id: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null } } }> } | null } }> } | null };

export type FeedInfoFragment = { __typename: 'pentagram_revisions', id: string, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagrams: { __typename: 'pentagrams', id: string, description?: string | null, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagram_nodesCollection?: { __typename: 'pentagram_nodesConnection', edges: Array<{ __typename: 'pentagram_nodesEdge', node: { __typename: 'pentagram_nodes', id: string, oeuvres: { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_update_recordsEdge', node: { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_upsert_recordsEdge', node: { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_remove_recordsEdge', node: { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_recover_recordsEdge', node: { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null } }> } | null, pentagram_revisionsCollection?: { __typename: 'pentagram_revisionsConnection', edges: Array<{ __typename: 'pentagram_revisionsEdge', node: { __typename: 'pentagram_revisions', id: string, created_at: string, pentagrams: { __typename: 'pentagrams', id: string }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', totalCount: number } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', totalCount: number } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', totalCount: number } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', totalCount: number } | null } }> } | null } };

export type GetFeedByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetFeedByIdQuery = { __typename: 'Query', usersCollection?: { __typename: 'usersConnection', edges: Array<{ __typename: 'usersEdge', node: { __typename: 'users', id: string, feed?: { __typename: 'pentagram_revisionsConnection', edges: Array<{ __typename: 'pentagram_revisionsEdge', node: { __typename: 'pentagram_revisions', id: string, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagrams: { __typename: 'pentagrams', id: string, description?: string | null, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagram_nodesCollection?: { __typename: 'pentagram_nodesConnection', edges: Array<{ __typename: 'pentagram_nodesEdge', node: { __typename: 'pentagram_nodes', id: string, oeuvres: { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_update_recordsEdge', node: { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_upsert_recordsEdge', node: { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_remove_recordsEdge', node: { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_recover_recordsEdge', node: { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null } }> } | null, pentagram_revisionsCollection?: { __typename: 'pentagram_revisionsConnection', edges: Array<{ __typename: 'pentagram_revisionsEdge', node: { __typename: 'pentagram_revisions', id: string, created_at: string, pentagrams: { __typename: 'pentagrams', id: string }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', totalCount: number } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', totalCount: number } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', totalCount: number } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', totalCount: number } | null } }> } | null } } }> } | null } }> } | null };

export type GetFollowRecommendationQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetFollowRecommendationQuery = { __typename: 'Query', usersCollection?: { __typename: 'usersConnection', edges: Array<{ __typename: 'usersEdge', node: { __typename: 'users', recommendation?: { __typename: 'usersConnection', edges: Array<{ __typename: 'usersEdge', node: { __typename: 'users', description?: string | null, nickname?: string | null, mutable_id: string, id: string, updated_at?: string | null, followersCollection?: { __typename: 'followingsConnection', edges: Array<{ __typename: 'followingsEdge', node: { __typename: 'followings', follower_id: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null } } }> } | null, followingsCollection?: { __typename: 'followingsConnection', edges: Array<{ __typename: 'followingsEdge', node: { __typename: 'followings', following_id: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null } } }> } | null, pentagramsCollection?: { __typename: 'pentagramsConnection', edges: Array<{ __typename: 'pentagramsEdge', node: { __typename: 'pentagrams', id: string, description?: string | null, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagram_nodesCollection?: { __typename: 'pentagram_nodesConnection', edges: Array<{ __typename: 'pentagram_nodesEdge', node: { __typename: 'pentagram_nodes', id: string, oeuvres: { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_update_recordsEdge', node: { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_upsert_recordsEdge', node: { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_remove_recordsEdge', node: { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_recover_recordsEdge', node: { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null } }> } | null, pentagram_revisionsCollection?: { __typename: 'pentagram_revisionsConnection', edges: Array<{ __typename: 'pentagram_revisionsEdge', node: { __typename: 'pentagram_revisions', id: string, created_at: string, pentagrams: { __typename: 'pentagrams', id: string }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', totalCount: number } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', totalCount: number } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', totalCount: number } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', totalCount: number } | null } }> } | null } }> } | null, pentagram_revisionsCollection?: { __typename: 'pentagram_revisionsConnection', edges: Array<{ __typename: 'pentagram_revisionsEdge', node: { __typename: 'pentagram_revisions', id: string, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagrams: { __typename: 'pentagrams', id: string, description?: string | null, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagram_nodesCollection?: { __typename: 'pentagram_nodesConnection', edges: Array<{ __typename: 'pentagram_nodesEdge', node: { __typename: 'pentagram_nodes', id: string, oeuvres: { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_update_recordsEdge', node: { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_upsert_recordsEdge', node: { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_remove_recordsEdge', node: { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_recover_recordsEdge', node: { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null } }> } | null, pentagram_revisionsCollection?: { __typename: 'pentagram_revisionsConnection', edges: Array<{ __typename: 'pentagram_revisionsEdge', node: { __typename: 'pentagram_revisions', id: string, created_at: string, pentagrams: { __typename: 'pentagrams', id: string }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', totalCount: number } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', totalCount: number } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', totalCount: number } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', totalCount: number } | null } }> } | null } } }> } | null } }> } | null } }> } | null };

export type SearchOeuvresQueryVariables = Exact<{
  keyword: Scalars['String']['input'];
}>;


export type SearchOeuvresQuery = { __typename: 'Query', oeuvresCollection?: { __typename: 'oeuvresConnection', edges: Array<{ __typename: 'oeuvresEdge', node: { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null } }> } | null };

export type SearchUsersQueryVariables = Exact<{
  keyword: Scalars['String']['input'];
}>;


export type SearchUsersQuery = { __typename: 'Query', usersCollection?: { __typename: 'usersConnection', edges: Array<{ __typename: 'usersEdge', node: { __typename: 'users', description?: string | null, nickname?: string | null, mutable_id: string, id: string, updated_at?: string | null, followersCollection?: { __typename: 'followingsConnection', edges: Array<{ __typename: 'followingsEdge', node: { __typename: 'followings', follower_id: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null } } }> } | null, followingsCollection?: { __typename: 'followingsConnection', edges: Array<{ __typename: 'followingsEdge', node: { __typename: 'followings', following_id: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null } } }> } | null, pentagramsCollection?: { __typename: 'pentagramsConnection', edges: Array<{ __typename: 'pentagramsEdge', node: { __typename: 'pentagrams', id: string, description?: string | null, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagram_nodesCollection?: { __typename: 'pentagram_nodesConnection', edges: Array<{ __typename: 'pentagram_nodesEdge', node: { __typename: 'pentagram_nodes', id: string, oeuvres: { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_update_recordsEdge', node: { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_upsert_recordsEdge', node: { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_remove_recordsEdge', node: { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_recover_recordsEdge', node: { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null } }> } | null, pentagram_revisionsCollection?: { __typename: 'pentagram_revisionsConnection', edges: Array<{ __typename: 'pentagram_revisionsEdge', node: { __typename: 'pentagram_revisions', id: string, created_at: string, pentagrams: { __typename: 'pentagrams', id: string }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', totalCount: number } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', totalCount: number } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', totalCount: number } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', totalCount: number } | null } }> } | null } }> } | null, pentagram_revisionsCollection?: { __typename: 'pentagram_revisionsConnection', edges: Array<{ __typename: 'pentagram_revisionsEdge', node: { __typename: 'pentagram_revisions', id: string, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagrams: { __typename: 'pentagrams', id: string, description?: string | null, created_at: string, users: { __typename: 'users', mutable_id: string, nickname?: string | null, id: string, updated_at?: string | null }, pentagram_nodesCollection?: { __typename: 'pentagram_nodesConnection', edges: Array<{ __typename: 'pentagram_nodesEdge', node: { __typename: 'pentagram_nodes', id: string, oeuvres: { __typename: 'oeuvres', description?: string | null, id: string, title: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', artists: { __typename: 'artists', id: string, name: string, updated_at?: string | null } } }> } | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', genres: { __typename: 'genres', id: string, name?: string | null, updated_at?: string | null } } }> } | null }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_update_recordsEdge', node: { __typename: 'pentagram_revision_update_records', id: string, current_angle: number, current_distance: number, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_upsert_recordsEdge', node: { __typename: 'pentagram_revision_upsert_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_remove_recordsEdge', node: { __typename: 'pentagram_revision_remove_records', id: string, previous_angle: number, previous_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', edges: Array<{ __typename: 'pentagram_revision_recover_recordsEdge', node: { __typename: 'pentagram_revision_recover_records', id: string, current_angle: number, current_distance: number, pentagram_nodes: { __typename: 'pentagram_nodes', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } }, pentagram_revisions: { __typename: 'pentagram_revisions', created_at: string } } }> } | null } }> } | null, pentagram_revisionsCollection?: { __typename: 'pentagram_revisionsConnection', edges: Array<{ __typename: 'pentagram_revisionsEdge', node: { __typename: 'pentagram_revisions', id: string, created_at: string, pentagrams: { __typename: 'pentagrams', id: string }, pentagram_revision_update_recordsCollection?: { __typename: 'pentagram_revision_update_recordsConnection', totalCount: number } | null, pentagram_revision_upsert_recordsCollection?: { __typename: 'pentagram_revision_upsert_recordsConnection', totalCount: number } | null, pentagram_revision_remove_recordsCollection?: { __typename: 'pentagram_revision_remove_recordsConnection', totalCount: number } | null, pentagram_revision_recover_recordsCollection?: { __typename: 'pentagram_revision_recover_recordsConnection', totalCount: number } | null } }> } | null } } }> } | null } }> } | null };

export type SearchArtistsQueryVariables = Exact<{
  keyword: Scalars['String']['input'];
}>;


export type SearchArtistsQuery = { __typename: 'Query', artistsCollection?: { __typename: 'artistsConnection', edges: Array<{ __typename: 'artistsEdge', node: { __typename: 'artists', abstract?: string | null, bio?: string | null, id: string, name: string, updated_at?: string | null, oeuvres_artistsCollection?: { __typename: 'oeuvres_artistsConnection', edges: Array<{ __typename: 'oeuvres_artistsEdge', node: { __typename: 'oeuvres_artists', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } } }> } | null } }> } | null };

export type SearchGenresQueryVariables = Exact<{
  keyword: Scalars['String']['input'];
}>;


export type SearchGenresQuery = { __typename: 'Query', genresCollection?: { __typename: 'genresConnection', edges: Array<{ __typename: 'genresEdge', node: { __typename: 'genres', abstract?: string | null, description?: string | null, id: string, name?: string | null, updated_at?: string | null, oeuvres_genresCollection?: { __typename: 'oeuvres_genresConnection', edges: Array<{ __typename: 'oeuvres_genresEdge', node: { __typename: 'oeuvres_genres', oeuvres: { __typename: 'oeuvres', id: string, title: string, updated_at?: string | null } } }> } | null } }> } | null };

export const ArtistsMinimalInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<ArtistsMinimalInfoFragment, unknown>;
export const OeuvresMinimalInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<OeuvresMinimalInfoFragment, unknown>;
export const ArtistsInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<ArtistsInfoFragment, unknown>;
export const GenresMinimalInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<GenresMinimalInfoFragment, unknown>;
export const GenresInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<GenresInfoFragment, unknown>;
export const OeuvresInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<OeuvresInfoFragment, unknown>;
export const MiniProfileInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<MiniProfileInfoFragment, unknown>;
export const UpdateRecordInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_update_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<UpdateRecordInfoFragment, unknown>;
export const UpsertRecordInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_upsert_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<UpsertRecordInfoFragment, unknown>;
export const RemoveRecordInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_remove_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<RemoveRecordInfoFragment, unknown>;
export const RecoverRecordInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_recover_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<RecoverRecordInfoFragment, unknown>;
export const PentagramNodesInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_nodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_update_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_upsert_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_remove_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_recover_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}}]} as unknown as DocumentNode<PentagramNodesInfoFragment, unknown>;
export const PentagramRevisionsMinimalInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<PentagramRevisionsMinimalInfoFragment, unknown>;
export const PentagramsSelectInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_update_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_upsert_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_remove_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_recover_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_nodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<PentagramsSelectInfoFragment, unknown>;
export const OeuvresExtensiveInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresExtensiveInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_update_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_upsert_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_remove_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_recover_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_nodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<OeuvresExtensiveInfoFragment, unknown>;
export const PentagramsUpdateInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsUpdateInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_update_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_upsert_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_remove_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_recover_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_nodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PentagramsUpdateInfoFragment, unknown>;
export const PentagramsSelectUserInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectUserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<PentagramsSelectUserInfoFragment, unknown>;
export const PentagramRevisionsInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_update_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_upsert_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_remove_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_recover_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}}]} as unknown as DocumentNode<PentagramRevisionsInfoFragment, unknown>;
export const FollowersMiniProfileFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowersMiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"followingsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<FollowersMiniProfileFragment, unknown>;
export const FollowingsMiniProfileFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowingsMiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"followingsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"following_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<FollowingsMiniProfileFragment, unknown>;
export const FeedInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FeedInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_update_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_upsert_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_remove_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_recover_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_nodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FeedInfoFragment, unknown>;
export const ProfilesInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfilesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"followersCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FollowersMiniProfile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"followingsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FollowingsMiniProfile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FeedInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_update_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_upsert_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_remove_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_recover_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_nodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowersMiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"followingsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowingsMiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"followingsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"following_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FeedInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}}]} as unknown as DocumentNode<ProfilesInfoFragment, unknown>;
export const AuthInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"followingsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FollowingsMiniProfile"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowingsMiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"followingsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"following_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AuthInfoFragment, unknown>;
export const UpdateProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mutableId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"updateusersCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nickname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mutable_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mutableId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const GetArtistInfoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArtistInfoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artistsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetArtistInfoByIdQuery, GetArtistInfoByIdQueryVariables>;
export const GetGenreInfoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getGenreInfoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetGenreInfoByIdQuery, GetGenreInfoByIdQueryVariables>;
export const GetOeuvreExtensiveInfoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOeuvreExtensiveInfoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresExtensiveInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_update_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_upsert_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_remove_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_recover_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_nodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresExtensiveInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOeuvreExtensiveInfoByIdQuery, GetOeuvreExtensiveInfoByIdQueryVariables>;
export const GetPentagramUpdateInfoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPentagramUpdateInfoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsUpdateInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_update_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_upsert_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_remove_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_recover_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_nodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsUpdateInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPentagramUpdateInfoByIdQuery, GetPentagramUpdateInfoByIdQueryVariables>;
export const GetPentagramSelectInfoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPentagramSelectInfoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_update_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_upsert_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_remove_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_recover_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_nodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPentagramSelectInfoByIdQuery, GetPentagramSelectInfoByIdQueryVariables>;
export const GetPentagramsSelectUserInfoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPentagramsSelectUserInfoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectUserInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectUserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]} as unknown as DocumentNode<GetPentagramsSelectUserInfoByIdQuery, GetPentagramsSelectUserInfoByIdQueryVariables>;
export const GetPentagramNodesInfoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPentagramNodesInfoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_update_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_upsert_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_remove_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_recover_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_nodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPentagramNodesInfoByIdQuery, GetPentagramNodesInfoByIdQueryVariables>;
export const GetPentagramRevisionsInfoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPentagramRevisionsInfoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_update_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_upsert_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_remove_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_recover_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPentagramRevisionsInfoByIdQuery, GetPentagramRevisionsInfoByIdQueryVariables>;
export const InsertFollowingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertFollowings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"followerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"followingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"insertIntofollowingsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"follower_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"followerId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"following_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"followingId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<InsertFollowingsMutation, InsertFollowingsMutationVariables>;
export const DeleteFollowingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteFollowings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"followerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"followingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"deleteFromfollowingsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"following_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"followingId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"follower_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"followerId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DeleteFollowingsMutation, DeleteFollowingsMutationVariables>;
export const InsertArtistsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertArtists"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"abstract"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"insertIntoartistsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"abstract"},"value":{"kind":"Variable","name":{"kind":"Name","value":"abstract"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"bio"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<InsertArtistsMutation, InsertArtistsMutationVariables>;
export const InsertOeuvresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertOeuvres"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"insertIntooeuvresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<InsertOeuvresMutation, InsertOeuvresMutationVariables>;
export const InsertGenresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertGenres"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"abstract"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"insertIntogenresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"abstract"},"value":{"kind":"Variable","name":{"kind":"Name","value":"abstract"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<InsertGenresMutation, InsertGenresMutationVariables>;
export const GetUserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"usersCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowingsMiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"followingsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"following_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"followingsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FollowingsMiniProfile"}}]}}]}}]} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetFeedByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFeedById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"usersCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"feed"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FeedInfo"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_update_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_upsert_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_remove_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_recover_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_nodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FeedInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}}]} as unknown as DocumentNode<GetFeedByIdQuery, GetFeedByIdQueryVariables>;
export const GetFollowRecommendationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFollowRecommendation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"usersCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"recommendation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfilesInfo"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowersMiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"followingsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowingsMiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"followingsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"following_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_update_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_upsert_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_remove_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_recover_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_nodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FeedInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfilesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"followersCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FollowersMiniProfile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"followingsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FollowingsMiniProfile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FeedInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetFollowRecommendationQuery, GetFollowRecommendationQueryVariables>;
export const SearchOeuvresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchOeuvres"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchOeuvresQuery, SearchOeuvresQueryVariables>;
export const SearchUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"usersCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"mutable_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfilesInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutable_id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowersMiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"followingsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowingsMiniProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"followingsConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"following_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_update_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_upsert_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_remove_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previous_angle"}},{"kind":"Field","name":{"kind":"Name","value":"previous_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revision_recover_records"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_angle"}},{"kind":"Field","name":{"kind":"Name","value":"current_distance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_nodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_update_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_upsert_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_remove_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revision_recover_recordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_nodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FeedInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pentagram_revisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagrams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfilesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"followersCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FollowersMiniProfile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"followingsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FollowingsMiniProfile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram_revisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FeedInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchUsersQuery, SearchUsersQueryVariables>;
export const SearchArtistsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchArtists"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artistsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_artistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchArtistsQuery, SearchArtistsQueryVariables>;
export const SearchGenresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchGenres"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres_genresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchGenresQuery, SearchGenresQueryVariables>;