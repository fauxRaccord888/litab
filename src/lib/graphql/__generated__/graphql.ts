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

export type Artists = Node & {
  __typename?: 'Artists';
  abstract?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  oeuvresArtistsCollection?: Maybe<OeuvresArtistsConnection>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};


export type ArtistsOeuvresArtistsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OeuvresArtistsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OeuvresArtistsOrderBy>>;
};

export type ArtistsConnection = {
  __typename?: 'ArtistsConnection';
  edges: Array<ArtistsEdge>;
  pageInfo: PageInfo;
};

export type ArtistsDeleteResponse = {
  __typename?: 'ArtistsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Artists>;
};

export type ArtistsEdge = {
  __typename?: 'ArtistsEdge';
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
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type ArtistsInsertInput = {
  abstract?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ArtistsInsertResponse = {
  __typename?: 'ArtistsInsertResponse';
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
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type ArtistsUpdateInput = {
  abstract?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ArtistsUpdateResponse = {
  __typename?: 'ArtistsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Artists>;
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

export type Cosmos = Node & {
  __typename?: 'Cosmos';
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  shootingStarColors: Array<Maybe<Scalars['String']['output']>>;
  shootingStarCount: Scalars['Int']['output'];
  sizeParam: Scalars['Float']['output'];
  speedParam: Scalars['Float']['output'];
  starCount: Scalars['Int']['output'];
  user: Users;
  userId: Scalars['UUID']['output'];
};

export type CosmosConnection = {
  __typename?: 'CosmosConnection';
  edges: Array<CosmosEdge>;
  pageInfo: PageInfo;
};

export type CosmosDeleteResponse = {
  __typename?: 'CosmosDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cosmos>;
};

export type CosmosEdge = {
  __typename?: 'CosmosEdge';
  cursor: Scalars['String']['output'];
  node: Cosmos;
};

export type CosmosFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CosmosFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CosmosFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CosmosFilter>>;
  shootingStarCount?: InputMaybe<IntFilter>;
  sizeParam?: InputMaybe<FloatFilter>;
  speedParam?: InputMaybe<FloatFilter>;
  starCount?: InputMaybe<IntFilter>;
  userId?: InputMaybe<UuidFilter>;
};

export type CosmosInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shootingStarColors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shootingStarCount?: InputMaybe<Scalars['Int']['input']>;
  sizeParam?: InputMaybe<Scalars['Float']['input']>;
  speedParam?: InputMaybe<Scalars['Float']['input']>;
  starCount?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type CosmosInsertResponse = {
  __typename?: 'CosmosInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cosmos>;
};

export type CosmosOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  shootingStarCount?: InputMaybe<OrderByDirection>;
  sizeParam?: InputMaybe<OrderByDirection>;
  speedParam?: InputMaybe<OrderByDirection>;
  starCount?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type CosmosUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shootingStarColors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shootingStarCount?: InputMaybe<Scalars['Int']['input']>;
  sizeParam?: InputMaybe<Scalars['Float']['input']>;
  speedParam?: InputMaybe<Scalars['Float']['input']>;
  starCount?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type CosmosUpdateResponse = {
  __typename?: 'CosmosUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cosmos>;
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

export type Feed = Node & {
  __typename?: 'Feed';
  id?: Maybe<Scalars['UUID']['output']>;
  items?: Maybe<PentagramRevisionsConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  recommendation?: Maybe<UsersConnection>;
};


export type FeedItemsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramRevisionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramRevisionsOrderBy>>;
};


export type FeedRecommendationArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UsersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type FeedConnection = {
  __typename?: 'FeedConnection';
  edges: Array<FeedEdge>;
  pageInfo: PageInfo;
};

export type FeedDeleteResponse = {
  __typename?: 'FeedDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Feed>;
};

export type FeedEdge = {
  __typename?: 'FeedEdge';
  cursor: Scalars['String']['output'];
  node: Feed;
};

export type FeedFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<FeedFilter>>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<FeedFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<FeedFilter>>;
};

export type FeedInsertInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type FeedInsertResponse = {
  __typename?: 'FeedInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Feed>;
};

export type FeedOrderBy = {
  id?: InputMaybe<OrderByDirection>;
};

export type FeedUpdateInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type FeedUpdateResponse = {
  __typename?: 'FeedUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Feed>;
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

export type Followings = Node & {
  __typename?: 'Followings';
  followerId: Scalars['UUID']['output'];
  follower_id: Users;
  followingId: Scalars['UUID']['output'];
  following_id: Users;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type FollowingsConnection = {
  __typename?: 'FollowingsConnection';
  edges: Array<FollowingsEdge>;
  pageInfo: PageInfo;
};

export type FollowingsDeleteResponse = {
  __typename?: 'FollowingsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Followings>;
};

export type FollowingsEdge = {
  __typename?: 'FollowingsEdge';
  cursor: Scalars['String']['output'];
  node: Followings;
};

export type FollowingsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<FollowingsFilter>>;
  followerId?: InputMaybe<UuidFilter>;
  followingId?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<FollowingsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<FollowingsFilter>>;
};

export type FollowingsInsertInput = {
  followerId?: InputMaybe<Scalars['UUID']['input']>;
  followingId?: InputMaybe<Scalars['UUID']['input']>;
};

export type FollowingsInsertResponse = {
  __typename?: 'FollowingsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Followings>;
};

export type FollowingsOrderBy = {
  followerId?: InputMaybe<OrderByDirection>;
  followingId?: InputMaybe<OrderByDirection>;
};

export type FollowingsUpdateInput = {
  followerId?: InputMaybe<Scalars['UUID']['input']>;
  followingId?: InputMaybe<Scalars['UUID']['input']>;
};

export type FollowingsUpdateResponse = {
  __typename?: 'FollowingsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Followings>;
};

export type Genres = Node & {
  __typename?: 'Genres';
  abstract?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  oeuvresGenresCollection?: Maybe<OeuvresGenresConnection>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};


export type GenresOeuvresGenresCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OeuvresGenresFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OeuvresGenresOrderBy>>;
};

export type GenresConnection = {
  __typename?: 'GenresConnection';
  edges: Array<GenresEdge>;
  pageInfo: PageInfo;
};

export type GenresDeleteResponse = {
  __typename?: 'GenresDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Genres>;
};

export type GenresEdge = {
  __typename?: 'GenresEdge';
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
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type GenresInsertInput = {
  abstract?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type GenresInsertResponse = {
  __typename?: 'GenresInsertResponse';
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
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type GenresUpdateInput = {
  abstract?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type GenresUpdateResponse = {
  __typename?: 'GenresUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Genres>;
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
  /** Deletes zero or more records from the `Artists` collection */
  deleteFromArtistsCollection: ArtistsDeleteResponse;
  /** Deletes zero or more records from the `Cosmos` collection */
  deleteFromCosmosCollection: CosmosDeleteResponse;
  /** Deletes zero or more records from the `Feed` collection */
  deleteFromFeedCollection: FeedDeleteResponse;
  /** Deletes zero or more records from the `Followings` collection */
  deleteFromFollowingsCollection: FollowingsDeleteResponse;
  /** Deletes zero or more records from the `Genres` collection */
  deleteFromGenresCollection: GenresDeleteResponse;
  /** Deletes zero or more records from the `OeuvresArtists` collection */
  deleteFromOeuvresArtistsCollection: OeuvresArtistsDeleteResponse;
  /** Deletes zero or more records from the `Oeuvres` collection */
  deleteFromOeuvresCollection: OeuvresDeleteResponse;
  /** Deletes zero or more records from the `OeuvresGenres` collection */
  deleteFromOeuvresGenresCollection: OeuvresGenresDeleteResponse;
  /** Deletes zero or more records from the `PentagramNodes` collection */
  deleteFromPentagramNodesCollection: PentagramNodesDeleteResponse;
  /** Deletes zero or more records from the `PentagramRevisionRecoverRecords` collection */
  deleteFromPentagramRevisionRecoverRecordsCollection: PentagramRevisionRecoverRecordsDeleteResponse;
  /** Deletes zero or more records from the `PentagramRevisionRemoveRecords` collection */
  deleteFromPentagramRevisionRemoveRecordsCollection: PentagramRevisionRemoveRecordsDeleteResponse;
  /** Deletes zero or more records from the `PentagramRevisionUpdateRecords` collection */
  deleteFromPentagramRevisionUpdateRecordsCollection: PentagramRevisionUpdateRecordsDeleteResponse;
  /** Deletes zero or more records from the `PentagramRevisionUpsertRecords` collection */
  deleteFromPentagramRevisionUpsertRecordsCollection: PentagramRevisionUpsertRecordsDeleteResponse;
  /** Deletes zero or more records from the `PentagramRevisions` collection */
  deleteFromPentagramRevisionsCollection: PentagramRevisionsDeleteResponse;
  /** Deletes zero or more records from the `Pentagrams` collection */
  deleteFromPentagramsCollection: PentagramsDeleteResponse;
  /** Deletes zero or more records from the `Shadows` collection */
  deleteFromShadowsCollection: ShadowsDeleteResponse;
  /** Deletes zero or more records from the `Users` collection */
  deleteFromUsersCollection: UsersDeleteResponse;
  /** Deletes zero or more records from the `Worley` collection */
  deleteFromWorleyCollection: WorleyDeleteResponse;
  /** Adds one or more `Artists` records to the collection */
  insertIntoArtistsCollection?: Maybe<ArtistsInsertResponse>;
  /** Adds one or more `Cosmos` records to the collection */
  insertIntoCosmosCollection?: Maybe<CosmosInsertResponse>;
  /** Adds one or more `Feed` records to the collection */
  insertIntoFeedCollection?: Maybe<FeedInsertResponse>;
  /** Adds one or more `Followings` records to the collection */
  insertIntoFollowingsCollection?: Maybe<FollowingsInsertResponse>;
  /** Adds one or more `Genres` records to the collection */
  insertIntoGenresCollection?: Maybe<GenresInsertResponse>;
  /** Adds one or more `OeuvresArtists` records to the collection */
  insertIntoOeuvresArtistsCollection?: Maybe<OeuvresArtistsInsertResponse>;
  /** Adds one or more `Oeuvres` records to the collection */
  insertIntoOeuvresCollection?: Maybe<OeuvresInsertResponse>;
  /** Adds one or more `OeuvresGenres` records to the collection */
  insertIntoOeuvresGenresCollection?: Maybe<OeuvresGenresInsertResponse>;
  /** Adds one or more `PentagramNodes` records to the collection */
  insertIntoPentagramNodesCollection?: Maybe<PentagramNodesInsertResponse>;
  /** Adds one or more `PentagramRevisionRecoverRecords` records to the collection */
  insertIntoPentagramRevisionRecoverRecordsCollection?: Maybe<PentagramRevisionRecoverRecordsInsertResponse>;
  /** Adds one or more `PentagramRevisionRemoveRecords` records to the collection */
  insertIntoPentagramRevisionRemoveRecordsCollection?: Maybe<PentagramRevisionRemoveRecordsInsertResponse>;
  /** Adds one or more `PentagramRevisionUpdateRecords` records to the collection */
  insertIntoPentagramRevisionUpdateRecordsCollection?: Maybe<PentagramRevisionUpdateRecordsInsertResponse>;
  /** Adds one or more `PentagramRevisionUpsertRecords` records to the collection */
  insertIntoPentagramRevisionUpsertRecordsCollection?: Maybe<PentagramRevisionUpsertRecordsInsertResponse>;
  /** Adds one or more `PentagramRevisions` records to the collection */
  insertIntoPentagramRevisionsCollection?: Maybe<PentagramRevisionsInsertResponse>;
  /** Adds one or more `Pentagrams` records to the collection */
  insertIntoPentagramsCollection?: Maybe<PentagramsInsertResponse>;
  /** Adds one or more `Shadows` records to the collection */
  insertIntoShadowsCollection?: Maybe<ShadowsInsertResponse>;
  /** Adds one or more `Users` records to the collection */
  insertIntoUsersCollection?: Maybe<UsersInsertResponse>;
  /** Adds one or more `Worley` records to the collection */
  insertIntoWorleyCollection?: Maybe<WorleyInsertResponse>;
  /** Updates zero or more records in the `Artists` collection */
  updateArtistsCollection: ArtistsUpdateResponse;
  /** Updates zero or more records in the `Cosmos` collection */
  updateCosmosCollection: CosmosUpdateResponse;
  /** Updates zero or more records in the `Feed` collection */
  updateFeedCollection: FeedUpdateResponse;
  /** Updates zero or more records in the `Followings` collection */
  updateFollowingsCollection: FollowingsUpdateResponse;
  /** Updates zero or more records in the `Genres` collection */
  updateGenresCollection: GenresUpdateResponse;
  /** Updates zero or more records in the `OeuvresArtists` collection */
  updateOeuvresArtistsCollection: OeuvresArtistsUpdateResponse;
  /** Updates zero or more records in the `Oeuvres` collection */
  updateOeuvresCollection: OeuvresUpdateResponse;
  /** Updates zero or more records in the `OeuvresGenres` collection */
  updateOeuvresGenresCollection: OeuvresGenresUpdateResponse;
  /** Updates zero or more records in the `PentagramNodes` collection */
  updatePentagramNodesCollection: PentagramNodesUpdateResponse;
  /** Updates zero or more records in the `PentagramRevisionRecoverRecords` collection */
  updatePentagramRevisionRecoverRecordsCollection: PentagramRevisionRecoverRecordsUpdateResponse;
  /** Updates zero or more records in the `PentagramRevisionRemoveRecords` collection */
  updatePentagramRevisionRemoveRecordsCollection: PentagramRevisionRemoveRecordsUpdateResponse;
  /** Updates zero or more records in the `PentagramRevisionUpdateRecords` collection */
  updatePentagramRevisionUpdateRecordsCollection: PentagramRevisionUpdateRecordsUpdateResponse;
  /** Updates zero or more records in the `PentagramRevisionUpsertRecords` collection */
  updatePentagramRevisionUpsertRecordsCollection: PentagramRevisionUpsertRecordsUpdateResponse;
  /** Updates zero or more records in the `PentagramRevisions` collection */
  updatePentagramRevisionsCollection: PentagramRevisionsUpdateResponse;
  /** Updates zero or more records in the `Pentagrams` collection */
  updatePentagramsCollection: PentagramsUpdateResponse;
  /** Updates zero or more records in the `Shadows` collection */
  updateShadowsCollection: ShadowsUpdateResponse;
  /** Updates zero or more records in the `Users` collection */
  updateUsersCollection: UsersUpdateResponse;
  /** Updates zero or more records in the `Worley` collection */
  updateWorleyCollection: WorleyUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromArtistsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ArtistsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromCosmosCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CosmosFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromFeedCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<FeedFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromFollowingsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<FollowingsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGenresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GenresFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromOeuvresArtistsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OeuvresArtistsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromOeuvresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OeuvresFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromOeuvresGenresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OeuvresGenresFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromPentagramNodesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PentagramNodesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromPentagramRevisionRecoverRecordsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PentagramRevisionRecoverRecordsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromPentagramRevisionRemoveRecordsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PentagramRevisionRemoveRecordsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromPentagramRevisionUpdateRecordsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PentagramRevisionUpdateRecordsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromPentagramRevisionUpsertRecordsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PentagramRevisionUpsertRecordsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromPentagramRevisionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PentagramRevisionsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromPentagramsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PentagramsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromShadowsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ShadowsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromUsersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UsersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromWorleyCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<WorleyFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoArtistsCollectionArgs = {
  objects: Array<ArtistsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoCosmosCollectionArgs = {
  objects: Array<CosmosInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoFeedCollectionArgs = {
  objects: Array<FeedInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoFollowingsCollectionArgs = {
  objects: Array<FollowingsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGenresCollectionArgs = {
  objects: Array<GenresInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoOeuvresArtistsCollectionArgs = {
  objects: Array<OeuvresArtistsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoOeuvresCollectionArgs = {
  objects: Array<OeuvresInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoOeuvresGenresCollectionArgs = {
  objects: Array<OeuvresGenresInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoPentagramNodesCollectionArgs = {
  objects: Array<PentagramNodesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoPentagramRevisionRecoverRecordsCollectionArgs = {
  objects: Array<PentagramRevisionRecoverRecordsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoPentagramRevisionRemoveRecordsCollectionArgs = {
  objects: Array<PentagramRevisionRemoveRecordsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoPentagramRevisionUpdateRecordsCollectionArgs = {
  objects: Array<PentagramRevisionUpdateRecordsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoPentagramRevisionUpsertRecordsCollectionArgs = {
  objects: Array<PentagramRevisionUpsertRecordsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoPentagramRevisionsCollectionArgs = {
  objects: Array<PentagramRevisionsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoPentagramsCollectionArgs = {
  objects: Array<PentagramsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoShadowsCollectionArgs = {
  objects: Array<ShadowsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoUsersCollectionArgs = {
  objects: Array<UsersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoWorleyCollectionArgs = {
  objects: Array<WorleyInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateArtistsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ArtistsFilter>;
  set: ArtistsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateCosmosCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CosmosFilter>;
  set: CosmosUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateFeedCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<FeedFilter>;
  set: FeedUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateFollowingsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<FollowingsFilter>;
  set: FollowingsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGenresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GenresFilter>;
  set: GenresUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateOeuvresArtistsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OeuvresArtistsFilter>;
  set: OeuvresArtistsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateOeuvresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OeuvresFilter>;
  set: OeuvresUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateOeuvresGenresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OeuvresGenresFilter>;
  set: OeuvresGenresUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatePentagramNodesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PentagramNodesFilter>;
  set: PentagramNodesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatePentagramRevisionRecoverRecordsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PentagramRevisionRecoverRecordsFilter>;
  set: PentagramRevisionRecoverRecordsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatePentagramRevisionRemoveRecordsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PentagramRevisionRemoveRecordsFilter>;
  set: PentagramRevisionRemoveRecordsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatePentagramRevisionUpdateRecordsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PentagramRevisionUpdateRecordsFilter>;
  set: PentagramRevisionUpdateRecordsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatePentagramRevisionUpsertRecordsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PentagramRevisionUpsertRecordsFilter>;
  set: PentagramRevisionUpsertRecordsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatePentagramRevisionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PentagramRevisionsFilter>;
  set: PentagramRevisionsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatePentagramsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PentagramsFilter>;
  set: PentagramsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateShadowsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ShadowsFilter>;
  set: ShadowsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateUsersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UsersFilter>;
  set: UsersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateWorleyCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<WorleyFilter>;
  set: WorleyUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

export type Oeuvres = Node & {
  __typename?: 'Oeuvres';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  oeuvresArtistsCollection?: Maybe<OeuvresArtistsConnection>;
  oeuvresGenresCollection?: Maybe<OeuvresGenresConnection>;
  pentagramNodesCollection?: Maybe<PentagramNodesConnection>;
  releaseDate?: Maybe<Scalars['Date']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};


export type OeuvresOeuvresArtistsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OeuvresArtistsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OeuvresArtistsOrderBy>>;
};


export type OeuvresOeuvresGenresCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OeuvresGenresFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OeuvresGenresOrderBy>>;
};


export type OeuvresPentagramNodesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramNodesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramNodesOrderBy>>;
};

export type OeuvresArtists = Node & {
  __typename?: 'OeuvresArtists';
  artist: Artists;
  artistId: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  oeuvre: Oeuvres;
  oeuvreId: Scalars['UUID']['output'];
};

export type OeuvresArtistsConnection = {
  __typename?: 'OeuvresArtistsConnection';
  edges: Array<OeuvresArtistsEdge>;
  pageInfo: PageInfo;
};

export type OeuvresArtistsDeleteResponse = {
  __typename?: 'OeuvresArtistsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OeuvresArtists>;
};

export type OeuvresArtistsEdge = {
  __typename?: 'OeuvresArtistsEdge';
  cursor: Scalars['String']['output'];
  node: OeuvresArtists;
};

export type OeuvresArtistsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<OeuvresArtistsFilter>>;
  artistId?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<OeuvresArtistsFilter>;
  oeuvreId?: InputMaybe<UuidFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<OeuvresArtistsFilter>>;
};

export type OeuvresArtistsInsertInput = {
  artistId?: InputMaybe<Scalars['UUID']['input']>;
  oeuvreId?: InputMaybe<Scalars['UUID']['input']>;
};

export type OeuvresArtistsInsertResponse = {
  __typename?: 'OeuvresArtistsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OeuvresArtists>;
};

export type OeuvresArtistsOrderBy = {
  artistId?: InputMaybe<OrderByDirection>;
  oeuvreId?: InputMaybe<OrderByDirection>;
};

export type OeuvresArtistsUpdateInput = {
  artistId?: InputMaybe<Scalars['UUID']['input']>;
  oeuvreId?: InputMaybe<Scalars['UUID']['input']>;
};

export type OeuvresArtistsUpdateResponse = {
  __typename?: 'OeuvresArtistsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OeuvresArtists>;
};

export type OeuvresConnection = {
  __typename?: 'OeuvresConnection';
  edges: Array<OeuvresEdge>;
  pageInfo: PageInfo;
};

export type OeuvresDeleteResponse = {
  __typename?: 'OeuvresDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Oeuvres>;
};

export type OeuvresEdge = {
  __typename?: 'OeuvresEdge';
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
  releaseDate?: InputMaybe<DateFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type OeuvresGenres = Node & {
  __typename?: 'OeuvresGenres';
  genre: Genres;
  genreId: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  oeuvre: Oeuvres;
  oeuvreId: Scalars['UUID']['output'];
};

export type OeuvresGenresConnection = {
  __typename?: 'OeuvresGenresConnection';
  edges: Array<OeuvresGenresEdge>;
  pageInfo: PageInfo;
};

export type OeuvresGenresDeleteResponse = {
  __typename?: 'OeuvresGenresDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OeuvresGenres>;
};

export type OeuvresGenresEdge = {
  __typename?: 'OeuvresGenresEdge';
  cursor: Scalars['String']['output'];
  node: OeuvresGenres;
};

export type OeuvresGenresFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<OeuvresGenresFilter>>;
  genreId?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<OeuvresGenresFilter>;
  oeuvreId?: InputMaybe<UuidFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<OeuvresGenresFilter>>;
};

export type OeuvresGenresInsertInput = {
  genreId?: InputMaybe<Scalars['UUID']['input']>;
  oeuvreId?: InputMaybe<Scalars['UUID']['input']>;
};

export type OeuvresGenresInsertResponse = {
  __typename?: 'OeuvresGenresInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OeuvresGenres>;
};

export type OeuvresGenresOrderBy = {
  genreId?: InputMaybe<OrderByDirection>;
  oeuvreId?: InputMaybe<OrderByDirection>;
};

export type OeuvresGenresUpdateInput = {
  genreId?: InputMaybe<Scalars['UUID']['input']>;
  oeuvreId?: InputMaybe<Scalars['UUID']['input']>;
};

export type OeuvresGenresUpdateResponse = {
  __typename?: 'OeuvresGenresUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OeuvresGenres>;
};

export type OeuvresInsertInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  releaseDate?: InputMaybe<Scalars['Date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type OeuvresInsertResponse = {
  __typename?: 'OeuvresInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Oeuvres>;
};

export type OeuvresOrderBy = {
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  releaseDate?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type OeuvresUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  releaseDate?: InputMaybe<Scalars['Date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type OeuvresUpdateResponse = {
  __typename?: 'OeuvresUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Oeuvres>;
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

export type PentagramNodes = Node & {
  __typename?: 'PentagramNodes';
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  oeuvre: Oeuvres;
  oeuvreId: Scalars['UUID']['output'];
  pentagram: Pentagrams;
  pentagramId: Scalars['UUID']['output'];
  pentagramRevisionRecoverRecordsCollection?: Maybe<PentagramRevisionRecoverRecordsConnection>;
  pentagramRevisionRemoveRecordsCollection?: Maybe<PentagramRevisionRemoveRecordsConnection>;
  pentagramRevisionUpdateRecordsCollection?: Maybe<PentagramRevisionUpdateRecordsConnection>;
  pentagramRevisionUpsertRecordsCollection?: Maybe<PentagramRevisionUpsertRecordsConnection>;
};


export type PentagramNodesPentagramRevisionRecoverRecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramRevisionRecoverRecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramRevisionRecoverRecordsOrderBy>>;
};


export type PentagramNodesPentagramRevisionRemoveRecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramRevisionRemoveRecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramRevisionRemoveRecordsOrderBy>>;
};


export type PentagramNodesPentagramRevisionUpdateRecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramRevisionUpdateRecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramRevisionUpdateRecordsOrderBy>>;
};


export type PentagramNodesPentagramRevisionUpsertRecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramRevisionUpsertRecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramRevisionUpsertRecordsOrderBy>>;
};

export type PentagramNodesConnection = {
  __typename?: 'PentagramNodesConnection';
  edges: Array<PentagramNodesEdge>;
  pageInfo: PageInfo;
};

export type PentagramNodesDeleteResponse = {
  __typename?: 'PentagramNodesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PentagramNodes>;
};

export type PentagramNodesEdge = {
  __typename?: 'PentagramNodesEdge';
  cursor: Scalars['String']['output'];
  node: PentagramNodes;
};

export type PentagramNodesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PentagramNodesFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<PentagramNodesFilter>;
  oeuvreId?: InputMaybe<UuidFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PentagramNodesFilter>>;
  pentagramId?: InputMaybe<UuidFilter>;
};

export type PentagramNodesInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  oeuvreId?: InputMaybe<Scalars['UUID']['input']>;
  pentagramId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PentagramNodesInsertResponse = {
  __typename?: 'PentagramNodesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PentagramNodes>;
};

export type PentagramNodesOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  oeuvreId?: InputMaybe<OrderByDirection>;
  pentagramId?: InputMaybe<OrderByDirection>;
};

export type PentagramNodesUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  oeuvreId?: InputMaybe<Scalars['UUID']['input']>;
  pentagramId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PentagramNodesUpdateResponse = {
  __typename?: 'PentagramNodesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PentagramNodes>;
};

export type PentagramRevisionRecoverRecords = Node & {
  __typename?: 'PentagramRevisionRecoverRecords';
  currentAngle: Scalars['Int']['output'];
  currentDistance: Scalars['Int']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pentagramNode: PentagramNodes;
  pentagramNodeId: Scalars['UUID']['output'];
  revision: PentagramRevisions;
  revisionId: Scalars['UUID']['output'];
};

export type PentagramRevisionRecoverRecordsConnection = {
  __typename?: 'PentagramRevisionRecoverRecordsConnection';
  edges: Array<PentagramRevisionRecoverRecordsEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type PentagramRevisionRecoverRecordsDeleteResponse = {
  __typename?: 'PentagramRevisionRecoverRecordsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PentagramRevisionRecoverRecords>;
};

export type PentagramRevisionRecoverRecordsEdge = {
  __typename?: 'PentagramRevisionRecoverRecordsEdge';
  cursor: Scalars['String']['output'];
  node: PentagramRevisionRecoverRecords;
};

export type PentagramRevisionRecoverRecordsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PentagramRevisionRecoverRecordsFilter>>;
  currentAngle?: InputMaybe<IntFilter>;
  currentDistance?: InputMaybe<IntFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<PentagramRevisionRecoverRecordsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PentagramRevisionRecoverRecordsFilter>>;
  pentagramNodeId?: InputMaybe<UuidFilter>;
  revisionId?: InputMaybe<UuidFilter>;
};

export type PentagramRevisionRecoverRecordsInsertInput = {
  currentAngle?: InputMaybe<Scalars['Int']['input']>;
  currentDistance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  pentagramNodeId?: InputMaybe<Scalars['UUID']['input']>;
  revisionId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PentagramRevisionRecoverRecordsInsertResponse = {
  __typename?: 'PentagramRevisionRecoverRecordsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PentagramRevisionRecoverRecords>;
};

export type PentagramRevisionRecoverRecordsOrderBy = {
  currentAngle?: InputMaybe<OrderByDirection>;
  currentDistance?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  pentagramNodeId?: InputMaybe<OrderByDirection>;
  revisionId?: InputMaybe<OrderByDirection>;
};

export type PentagramRevisionRecoverRecordsUpdateInput = {
  currentAngle?: InputMaybe<Scalars['Int']['input']>;
  currentDistance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  pentagramNodeId?: InputMaybe<Scalars['UUID']['input']>;
  revisionId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PentagramRevisionRecoverRecordsUpdateResponse = {
  __typename?: 'PentagramRevisionRecoverRecordsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PentagramRevisionRecoverRecords>;
};

export type PentagramRevisionRemoveRecords = Node & {
  __typename?: 'PentagramRevisionRemoveRecords';
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pentagramNode: PentagramNodes;
  pentagramNodeId: Scalars['UUID']['output'];
  previousAngle: Scalars['Int']['output'];
  previousDistance: Scalars['Int']['output'];
  revision: PentagramRevisions;
  revisionId: Scalars['UUID']['output'];
};

export type PentagramRevisionRemoveRecordsConnection = {
  __typename?: 'PentagramRevisionRemoveRecordsConnection';
  edges: Array<PentagramRevisionRemoveRecordsEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type PentagramRevisionRemoveRecordsDeleteResponse = {
  __typename?: 'PentagramRevisionRemoveRecordsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PentagramRevisionRemoveRecords>;
};

export type PentagramRevisionRemoveRecordsEdge = {
  __typename?: 'PentagramRevisionRemoveRecordsEdge';
  cursor: Scalars['String']['output'];
  node: PentagramRevisionRemoveRecords;
};

export type PentagramRevisionRemoveRecordsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PentagramRevisionRemoveRecordsFilter>>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<PentagramRevisionRemoveRecordsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PentagramRevisionRemoveRecordsFilter>>;
  pentagramNodeId?: InputMaybe<UuidFilter>;
  previousAngle?: InputMaybe<IntFilter>;
  previousDistance?: InputMaybe<IntFilter>;
  revisionId?: InputMaybe<UuidFilter>;
};

export type PentagramRevisionRemoveRecordsInsertInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  pentagramNodeId?: InputMaybe<Scalars['UUID']['input']>;
  previousAngle?: InputMaybe<Scalars['Int']['input']>;
  previousDistance?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PentagramRevisionRemoveRecordsInsertResponse = {
  __typename?: 'PentagramRevisionRemoveRecordsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PentagramRevisionRemoveRecords>;
};

export type PentagramRevisionRemoveRecordsOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  pentagramNodeId?: InputMaybe<OrderByDirection>;
  previousAngle?: InputMaybe<OrderByDirection>;
  previousDistance?: InputMaybe<OrderByDirection>;
  revisionId?: InputMaybe<OrderByDirection>;
};

export type PentagramRevisionRemoveRecordsUpdateInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  pentagramNodeId?: InputMaybe<Scalars['UUID']['input']>;
  previousAngle?: InputMaybe<Scalars['Int']['input']>;
  previousDistance?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PentagramRevisionRemoveRecordsUpdateResponse = {
  __typename?: 'PentagramRevisionRemoveRecordsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PentagramRevisionRemoveRecords>;
};

export type PentagramRevisionUpdateRecords = Node & {
  __typename?: 'PentagramRevisionUpdateRecords';
  currentAngle: Scalars['Int']['output'];
  currentDistance: Scalars['Int']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pentagramNode: PentagramNodes;
  pentagramNodeId: Scalars['UUID']['output'];
  previousAngle: Scalars['Int']['output'];
  previousDistance: Scalars['Int']['output'];
  revision: PentagramRevisions;
  revisionId: Scalars['UUID']['output'];
};

export type PentagramRevisionUpdateRecordsConnection = {
  __typename?: 'PentagramRevisionUpdateRecordsConnection';
  edges: Array<PentagramRevisionUpdateRecordsEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type PentagramRevisionUpdateRecordsDeleteResponse = {
  __typename?: 'PentagramRevisionUpdateRecordsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PentagramRevisionUpdateRecords>;
};

export type PentagramRevisionUpdateRecordsEdge = {
  __typename?: 'PentagramRevisionUpdateRecordsEdge';
  cursor: Scalars['String']['output'];
  node: PentagramRevisionUpdateRecords;
};

export type PentagramRevisionUpdateRecordsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PentagramRevisionUpdateRecordsFilter>>;
  currentAngle?: InputMaybe<IntFilter>;
  currentDistance?: InputMaybe<IntFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<PentagramRevisionUpdateRecordsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PentagramRevisionUpdateRecordsFilter>>;
  pentagramNodeId?: InputMaybe<UuidFilter>;
  previousAngle?: InputMaybe<IntFilter>;
  previousDistance?: InputMaybe<IntFilter>;
  revisionId?: InputMaybe<UuidFilter>;
};

export type PentagramRevisionUpdateRecordsInsertInput = {
  currentAngle?: InputMaybe<Scalars['Int']['input']>;
  currentDistance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  pentagramNodeId?: InputMaybe<Scalars['UUID']['input']>;
  previousAngle?: InputMaybe<Scalars['Int']['input']>;
  previousDistance?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PentagramRevisionUpdateRecordsInsertResponse = {
  __typename?: 'PentagramRevisionUpdateRecordsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PentagramRevisionUpdateRecords>;
};

export type PentagramRevisionUpdateRecordsOrderBy = {
  currentAngle?: InputMaybe<OrderByDirection>;
  currentDistance?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  pentagramNodeId?: InputMaybe<OrderByDirection>;
  previousAngle?: InputMaybe<OrderByDirection>;
  previousDistance?: InputMaybe<OrderByDirection>;
  revisionId?: InputMaybe<OrderByDirection>;
};

export type PentagramRevisionUpdateRecordsUpdateInput = {
  currentAngle?: InputMaybe<Scalars['Int']['input']>;
  currentDistance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  pentagramNodeId?: InputMaybe<Scalars['UUID']['input']>;
  previousAngle?: InputMaybe<Scalars['Int']['input']>;
  previousDistance?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PentagramRevisionUpdateRecordsUpdateResponse = {
  __typename?: 'PentagramRevisionUpdateRecordsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PentagramRevisionUpdateRecords>;
};

export type PentagramRevisionUpsertRecords = Node & {
  __typename?: 'PentagramRevisionUpsertRecords';
  currentAngle: Scalars['Int']['output'];
  currentDistance: Scalars['Int']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pentagramNode: PentagramNodes;
  pentagramNodeId: Scalars['UUID']['output'];
  revision: PentagramRevisions;
  revisionId: Scalars['UUID']['output'];
};

export type PentagramRevisionUpsertRecordsConnection = {
  __typename?: 'PentagramRevisionUpsertRecordsConnection';
  edges: Array<PentagramRevisionUpsertRecordsEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type PentagramRevisionUpsertRecordsDeleteResponse = {
  __typename?: 'PentagramRevisionUpsertRecordsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PentagramRevisionUpsertRecords>;
};

export type PentagramRevisionUpsertRecordsEdge = {
  __typename?: 'PentagramRevisionUpsertRecordsEdge';
  cursor: Scalars['String']['output'];
  node: PentagramRevisionUpsertRecords;
};

export type PentagramRevisionUpsertRecordsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PentagramRevisionUpsertRecordsFilter>>;
  currentAngle?: InputMaybe<IntFilter>;
  currentDistance?: InputMaybe<IntFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<PentagramRevisionUpsertRecordsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PentagramRevisionUpsertRecordsFilter>>;
  pentagramNodeId?: InputMaybe<UuidFilter>;
  revisionId?: InputMaybe<UuidFilter>;
};

export type PentagramRevisionUpsertRecordsInsertInput = {
  currentAngle?: InputMaybe<Scalars['Int']['input']>;
  currentDistance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  pentagramNodeId?: InputMaybe<Scalars['UUID']['input']>;
  revisionId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PentagramRevisionUpsertRecordsInsertResponse = {
  __typename?: 'PentagramRevisionUpsertRecordsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PentagramRevisionUpsertRecords>;
};

export type PentagramRevisionUpsertRecordsOrderBy = {
  currentAngle?: InputMaybe<OrderByDirection>;
  currentDistance?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  pentagramNodeId?: InputMaybe<OrderByDirection>;
  revisionId?: InputMaybe<OrderByDirection>;
};

export type PentagramRevisionUpsertRecordsUpdateInput = {
  currentAngle?: InputMaybe<Scalars['Int']['input']>;
  currentDistance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  pentagramNodeId?: InputMaybe<Scalars['UUID']['input']>;
  revisionId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PentagramRevisionUpsertRecordsUpdateResponse = {
  __typename?: 'PentagramRevisionUpsertRecordsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PentagramRevisionUpsertRecords>;
};

export type PentagramRevisions = Node & {
  __typename?: 'PentagramRevisions';
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pentagram: Pentagrams;
  pentagramId: Scalars['UUID']['output'];
  pentagramRevisionRecoverRecordsCollection?: Maybe<PentagramRevisionRecoverRecordsConnection>;
  pentagramRevisionRemoveRecordsCollection?: Maybe<PentagramRevisionRemoveRecordsConnection>;
  pentagramRevisionUpdateRecordsCollection?: Maybe<PentagramRevisionUpdateRecordsConnection>;
  pentagramRevisionUpsertRecordsCollection?: Maybe<PentagramRevisionUpsertRecordsConnection>;
  user: Users;
  userId: Scalars['UUID']['output'];
};


export type PentagramRevisionsPentagramRevisionRecoverRecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramRevisionRecoverRecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramRevisionRecoverRecordsOrderBy>>;
};


export type PentagramRevisionsPentagramRevisionRemoveRecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramRevisionRemoveRecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramRevisionRemoveRecordsOrderBy>>;
};


export type PentagramRevisionsPentagramRevisionUpdateRecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramRevisionUpdateRecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramRevisionUpdateRecordsOrderBy>>;
};


export type PentagramRevisionsPentagramRevisionUpsertRecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramRevisionUpsertRecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramRevisionUpsertRecordsOrderBy>>;
};

export type PentagramRevisionsConnection = {
  __typename?: 'PentagramRevisionsConnection';
  edges: Array<PentagramRevisionsEdge>;
  pageInfo: PageInfo;
};

export type PentagramRevisionsDeleteResponse = {
  __typename?: 'PentagramRevisionsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PentagramRevisions>;
};

export type PentagramRevisionsEdge = {
  __typename?: 'PentagramRevisionsEdge';
  cursor: Scalars['String']['output'];
  node: PentagramRevisions;
};

export type PentagramRevisionsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PentagramRevisionsFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<PentagramRevisionsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PentagramRevisionsFilter>>;
  pentagramId?: InputMaybe<UuidFilter>;
  userId?: InputMaybe<UuidFilter>;
};

export type PentagramRevisionsInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  pentagramId?: InputMaybe<Scalars['UUID']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PentagramRevisionsInsertResponse = {
  __typename?: 'PentagramRevisionsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PentagramRevisions>;
};

export type PentagramRevisionsOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  pentagramId?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type PentagramRevisionsUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  pentagramId?: InputMaybe<Scalars['UUID']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PentagramRevisionsUpdateResponse = {
  __typename?: 'PentagramRevisionsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PentagramRevisions>;
};

export type Pentagrams = Node & {
  __typename?: 'Pentagrams';
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pentagramNodesCollection?: Maybe<PentagramNodesConnection>;
  pentagramRevisionsCollection?: Maybe<PentagramRevisionsConnection>;
  user: Users;
  userId: Scalars['UUID']['output'];
};


export type PentagramsPentagramNodesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramNodesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramNodesOrderBy>>;
};


export type PentagramsPentagramRevisionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramRevisionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramRevisionsOrderBy>>;
};

export type PentagramsConnection = {
  __typename?: 'PentagramsConnection';
  edges: Array<PentagramsEdge>;
  pageInfo: PageInfo;
};

export type PentagramsDeleteResponse = {
  __typename?: 'PentagramsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagrams>;
};

export type PentagramsEdge = {
  __typename?: 'PentagramsEdge';
  cursor: Scalars['String']['output'];
  node: Pentagrams;
};

export type PentagramsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PentagramsFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<PentagramsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PentagramsFilter>>;
  userId?: InputMaybe<UuidFilter>;
};

export type PentagramsInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PentagramsInsertResponse = {
  __typename?: 'PentagramsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagrams>;
};

export type PentagramsOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type PentagramsUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PentagramsUpdateResponse = {
  __typename?: 'PentagramsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pentagrams>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `Artists` */
  artistsCollection?: Maybe<ArtistsConnection>;
  /** A pagable collection of type `Cosmos` */
  cosmosCollection?: Maybe<CosmosConnection>;
  /** A pagable collection of type `Feed` */
  feedCollection?: Maybe<FeedConnection>;
  /** A pagable collection of type `Followings` */
  followingsCollection?: Maybe<FollowingsConnection>;
  /** A pagable collection of type `Genres` */
  genresCollection?: Maybe<GenresConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `OeuvresArtists` */
  oeuvresArtistsCollection?: Maybe<OeuvresArtistsConnection>;
  /** A pagable collection of type `Oeuvres` */
  oeuvresCollection?: Maybe<OeuvresConnection>;
  /** A pagable collection of type `OeuvresGenres` */
  oeuvresGenresCollection?: Maybe<OeuvresGenresConnection>;
  /** A pagable collection of type `PentagramNodes` */
  pentagramNodesCollection?: Maybe<PentagramNodesConnection>;
  /** A pagable collection of type `PentagramRevisionRecoverRecords` */
  pentagramRevisionRecoverRecordsCollection?: Maybe<PentagramRevisionRecoverRecordsConnection>;
  /** A pagable collection of type `PentagramRevisionRemoveRecords` */
  pentagramRevisionRemoveRecordsCollection?: Maybe<PentagramRevisionRemoveRecordsConnection>;
  /** A pagable collection of type `PentagramRevisionUpdateRecords` */
  pentagramRevisionUpdateRecordsCollection?: Maybe<PentagramRevisionUpdateRecordsConnection>;
  /** A pagable collection of type `PentagramRevisionUpsertRecords` */
  pentagramRevisionUpsertRecordsCollection?: Maybe<PentagramRevisionUpsertRecordsConnection>;
  /** A pagable collection of type `PentagramRevisions` */
  pentagramRevisionsCollection?: Maybe<PentagramRevisionsConnection>;
  /** A pagable collection of type `Pentagrams` */
  pentagramsCollection?: Maybe<PentagramsConnection>;
  /** A pagable collection of type `Shadows` */
  shadowsCollection?: Maybe<ShadowsConnection>;
  /** A pagable collection of type `Users` */
  usersCollection?: Maybe<UsersConnection>;
  /** A pagable collection of type `Worley` */
  worleyCollection?: Maybe<WorleyConnection>;
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
export type QueryCosmosCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CosmosFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CosmosOrderBy>>;
};


/** The root type for querying data */
export type QueryFeedCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<FeedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FeedOrderBy>>;
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
export type QueryOeuvresArtistsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OeuvresArtistsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OeuvresArtistsOrderBy>>;
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
export type QueryOeuvresGenresCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OeuvresGenresFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OeuvresGenresOrderBy>>;
};


/** The root type for querying data */
export type QueryPentagramNodesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramNodesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramNodesOrderBy>>;
};


/** The root type for querying data */
export type QueryPentagramRevisionRecoverRecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramRevisionRecoverRecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramRevisionRecoverRecordsOrderBy>>;
};


/** The root type for querying data */
export type QueryPentagramRevisionRemoveRecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramRevisionRemoveRecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramRevisionRemoveRecordsOrderBy>>;
};


/** The root type for querying data */
export type QueryPentagramRevisionUpdateRecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramRevisionUpdateRecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramRevisionUpdateRecordsOrderBy>>;
};


/** The root type for querying data */
export type QueryPentagramRevisionUpsertRecordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramRevisionUpsertRecordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramRevisionUpsertRecordsOrderBy>>;
};


/** The root type for querying data */
export type QueryPentagramRevisionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramRevisionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramRevisionsOrderBy>>;
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
export type QueryShadowsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ShadowsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ShadowsOrderBy>>;
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


/** The root type for querying data */
export type QueryWorleyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WorleyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorleyOrderBy>>;
};

export type Shadows = Node & {
  __typename?: 'Shadows';
  avoidFactor: Scalars['Float']['output'];
  bodyLength: Scalars['Float']['output'];
  centeringFactor: Scalars['Float']['output'];
  color: Scalars['String']['output'];
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  matchingFactor: Scalars['Float']['output'];
  minDistance: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  speedLimit: Scalars['Float']['output'];
  turnFactor: Scalars['Float']['output'];
  user: Users;
  userId: Scalars['UUID']['output'];
  visualRange: Scalars['Float']['output'];
};

export type ShadowsConnection = {
  __typename?: 'ShadowsConnection';
  edges: Array<ShadowsEdge>;
  pageInfo: PageInfo;
};

export type ShadowsDeleteResponse = {
  __typename?: 'ShadowsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Shadows>;
};

export type ShadowsEdge = {
  __typename?: 'ShadowsEdge';
  cursor: Scalars['String']['output'];
  node: Shadows;
};

export type ShadowsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ShadowsFilter>>;
  avoidFactor?: InputMaybe<FloatFilter>;
  bodyLength?: InputMaybe<FloatFilter>;
  centeringFactor?: InputMaybe<FloatFilter>;
  color?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  matchingFactor?: InputMaybe<FloatFilter>;
  minDistance?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ShadowsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ShadowsFilter>>;
  speedLimit?: InputMaybe<FloatFilter>;
  turnFactor?: InputMaybe<FloatFilter>;
  userId?: InputMaybe<UuidFilter>;
  visualRange?: InputMaybe<FloatFilter>;
};

export type ShadowsInsertInput = {
  avoidFactor?: InputMaybe<Scalars['Float']['input']>;
  bodyLength?: InputMaybe<Scalars['Float']['input']>;
  centeringFactor?: InputMaybe<Scalars['Float']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  matchingFactor?: InputMaybe<Scalars['Float']['input']>;
  minDistance?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  speedLimit?: InputMaybe<Scalars['Float']['input']>;
  turnFactor?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  visualRange?: InputMaybe<Scalars['Float']['input']>;
};

export type ShadowsInsertResponse = {
  __typename?: 'ShadowsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Shadows>;
};

export type ShadowsOrderBy = {
  avoidFactor?: InputMaybe<OrderByDirection>;
  bodyLength?: InputMaybe<OrderByDirection>;
  centeringFactor?: InputMaybe<OrderByDirection>;
  color?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  matchingFactor?: InputMaybe<OrderByDirection>;
  minDistance?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  speedLimit?: InputMaybe<OrderByDirection>;
  turnFactor?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
  visualRange?: InputMaybe<OrderByDirection>;
};

export type ShadowsUpdateInput = {
  avoidFactor?: InputMaybe<Scalars['Float']['input']>;
  bodyLength?: InputMaybe<Scalars['Float']['input']>;
  centeringFactor?: InputMaybe<Scalars['Float']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  matchingFactor?: InputMaybe<Scalars['Float']['input']>;
  minDistance?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  speedLimit?: InputMaybe<Scalars['Float']['input']>;
  turnFactor?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  visualRange?: InputMaybe<Scalars['Float']['input']>;
};

export type ShadowsUpdateResponse = {
  __typename?: 'ShadowsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Shadows>;
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

export type Users = Node & {
  __typename?: 'Users';
  cosmosCollection?: Maybe<CosmosConnection>;
  description?: Maybe<Scalars['String']['output']>;
  followersCollection?: Maybe<FollowingsConnection>;
  followingsCollection?: Maybe<FollowingsConnection>;
  id: Scalars['UUID']['output'];
  mutableId: Scalars['String']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pentagramRevisionsCollection?: Maybe<PentagramRevisionsConnection>;
  pentagramsCollection?: Maybe<PentagramsConnection>;
  shadowsCollection?: Maybe<ShadowsConnection>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  worleyCollection?: Maybe<WorleyConnection>;
};


export type UsersCosmosCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CosmosFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CosmosOrderBy>>;
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


export type UsersPentagramRevisionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramRevisionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramRevisionsOrderBy>>;
};


export type UsersPentagramsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PentagramsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PentagramsOrderBy>>;
};


export type UsersShadowsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ShadowsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ShadowsOrderBy>>;
};


export type UsersWorleyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WorleyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorleyOrderBy>>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UsersEdge>;
  pageInfo: PageInfo;
};

export type UsersDeleteResponse = {
  __typename?: 'UsersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type UsersEdge = {
  __typename?: 'UsersEdge';
  cursor: Scalars['String']['output'];
  node: Users;
};

export type UsersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UsersFilter>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  mutableId?: InputMaybe<StringFilter>;
  nickname?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<UsersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UsersFilter>>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type UsersInsertInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  mutableId?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type UsersInsertResponse = {
  __typename?: 'UsersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type UsersOrderBy = {
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  mutableId?: InputMaybe<OrderByDirection>;
  nickname?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type UsersUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  mutableId?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type UsersUpdateResponse = {
  __typename?: 'UsersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type Worley = Node & {
  __typename?: 'Worley';
  color: Scalars['String']['output'];
  createdAt: Scalars['Datetime']['output'];
  gridCount: Scalars['Int']['output'];
  id: Scalars['UUID']['output'];
  limit: Scalars['Int']['output'];
  movementParam: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  user: Users;
  userId: Scalars['UUID']['output'];
};

export type WorleyConnection = {
  __typename?: 'WorleyConnection';
  edges: Array<WorleyEdge>;
  pageInfo: PageInfo;
};

export type WorleyDeleteResponse = {
  __typename?: 'WorleyDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Worley>;
};

export type WorleyEdge = {
  __typename?: 'WorleyEdge';
  cursor: Scalars['String']['output'];
  node: Worley;
};

export type WorleyFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<WorleyFilter>>;
  color?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  gridCount?: InputMaybe<IntFilter>;
  id?: InputMaybe<UuidFilter>;
  limit?: InputMaybe<IntFilter>;
  movementParam?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<WorleyFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<WorleyFilter>>;
  userId?: InputMaybe<UuidFilter>;
};

export type WorleyInsertInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  gridCount?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  movementParam?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type WorleyInsertResponse = {
  __typename?: 'WorleyInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Worley>;
};

export type WorleyOrderBy = {
  color?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  gridCount?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  limit?: InputMaybe<OrderByDirection>;
  movementParam?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type WorleyUpdateInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  gridCount?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  movementParam?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type WorleyUpdateResponse = {
  __typename?: 'WorleyUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Worley>;
};

export type UpdateProfileMutationVariables = Exact<{
  nickname?: InputMaybe<Scalars['String']['input']>;
  mutableId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateProfileMutation = { __typename: 'Mutation', updateUsersCollection: { __typename: 'UsersUpdateResponse', records: Array<{ __typename: 'Users', id: string, nickname?: string | null, mutableId: string, description?: string | null }> } };

export type ArtistsMinimalInfoFragment = { __typename: 'Artists', id: string, name: string, updatedAt?: string | null };

export type ArtistOeuvresInfoFragment = { __typename: 'Artists', oeuvresArtistsCollection?: { __typename: 'OeuvresArtistsConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'OeuvresArtistsEdge', cursor: string, node: { __typename: 'OeuvresArtists', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } } }> } | null };

export type ArtistsInfoFragment = { __typename: 'Artists', abstract?: string | null, bio?: string | null, id: string, name: string, updatedAt?: string | null, oeuvresArtistsCollection?: { __typename: 'OeuvresArtistsConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'OeuvresArtistsEdge', cursor: string, node: { __typename: 'OeuvresArtists', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } } }> } | null };

export type GetArtistInfoByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetArtistInfoByIdQuery = { __typename: 'Query', artistsCollection?: { __typename: 'ArtistsConnection', edges: Array<{ __typename: 'ArtistsEdge', node: { __typename: 'Artists', abstract?: string | null, bio?: string | null, id: string, name: string, updatedAt?: string | null, oeuvresArtistsCollection?: { __typename: 'OeuvresArtistsConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'OeuvresArtistsEdge', cursor: string, node: { __typename: 'OeuvresArtists', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } } }> } | null } }> } | null };

export type GenresMinimalInfoFragment = { __typename: 'Genres', id: string, name?: string | null, updatedAt?: string | null };

export type GenreOeuvresInfoFragment = { __typename: 'Genres', oeuvresGenresCollection?: { __typename: 'OeuvresGenresConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'OeuvresGenresEdge', cursor: string, node: { __typename: 'OeuvresGenres', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } } }> } | null };

export type GenresInfoFragment = { __typename: 'Genres', abstract?: string | null, description?: string | null, id: string, name?: string | null, updatedAt?: string | null, oeuvresGenresCollection?: { __typename: 'OeuvresGenresConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'OeuvresGenresEdge', cursor: string, node: { __typename: 'OeuvresGenres', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } } }> } | null };

export type GetGenreInfoByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetGenreInfoByIdQuery = { __typename: 'Query', genresCollection?: { __typename: 'GenresConnection', edges: Array<{ __typename: 'GenresEdge', node: { __typename: 'Genres', abstract?: string | null, description?: string | null, id: string, name?: string | null, updatedAt?: string | null, oeuvresGenresCollection?: { __typename: 'OeuvresGenresConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'OeuvresGenresEdge', cursor: string, node: { __typename: 'OeuvresGenres', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } } }> } | null } }> } | null };

export type InventoryInfoFragment = { __typename: 'Users', id: string, shadowsCollection?: { __typename: 'ShadowsConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'ShadowsEdge', cursor: string, node: { __typename: 'Shadows', id: string, userId: string, name: string, color: string, bodyLength: number, centeringFactor: number, matchingFactor: number, minDistance: number, avoidFactor: number, turnFactor: number, visualRange: number, speedLimit: number } }> } | null, worleyCollection?: { __typename: 'WorleyConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'WorleyEdge', cursor: string, node: { __typename: 'Worley', id: string, userId: string, name: string, color: string, gridCount: number, limit: number, movementParam: number } }> } | null, cosmosCollection?: { __typename: 'CosmosConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'CosmosEdge', cursor: string, node: { __typename: 'Cosmos', id: string, userId: string, name: string, shootingStarCount: number, shootingStarColors: Array<string | null>, starCount: number, speedParam: number, sizeParam: number } }> } | null };

export type InventoryShadowsInfoFragment = { __typename: 'Users', shadowsCollection?: { __typename: 'ShadowsConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'ShadowsEdge', cursor: string, node: { __typename: 'Shadows', id: string, userId: string, name: string, color: string, bodyLength: number, centeringFactor: number, matchingFactor: number, minDistance: number, avoidFactor: number, turnFactor: number, visualRange: number, speedLimit: number } }> } | null };

export type InventoryWorleyInfoFragment = { __typename: 'Users', worleyCollection?: { __typename: 'WorleyConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'WorleyEdge', cursor: string, node: { __typename: 'Worley', id: string, userId: string, name: string, color: string, gridCount: number, limit: number, movementParam: number } }> } | null };

export type InventoryCosmosInfoFragment = { __typename: 'Users', cosmosCollection?: { __typename: 'CosmosConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'CosmosEdge', cursor: string, node: { __typename: 'Cosmos', id: string, userId: string, name: string, shootingStarCount: number, shootingStarColors: Array<string | null>, starCount: number, speedParam: number, sizeParam: number } }> } | null };

export type ShadowsMinimalInfoFragment = { __typename: 'Shadows', id: string, userId: string, name: string, color: string, bodyLength: number, centeringFactor: number, matchingFactor: number, minDistance: number, avoidFactor: number, turnFactor: number, visualRange: number, speedLimit: number };

export type CosmosMinimalInfoFragment = { __typename: 'Cosmos', id: string, userId: string, name: string, shootingStarCount: number, shootingStarColors: Array<string | null>, starCount: number, speedParam: number, sizeParam: number };

export type WorleyMinimalInfoFragment = { __typename: 'Worley', id: string, userId: string, name: string, color: string, gridCount: number, limit: number, movementParam: number };

export type InsertCosmosMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shootingStarColors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  starCount?: InputMaybe<Scalars['Int']['input']>;
  shootingStarCount?: InputMaybe<Scalars['Int']['input']>;
  speedParam?: InputMaybe<Scalars['Float']['input']>;
  sizeParam?: InputMaybe<Scalars['Float']['input']>;
}>;


export type InsertCosmosMutation = { __typename: 'Mutation', insertIntoCosmosCollection?: { __typename: 'CosmosInsertResponse', records: Array<{ __typename: 'Cosmos', id: string, userId: string, name: string, shootingStarCount: number, shootingStarColors: Array<string | null>, starCount: number, speedParam: number, sizeParam: number }> } | null };

export type DeleteCosmosMutationVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type DeleteCosmosMutation = { __typename: 'Mutation', deleteFromCosmosCollection: { __typename: 'CosmosDeleteResponse', records: Array<{ __typename: 'Cosmos', id: string, userId: string, name: string, shootingStarCount: number, shootingStarColors: Array<string | null>, starCount: number, speedParam: number, sizeParam: number }> } };

export type RenameCosmosMutationVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type RenameCosmosMutation = { __typename: 'Mutation', updateCosmosCollection: { __typename: 'CosmosUpdateResponse', records: Array<{ __typename: 'Cosmos', id: string, userId: string, name: string, shootingStarCount: number, shootingStarColors: Array<string | null>, starCount: number, speedParam: number, sizeParam: number }> } };

export type InsertShadowsMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  bodyLength?: InputMaybe<Scalars['Float']['input']>;
  centeringFactor?: InputMaybe<Scalars['Float']['input']>;
  matchingFactor?: InputMaybe<Scalars['Float']['input']>;
  minDistance?: InputMaybe<Scalars['Float']['input']>;
  avoidFactor?: InputMaybe<Scalars['Float']['input']>;
  turnFactor?: InputMaybe<Scalars['Float']['input']>;
  visualRange?: InputMaybe<Scalars['Float']['input']>;
  speedLimit?: InputMaybe<Scalars['Float']['input']>;
}>;


export type InsertShadowsMutation = { __typename: 'Mutation', insertIntoShadowsCollection?: { __typename: 'ShadowsInsertResponse', records: Array<{ __typename: 'Shadows', id: string, userId: string, name: string, color: string, bodyLength: number, centeringFactor: number, matchingFactor: number, minDistance: number, avoidFactor: number, turnFactor: number, visualRange: number, speedLimit: number }> } | null };

export type DeleteShadowsMutationVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type DeleteShadowsMutation = { __typename: 'Mutation', deleteFromShadowsCollection: { __typename: 'ShadowsDeleteResponse', records: Array<{ __typename: 'Shadows', id: string, userId: string, name: string, color: string, bodyLength: number, centeringFactor: number, matchingFactor: number, minDistance: number, avoidFactor: number, turnFactor: number, visualRange: number, speedLimit: number }> } };

export type RenameShadowsMutationVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type RenameShadowsMutation = { __typename: 'Mutation', updateShadowsCollection: { __typename: 'ShadowsUpdateResponse', records: Array<{ __typename: 'Shadows', id: string, userId: string, name: string, color: string, bodyLength: number, centeringFactor: number, matchingFactor: number, minDistance: number, avoidFactor: number, turnFactor: number, visualRange: number, speedLimit: number }> } };

export type InsertWorleyMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  gridCount?: InputMaybe<Scalars['Int']['input']>;
  movementParam?: InputMaybe<Scalars['Float']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type InsertWorleyMutation = { __typename: 'Mutation', insertIntoWorleyCollection?: { __typename: 'WorleyInsertResponse', records: Array<{ __typename: 'Worley', id: string, userId: string, name: string, color: string, gridCount: number, limit: number, movementParam: number }> } | null };

export type DeleteWorleyMutationVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type DeleteWorleyMutation = { __typename: 'Mutation', deleteFromWorleyCollection: { __typename: 'WorleyDeleteResponse', records: Array<{ __typename: 'Worley', id: string, userId: string, name: string, color: string, gridCount: number, limit: number, movementParam: number }> } };

export type RenameWorleyMutationVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type RenameWorleyMutation = { __typename: 'Mutation', updateWorleyCollection: { __typename: 'WorleyUpdateResponse', records: Array<{ __typename: 'Worley', id: string, userId: string, name: string, color: string, gridCount: number, limit: number, movementParam: number }> } };

export type GetUserInventoryByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
  shadowLimit?: InputMaybe<Scalars['Int']['input']>;
  shadowCursor?: InputMaybe<Scalars['Cursor']['input']>;
  cosmosLimit?: InputMaybe<Scalars['Int']['input']>;
  cosmosCursor?: InputMaybe<Scalars['Cursor']['input']>;
  worleyLimit?: InputMaybe<Scalars['Int']['input']>;
  worleyCursor?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetUserInventoryByIdQuery = { __typename: 'Query', usersCollection?: { __typename: 'UsersConnection', edges: Array<{ __typename: 'UsersEdge', node: { __typename: 'Users', id: string, shadowsCollection?: { __typename: 'ShadowsConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'ShadowsEdge', cursor: string, node: { __typename: 'Shadows', id: string, userId: string, name: string, color: string, bodyLength: number, centeringFactor: number, matchingFactor: number, minDistance: number, avoidFactor: number, turnFactor: number, visualRange: number, speedLimit: number } }> } | null, worleyCollection?: { __typename: 'WorleyConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'WorleyEdge', cursor: string, node: { __typename: 'Worley', id: string, userId: string, name: string, color: string, gridCount: number, limit: number, movementParam: number } }> } | null, cosmosCollection?: { __typename: 'CosmosConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'CosmosEdge', cursor: string, node: { __typename: 'Cosmos', id: string, userId: string, name: string, shootingStarCount: number, shootingStarColors: Array<string | null>, starCount: number, speedParam: number, sizeParam: number } }> } | null } }> } | null };

export type OeuvresMinimalInfoFragment = { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null };

export type OeuvrePentagramsInfoFragment = { __typename: 'Oeuvres', pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'PentagramNodesEdge', cursor: string, node: { __typename: 'PentagramNodes', pentagram: { __typename: 'Pentagrams', id: string, description?: string | null, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', edges: Array<{ __typename: 'PentagramNodesEdge', node: { __typename: 'PentagramNodes', id: string, oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null } }> } | null, pentagramRevisionsCollection?: { __typename: 'PentagramRevisionsConnection', edges: Array<{ __typename: 'PentagramRevisionsEdge', node: { __typename: 'PentagramRevisions', id: string, createdAt: string, pentagram: { __typename: 'Pentagrams', id: string }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', totalCount: number } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', totalCount: number } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', totalCount: number } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', totalCount: number } | null } }> } | null } } }> } | null };

export type OeuvresInfoFragment = { __typename: 'Oeuvres', description?: string | null, id: string, title: string, updatedAt?: string | null, oeuvresArtistsCollection?: { __typename: 'OeuvresArtistsConnection', edges: Array<{ __typename: 'OeuvresArtistsEdge', node: { __typename: 'OeuvresArtists', artist: { __typename: 'Artists', id: string, name: string, updatedAt?: string | null } } }> } | null, oeuvresGenresCollection?: { __typename: 'OeuvresGenresConnection', edges: Array<{ __typename: 'OeuvresGenresEdge', node: { __typename: 'OeuvresGenres', genre: { __typename: 'Genres', id: string, name?: string | null, updatedAt?: string | null } } }> } | null, pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'PentagramNodesEdge', cursor: string, node: { __typename: 'PentagramNodes', pentagram: { __typename: 'Pentagrams', id: string, description?: string | null, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', edges: Array<{ __typename: 'PentagramNodesEdge', node: { __typename: 'PentagramNodes', id: string, oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null } }> } | null, pentagramRevisionsCollection?: { __typename: 'PentagramRevisionsConnection', edges: Array<{ __typename: 'PentagramRevisionsEdge', node: { __typename: 'PentagramRevisions', id: string, createdAt: string, pentagram: { __typename: 'Pentagrams', id: string }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', totalCount: number } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', totalCount: number } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', totalCount: number } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', totalCount: number } | null } }> } | null } } }> } | null };

export type GetOeuvreInfoByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetOeuvreInfoByIdQuery = { __typename: 'Query', oeuvresCollection?: { __typename: 'OeuvresConnection', edges: Array<{ __typename: 'OeuvresEdge', node: { __typename: 'Oeuvres', description?: string | null, id: string, title: string, updatedAt?: string | null, oeuvresArtistsCollection?: { __typename: 'OeuvresArtistsConnection', edges: Array<{ __typename: 'OeuvresArtistsEdge', node: { __typename: 'OeuvresArtists', artist: { __typename: 'Artists', id: string, name: string, updatedAt?: string | null } } }> } | null, oeuvresGenresCollection?: { __typename: 'OeuvresGenresConnection', edges: Array<{ __typename: 'OeuvresGenresEdge', node: { __typename: 'OeuvresGenres', genre: { __typename: 'Genres', id: string, name?: string | null, updatedAt?: string | null } } }> } | null, pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'PentagramNodesEdge', cursor: string, node: { __typename: 'PentagramNodes', pentagram: { __typename: 'Pentagrams', id: string, description?: string | null, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', edges: Array<{ __typename: 'PentagramNodesEdge', node: { __typename: 'PentagramNodes', id: string, oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null } }> } | null, pentagramRevisionsCollection?: { __typename: 'PentagramRevisionsConnection', edges: Array<{ __typename: 'PentagramRevisionsEdge', node: { __typename: 'PentagramRevisions', id: string, createdAt: string, pentagram: { __typename: 'Pentagrams', id: string }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', totalCount: number } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', totalCount: number } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', totalCount: number } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', totalCount: number } | null } }> } | null } } }> } | null } }> } | null };

export type UpdateRecordInfoFragment = { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } };

export type UpsertRecordInfoFragment = { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } };

export type RemoveRecordInfoFragment = { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } };

export type RecoverRecordInfoFragment = { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } };

export type PentagramNodesInfoFragment = { __typename: 'PentagramNodes', id: string, oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null };

export type PentagramsUpdateInfoFragment = { __typename: 'Pentagrams', id: string, description?: string | null, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', edges: Array<{ __typename: 'PentagramNodesEdge', node: { __typename: 'PentagramNodes', id: string, oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null } }> } | null };

export type PentagramsSelectInfoFragment = { __typename: 'Pentagrams', id: string, description?: string | null, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', edges: Array<{ __typename: 'PentagramNodesEdge', node: { __typename: 'PentagramNodes', id: string, oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null } }> } | null, pentagramRevisionsCollection?: { __typename: 'PentagramRevisionsConnection', edges: Array<{ __typename: 'PentagramRevisionsEdge', node: { __typename: 'PentagramRevisions', id: string, createdAt: string, pentagram: { __typename: 'Pentagrams', id: string }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', totalCount: number } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', totalCount: number } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', totalCount: number } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', totalCount: number } | null } }> } | null };

export type PentagramsSelectUserInfoFragment = { __typename: 'Pentagrams', id: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null } };

export type PentagramRevisionsInfoFragment = { __typename: 'PentagramRevisions', id: string, createdAt: string, pentagram: { __typename: 'Pentagrams', id: string }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', totalCount: number, edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', totalCount: number, edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', totalCount: number, edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', totalCount: number, edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null };

export type PentagramRevisionsMinimalInfoFragment = { __typename: 'PentagramRevisions', id: string, createdAt: string, pentagram: { __typename: 'Pentagrams', id: string }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', totalCount: number } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', totalCount: number } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', totalCount: number } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', totalCount: number } | null };

export type PentagramRevisionFeedInfoFragment = { __typename: 'PentagramRevisions', id: string, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagram: { __typename: 'Pentagrams', id: string, description?: string | null, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', edges: Array<{ __typename: 'PentagramNodesEdge', node: { __typename: 'PentagramNodes', id: string, oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null } }> } | null, pentagramRevisionsCollection?: { __typename: 'PentagramRevisionsConnection', edges: Array<{ __typename: 'PentagramRevisionsEdge', node: { __typename: 'PentagramRevisions', id: string, createdAt: string, pentagram: { __typename: 'Pentagrams', id: string }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', totalCount: number } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', totalCount: number } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', totalCount: number } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', totalCount: number } | null } }> } | null } };

export type DeletePentagramMutationVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type DeletePentagramMutation = { __typename: 'Mutation', deleteFromPentagramsCollection: { __typename: 'PentagramsDeleteResponse', records: Array<{ __typename: 'Pentagrams', id: string }> } };

export type GetPentagramUpdateInfoByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetPentagramUpdateInfoByIdQuery = { __typename: 'Query', pentagramsCollection?: { __typename: 'PentagramsConnection', edges: Array<{ __typename: 'PentagramsEdge', node: { __typename: 'Pentagrams', id: string, description?: string | null, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', edges: Array<{ __typename: 'PentagramNodesEdge', node: { __typename: 'PentagramNodes', id: string, oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null } }> } | null } }> } | null };

export type GetPentagramSelectInfoByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetPentagramSelectInfoByIdQuery = { __typename: 'Query', pentagramsCollection?: { __typename: 'PentagramsConnection', edges: Array<{ __typename: 'PentagramsEdge', node: { __typename: 'Pentagrams', id: string, description?: string | null, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', edges: Array<{ __typename: 'PentagramNodesEdge', node: { __typename: 'PentagramNodes', id: string, oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null } }> } | null, pentagramRevisionsCollection?: { __typename: 'PentagramRevisionsConnection', edges: Array<{ __typename: 'PentagramRevisionsEdge', node: { __typename: 'PentagramRevisions', id: string, createdAt: string, pentagram: { __typename: 'Pentagrams', id: string }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', totalCount: number } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', totalCount: number } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', totalCount: number } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', totalCount: number } | null } }> } | null } }> } | null };

export type GetPentagramsSelectUserInfoByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetPentagramsSelectUserInfoByIdQuery = { __typename: 'Query', pentagramsCollection?: { __typename: 'PentagramsConnection', edges: Array<{ __typename: 'PentagramsEdge', node: { __typename: 'Pentagrams', id: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null } } }> } | null };

export type GetPentagramNodesInfoByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetPentagramNodesInfoByIdQuery = { __typename: 'Query', pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', edges: Array<{ __typename: 'PentagramNodesEdge', node: { __typename: 'PentagramNodes', id: string, oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null } }> } | null };

export type GetPentagramRevisionsInfoByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetPentagramRevisionsInfoByIdQuery = { __typename: 'Query', pentagramRevisionsCollection?: { __typename: 'PentagramRevisionsConnection', edges: Array<{ __typename: 'PentagramRevisionsEdge', node: { __typename: 'PentagramRevisions', id: string, createdAt: string, pentagram: { __typename: 'Pentagrams', id: string }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', totalCount: number, edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', totalCount: number, edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', totalCount: number, edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', totalCount: number, edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null } }> } | null };

export type MiniProfileInfoFragment = { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null };

export type ProfilesInfoFragment = { __typename: 'Users', description?: string | null, nickname?: string | null, mutableId: string, id: string, updatedAt?: string | null, followingsCollection?: { __typename: 'FollowingsConnection', edges: Array<{ __typename: 'FollowingsEdge', node: { __typename: 'Followings', following_id: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null } } }> } | null, followersCollection?: { __typename: 'FollowingsConnection', edges: Array<{ __typename: 'FollowingsEdge', node: { __typename: 'Followings', follower_id: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null } } }> } | null, pentagramsCollection?: { __typename: 'PentagramsConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'PentagramsEdge', cursor: string, node: { __typename: 'Pentagrams', id: string, description?: string | null, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', edges: Array<{ __typename: 'PentagramNodesEdge', node: { __typename: 'PentagramNodes', id: string, oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null } }> } | null, pentagramRevisionsCollection?: { __typename: 'PentagramRevisionsConnection', edges: Array<{ __typename: 'PentagramRevisionsEdge', node: { __typename: 'PentagramRevisions', id: string, createdAt: string, pentagram: { __typename: 'Pentagrams', id: string }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', totalCount: number } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', totalCount: number } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', totalCount: number } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', totalCount: number } | null } }> } | null } }> } | null, pentagramRevisionsCollection?: { __typename: 'PentagramRevisionsConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'PentagramRevisionsEdge', cursor: string, node: { __typename: 'PentagramRevisions', id: string, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagram: { __typename: 'Pentagrams', id: string, description?: string | null, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', edges: Array<{ __typename: 'PentagramNodesEdge', node: { __typename: 'PentagramNodes', id: string, oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null } }> } | null, pentagramRevisionsCollection?: { __typename: 'PentagramRevisionsConnection', edges: Array<{ __typename: 'PentagramRevisionsEdge', node: { __typename: 'PentagramRevisions', id: string, createdAt: string, pentagram: { __typename: 'Pentagrams', id: string }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', totalCount: number } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', totalCount: number } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', totalCount: number } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', totalCount: number } | null } }> } | null } } }> } | null };

export type ProfileFollowInfoFragment = { __typename: 'Users', followingsCollection?: { __typename: 'FollowingsConnection', edges: Array<{ __typename: 'FollowingsEdge', node: { __typename: 'Followings', following_id: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null } } }> } | null, followersCollection?: { __typename: 'FollowingsConnection', edges: Array<{ __typename: 'FollowingsEdge', node: { __typename: 'Followings', follower_id: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null } } }> } | null };

export type ProfilePentagramInfoFragment = { __typename: 'Users', pentagramsCollection?: { __typename: 'PentagramsConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'PentagramsEdge', cursor: string, node: { __typename: 'Pentagrams', id: string, description?: string | null, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', edges: Array<{ __typename: 'PentagramNodesEdge', node: { __typename: 'PentagramNodes', id: string, oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null } }> } | null, pentagramRevisionsCollection?: { __typename: 'PentagramRevisionsConnection', edges: Array<{ __typename: 'PentagramRevisionsEdge', node: { __typename: 'PentagramRevisions', id: string, createdAt: string, pentagram: { __typename: 'Pentagrams', id: string }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', totalCount: number } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', totalCount: number } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', totalCount: number } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', totalCount: number } | null } }> } | null } }> } | null };

export type ProfileRevisionInfoFragment = { __typename: 'Users', pentagramRevisionsCollection?: { __typename: 'PentagramRevisionsConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'PentagramRevisionsEdge', cursor: string, node: { __typename: 'PentagramRevisions', id: string, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagram: { __typename: 'Pentagrams', id: string, description?: string | null, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', edges: Array<{ __typename: 'PentagramNodesEdge', node: { __typename: 'PentagramNodes', id: string, oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null } }> } | null, pentagramRevisionsCollection?: { __typename: 'PentagramRevisionsConnection', edges: Array<{ __typename: 'PentagramRevisionsEdge', node: { __typename: 'PentagramRevisions', id: string, createdAt: string, pentagram: { __typename: 'Pentagrams', id: string }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', totalCount: number } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', totalCount: number } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', totalCount: number } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', totalCount: number } | null } }> } | null } } }> } | null };

export type InsertFollowingsMutationVariables = Exact<{
  followerId: Scalars['UUID']['input'];
  followingId: Scalars['UUID']['input'];
}>;


export type InsertFollowingsMutation = { __typename: 'Mutation', insertIntoFollowingsCollection?: { __typename: 'FollowingsInsertResponse', records: Array<{ __typename: 'Followings', followerId: string, followingId: string }> } | null };

export type DeleteFollowingsMutationVariables = Exact<{
  followerId: Scalars['UUID']['input'];
  followingId: Scalars['UUID']['input'];
}>;


export type DeleteFollowingsMutation = { __typename: 'Mutation', deleteFromFollowingsCollection: { __typename: 'FollowingsDeleteResponse', records: Array<{ __typename: 'Followings', followerId: string, followingId: string }> } };

export type GetUserByMutableIdQueryVariables = Exact<{
  mutableId: Scalars['String']['input'];
  pentagramLimit?: InputMaybe<Scalars['Int']['input']>;
  pentagramCursor?: InputMaybe<Scalars['Cursor']['input']>;
  revisionLimit?: InputMaybe<Scalars['Int']['input']>;
  revisionCursor?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetUserByMutableIdQuery = { __typename: 'Query', usersCollection?: { __typename: 'UsersConnection', edges: Array<{ __typename: 'UsersEdge', node: { __typename: 'Users', description?: string | null, nickname?: string | null, mutableId: string, id: string, updatedAt?: string | null, followingsCollection?: { __typename: 'FollowingsConnection', edges: Array<{ __typename: 'FollowingsEdge', node: { __typename: 'Followings', following_id: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null } } }> } | null, followersCollection?: { __typename: 'FollowingsConnection', edges: Array<{ __typename: 'FollowingsEdge', node: { __typename: 'Followings', follower_id: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null } } }> } | null, pentagramsCollection?: { __typename: 'PentagramsConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'PentagramsEdge', cursor: string, node: { __typename: 'Pentagrams', id: string, description?: string | null, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', edges: Array<{ __typename: 'PentagramNodesEdge', node: { __typename: 'PentagramNodes', id: string, oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null } }> } | null, pentagramRevisionsCollection?: { __typename: 'PentagramRevisionsConnection', edges: Array<{ __typename: 'PentagramRevisionsEdge', node: { __typename: 'PentagramRevisions', id: string, createdAt: string, pentagram: { __typename: 'Pentagrams', id: string }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', totalCount: number } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', totalCount: number } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', totalCount: number } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', totalCount: number } | null } }> } | null } }> } | null, pentagramRevisionsCollection?: { __typename: 'PentagramRevisionsConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'PentagramRevisionsEdge', cursor: string, node: { __typename: 'PentagramRevisions', id: string, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagram: { __typename: 'Pentagrams', id: string, description?: string | null, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', edges: Array<{ __typename: 'PentagramNodesEdge', node: { __typename: 'PentagramNodes', id: string, oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null } }> } | null, pentagramRevisionsCollection?: { __typename: 'PentagramRevisionsConnection', edges: Array<{ __typename: 'PentagramRevisionsEdge', node: { __typename: 'PentagramRevisions', id: string, createdAt: string, pentagram: { __typename: 'Pentagrams', id: string }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', totalCount: number } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', totalCount: number } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', totalCount: number } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', totalCount: number } | null } }> } | null } } }> } | null } }> } | null };

export type AuthInfoFragment = { __typename: 'Users', description?: string | null, nickname?: string | null, mutableId: string, id: string, updatedAt?: string | null, followingsCollection?: { __typename: 'FollowingsConnection', edges: Array<{ __typename: 'FollowingsEdge', node: { __typename: 'Followings', following_id: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null } } }> } | null, followersCollection?: { __typename: 'FollowingsConnection', edges: Array<{ __typename: 'FollowingsEdge', node: { __typename: 'Followings', follower_id: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null } } }> } | null };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetUserByIdQuery = { __typename: 'Query', usersCollection?: { __typename: 'UsersConnection', edges: Array<{ __typename: 'UsersEdge', node: { __typename: 'Users', description?: string | null, nickname?: string | null, mutableId: string, id: string, updatedAt?: string | null, followingsCollection?: { __typename: 'FollowingsConnection', edges: Array<{ __typename: 'FollowingsEdge', node: { __typename: 'Followings', following_id: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null } } }> } | null, followersCollection?: { __typename: 'FollowingsConnection', edges: Array<{ __typename: 'FollowingsEdge', node: { __typename: 'Followings', follower_id: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null } } }> } | null } }> } | null };

export type FeedInfoFragment = { __typename: 'Feed', items?: { __typename: 'PentagramRevisionsConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'PentagramRevisionsEdge', cursor: string, node: { __typename: 'PentagramRevisions', id: string, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagram: { __typename: 'Pentagrams', id: string, description?: string | null, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', edges: Array<{ __typename: 'PentagramNodesEdge', node: { __typename: 'PentagramNodes', id: string, oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null } }> } | null, pentagramRevisionsCollection?: { __typename: 'PentagramRevisionsConnection', edges: Array<{ __typename: 'PentagramRevisionsEdge', node: { __typename: 'PentagramRevisions', id: string, createdAt: string, pentagram: { __typename: 'Pentagrams', id: string }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', totalCount: number } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', totalCount: number } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', totalCount: number } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', totalCount: number } | null } }> } | null } } }> } | null };

export type FollowRecommendationInfoFragment = { __typename: 'Feed', recommendation?: { __typename: 'UsersConnection', edges: Array<{ __typename: 'UsersEdge', node: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null } }> } | null };

export type GetFeedByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetFeedByIdQuery = { __typename: 'Query', feedCollection?: { __typename: 'FeedConnection', edges: Array<{ __typename: 'FeedEdge', node: { __typename: 'Feed', id?: string | null, items?: { __typename: 'PentagramRevisionsConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'PentagramRevisionsEdge', cursor: string, node: { __typename: 'PentagramRevisions', id: string, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagram: { __typename: 'Pentagrams', id: string, description?: string | null, createdAt: string, user: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null }, pentagramNodesCollection?: { __typename: 'PentagramNodesConnection', edges: Array<{ __typename: 'PentagramNodesEdge', node: { __typename: 'PentagramNodes', id: string, oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpdateRecordsEdge', node: { __typename: 'PentagramRevisionUpdateRecords', id: string, currentAngle: number, currentDistance: number, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionUpsertRecordsEdge', node: { __typename: 'PentagramRevisionUpsertRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRemoveRecordsEdge', node: { __typename: 'PentagramRevisionRemoveRecords', id: string, previousAngle: number, previousDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', edges: Array<{ __typename: 'PentagramRevisionRecoverRecordsEdge', node: { __typename: 'PentagramRevisionRecoverRecords', id: string, currentAngle: number, currentDistance: number, pentagramNode: { __typename: 'PentagramNodes', oeuvre: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }, revision: { __typename: 'PentagramRevisions', createdAt: string } } }> } | null } }> } | null, pentagramRevisionsCollection?: { __typename: 'PentagramRevisionsConnection', edges: Array<{ __typename: 'PentagramRevisionsEdge', node: { __typename: 'PentagramRevisions', id: string, createdAt: string, pentagram: { __typename: 'Pentagrams', id: string }, pentagramRevisionUpdateRecordsCollection?: { __typename: 'PentagramRevisionUpdateRecordsConnection', totalCount: number } | null, pentagramRevisionUpsertRecordsCollection?: { __typename: 'PentagramRevisionUpsertRecordsConnection', totalCount: number } | null, pentagramRevisionRemoveRecordsCollection?: { __typename: 'PentagramRevisionRemoveRecordsConnection', totalCount: number } | null, pentagramRevisionRecoverRecordsCollection?: { __typename: 'PentagramRevisionRecoverRecordsConnection', totalCount: number } | null } }> } | null } } }> } | null } }> } | null };

export type GetFollowRecommendationQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetFollowRecommendationQuery = { __typename: 'Query', feedCollection?: { __typename: 'FeedConnection', edges: Array<{ __typename: 'FeedEdge', node: { __typename: 'Feed', recommendation?: { __typename: 'UsersConnection', edges: Array<{ __typename: 'UsersEdge', node: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null } }> } | null } }> } | null };

export type InsertArtistsMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type InsertArtistsMutation = { __typename: 'Mutation', insertIntoArtistsCollection?: { __typename: 'ArtistsInsertResponse', records: Array<{ __typename: 'Artists', id: string }> } | null };

export type InsertOeuvresMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type InsertOeuvresMutation = { __typename: 'Mutation', insertIntoOeuvresCollection?: { __typename: 'OeuvresInsertResponse', records: Array<{ __typename: 'Oeuvres', id: string }> } | null };

export type InsertGenresMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type InsertGenresMutation = { __typename: 'Mutation', insertIntoGenresCollection?: { __typename: 'GenresInsertResponse', records: Array<{ __typename: 'Genres', id: string }> } | null };

export type InsertOeuvresArtistsRelationMutationVariables = Exact<{
  metaId?: InputMaybe<Scalars['UUID']['input']>;
  oeuvreId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type InsertOeuvresArtistsRelationMutation = { __typename: 'Mutation', insertIntoOeuvresArtistsCollection?: { __typename: 'OeuvresArtistsInsertResponse', records: Array<{ __typename: 'OeuvresArtists', oeuvreId: string }> } | null };

export type InsertOeuvresGenresRelationMutationVariables = Exact<{
  metaId?: InputMaybe<Scalars['UUID']['input']>;
  oeuvreId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type InsertOeuvresGenresRelationMutation = { __typename: 'Mutation', insertIntoOeuvresGenresCollection?: { __typename: 'OeuvresGenresInsertResponse', records: Array<{ __typename: 'OeuvresGenres', oeuvreId: string }> } | null };

export type DeleteOeuvresArtistsRelationMutationVariables = Exact<{
  metaId?: InputMaybe<Scalars['UUID']['input']>;
  oeuvreId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type DeleteOeuvresArtistsRelationMutation = { __typename: 'Mutation', deleteFromOeuvresArtistsCollection: { __typename: 'OeuvresArtistsDeleteResponse', records: Array<{ __typename: 'OeuvresArtists', oeuvreId: string }> } };

export type DeleteOeuvresGenresRelationMutationVariables = Exact<{
  metaId?: InputMaybe<Scalars['UUID']['input']>;
  oeuvreId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type DeleteOeuvresGenresRelationMutation = { __typename: 'Mutation', deleteFromOeuvresGenresCollection: { __typename: 'OeuvresGenresDeleteResponse', records: Array<{ __typename: 'OeuvresGenres', oeuvreId: string }> } };

export type UpdateArtistsMutationVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateArtistsMutation = { __typename: 'Mutation', updateArtistsCollection: { __typename: 'ArtistsUpdateResponse', records: Array<{ __typename: 'Artists', id: string }> } };

export type UpdateOeuvresMutationVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateOeuvresMutation = { __typename: 'Mutation', updateOeuvresCollection: { __typename: 'OeuvresUpdateResponse', records: Array<{ __typename: 'Oeuvres', id: string }> } };

export type UpdateGenresMutationVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateGenresMutation = { __typename: 'Mutation', updateGenresCollection: { __typename: 'GenresUpdateResponse', records: Array<{ __typename: 'Genres', id: string }> } };

export type SearchOeuvresQueryVariables = Exact<{
  keyword: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type SearchOeuvresQuery = { __typename: 'Query', oeuvresCollection?: { __typename: 'OeuvresConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'OeuvresEdge', cursor: string, node: { __typename: 'Oeuvres', id: string, title: string, updatedAt?: string | null } }> } | null };

export type SearchUsersQueryVariables = Exact<{
  keyword: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type SearchUsersQuery = { __typename: 'Query', usersCollection?: { __typename: 'UsersConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'UsersEdge', cursor: string, node: { __typename: 'Users', mutableId: string, nickname?: string | null, id: string, updatedAt?: string | null } }> } | null };

export type SearchArtistsQueryVariables = Exact<{
  keyword: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type SearchArtistsQuery = { __typename: 'Query', artistsCollection?: { __typename: 'ArtistsConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'ArtistsEdge', cursor: string, node: { __typename: 'Artists', id: string, name: string, updatedAt?: string | null } }> } | null };

export type SearchGenresQueryVariables = Exact<{
  keyword: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type SearchGenresQuery = { __typename: 'Query', genresCollection?: { __typename: 'GenresConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename: 'GenresEdge', cursor: string, node: { __typename: 'Genres', id: string, name?: string | null, updatedAt?: string | null } }> } | null };

export const ArtistsMinimalInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<ArtistsMinimalInfoFragment, unknown>;
export const OeuvresMinimalInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<OeuvresMinimalInfoFragment, unknown>;
export const ArtistOeuvresInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistOeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvresArtistsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"oeuvreId"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<ArtistOeuvresInfoFragment, unknown>;
export const ArtistsInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistOeuvresInfo"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistOeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvresArtistsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"oeuvreId"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ArtistsInfoFragment, unknown>;
export const GenresMinimalInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<GenresMinimalInfoFragment, unknown>;
export const GenreOeuvresInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenreOeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvresGenresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"oeuvreId"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<GenreOeuvresInfoFragment, unknown>;
export const GenresInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenreOeuvresInfo"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenreOeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvresGenresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"oeuvreId"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GenresInfoFragment, unknown>;
export const ShadowsMinimalInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShadowsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Shadows"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bodyLength"}},{"kind":"Field","name":{"kind":"Name","value":"centeringFactor"}},{"kind":"Field","name":{"kind":"Name","value":"matchingFactor"}},{"kind":"Field","name":{"kind":"Name","value":"minDistance"}},{"kind":"Field","name":{"kind":"Name","value":"avoidFactor"}},{"kind":"Field","name":{"kind":"Name","value":"turnFactor"}},{"kind":"Field","name":{"kind":"Name","value":"visualRange"}},{"kind":"Field","name":{"kind":"Name","value":"speedLimit"}}]}}]} as unknown as DocumentNode<ShadowsMinimalInfoFragment, unknown>;
export const InventoryShadowsInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryShadowsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"shadowsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shadowLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shadowCursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShadowsMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShadowsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Shadows"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bodyLength"}},{"kind":"Field","name":{"kind":"Name","value":"centeringFactor"}},{"kind":"Field","name":{"kind":"Name","value":"matchingFactor"}},{"kind":"Field","name":{"kind":"Name","value":"minDistance"}},{"kind":"Field","name":{"kind":"Name","value":"avoidFactor"}},{"kind":"Field","name":{"kind":"Name","value":"turnFactor"}},{"kind":"Field","name":{"kind":"Name","value":"visualRange"}},{"kind":"Field","name":{"kind":"Name","value":"speedLimit"}}]}}]} as unknown as DocumentNode<InventoryShadowsInfoFragment, unknown>;
export const WorleyMinimalInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorleyMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Worley"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"gridCount"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"movementParam"}}]}}]} as unknown as DocumentNode<WorleyMinimalInfoFragment, unknown>;
export const InventoryWorleyInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryWorleyInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"worleyCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"worleyLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"worleyCursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorleyMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorleyMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Worley"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"gridCount"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"movementParam"}}]}}]} as unknown as DocumentNode<InventoryWorleyInfoFragment, unknown>;
export const CosmosMinimalInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CosmosMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cosmos"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shootingStarCount"}},{"kind":"Field","name":{"kind":"Name","value":"shootingStarColors"}},{"kind":"Field","name":{"kind":"Name","value":"starCount"}},{"kind":"Field","name":{"kind":"Name","value":"speedParam"}},{"kind":"Field","name":{"kind":"Name","value":"sizeParam"}}]}}]} as unknown as DocumentNode<CosmosMinimalInfoFragment, unknown>;
export const InventoryCosmosInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryCosmosInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cosmosCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cosmosLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cosmosCursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CosmosMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CosmosMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cosmos"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shootingStarCount"}},{"kind":"Field","name":{"kind":"Name","value":"shootingStarColors"}},{"kind":"Field","name":{"kind":"Name","value":"starCount"}},{"kind":"Field","name":{"kind":"Name","value":"speedParam"}},{"kind":"Field","name":{"kind":"Name","value":"sizeParam"}}]}}]} as unknown as DocumentNode<InventoryCosmosInfoFragment, unknown>;
export const InventoryInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"InventoryShadowsInfo"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"InventoryWorleyInfo"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"InventoryCosmosInfo"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShadowsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Shadows"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bodyLength"}},{"kind":"Field","name":{"kind":"Name","value":"centeringFactor"}},{"kind":"Field","name":{"kind":"Name","value":"matchingFactor"}},{"kind":"Field","name":{"kind":"Name","value":"minDistance"}},{"kind":"Field","name":{"kind":"Name","value":"avoidFactor"}},{"kind":"Field","name":{"kind":"Name","value":"turnFactor"}},{"kind":"Field","name":{"kind":"Name","value":"visualRange"}},{"kind":"Field","name":{"kind":"Name","value":"speedLimit"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorleyMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Worley"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"gridCount"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"movementParam"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CosmosMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cosmos"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shootingStarCount"}},{"kind":"Field","name":{"kind":"Name","value":"shootingStarColors"}},{"kind":"Field","name":{"kind":"Name","value":"starCount"}},{"kind":"Field","name":{"kind":"Name","value":"speedParam"}},{"kind":"Field","name":{"kind":"Name","value":"sizeParam"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryShadowsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"shadowsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shadowLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shadowCursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShadowsMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryWorleyInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"worleyCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"worleyLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"worleyCursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorleyMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryCosmosInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cosmosCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cosmosLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cosmosCursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CosmosMinimalInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<InventoryInfoFragment, unknown>;
export const MiniProfileInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<MiniProfileInfoFragment, unknown>;
export const UpdateRecordInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UpdateRecordInfoFragment, unknown>;
export const UpsertRecordInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UpsertRecordInfoFragment, unknown>;
export const RemoveRecordInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<RemoveRecordInfoFragment, unknown>;
export const RecoverRecordInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<RecoverRecordInfoFragment, unknown>;
export const PentagramNodesInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramNodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}}]} as unknown as DocumentNode<PentagramNodesInfoFragment, unknown>;
export const PentagramRevisionsMinimalInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<PentagramRevisionsMinimalInfoFragment, unknown>;
export const PentagramsSelectInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramNodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<PentagramsSelectInfoFragment, unknown>;
export const OeuvrePentagramsInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvrePentagramsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNodesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramNodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<OeuvrePentagramsInfoFragment, unknown>;
export const OeuvresInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvrePentagramsInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvresArtistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvresGenresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramNodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvrePentagramsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNodesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<OeuvresInfoFragment, unknown>;
export const PentagramsUpdateInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsUpdateInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramNodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PentagramsUpdateInfoFragment, unknown>;
export const PentagramsSelectUserInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectUserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PentagramsSelectUserInfoFragment, unknown>;
export const PentagramRevisionsInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}}]} as unknown as DocumentNode<PentagramRevisionsInfoFragment, unknown>;
export const ProfileFollowInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileFollowInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"followingsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"following_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"followersCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<ProfileFollowInfoFragment, unknown>;
export const ProfilePentagramInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfilePentagramInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pentagramLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pentagramCursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramNodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProfilePentagramInfoFragment, unknown>;
export const PentagramRevisionFeedInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionFeedInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramNodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PentagramRevisionFeedInfoFragment, unknown>;
export const ProfileRevisionInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileRevisionInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"revisionLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"revisionCursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionFeedInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramNodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionFeedInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}}]} as unknown as DocumentNode<ProfileRevisionInfoFragment, unknown>;
export const ProfilesInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfilesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFollowInfo"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfilePentagramInfo"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileRevisionInfo"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramNodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionFeedInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileFollowInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"followingsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"following_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"followersCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfilePentagramInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pentagramLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pentagramCursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileRevisionInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"revisionLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"revisionCursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionFeedInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProfilesInfoFragment, unknown>;
export const AuthInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFollowInfo"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileFollowInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"followingsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"following_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"followersCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AuthInfoFragment, unknown>;
export const FeedInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FeedInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Feed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionFeedInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramNodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionFeedInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}}]} as unknown as DocumentNode<FeedInfoFragment, unknown>;
export const FollowRecommendationInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowRecommendationInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Feed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"recommendation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<FollowRecommendationInfoFragment, unknown>;
export const UpdateProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mutableId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"updateUsersCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nickname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mutableId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mutableId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const GetArtistInfoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArtistInfoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artistsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistOeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvresArtistsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"oeuvreId"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistOeuvresInfo"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]} as unknown as DocumentNode<GetArtistInfoByIdQuery, GetArtistInfoByIdQueryVariables>;
export const GetGenreInfoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getGenreInfoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenreOeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvresGenresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"oeuvreId"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenreOeuvresInfo"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<GetGenreInfoByIdQuery, GetGenreInfoByIdQueryVariables>;
export const InsertCosmosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertCosmos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shootingStarColors"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"starCount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shootingStarCount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"speedParam"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sizeParam"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"insertIntoCosmosCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"shootingStarColors"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shootingStarColors"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"shootingStarCount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shootingStarCount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"starCount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"starCount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"speedParam"},"value":{"kind":"Variable","name":{"kind":"Name","value":"speedParam"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"sizeParam"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sizeParam"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CosmosMinimalInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CosmosMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cosmos"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shootingStarCount"}},{"kind":"Field","name":{"kind":"Name","value":"shootingStarColors"}},{"kind":"Field","name":{"kind":"Name","value":"starCount"}},{"kind":"Field","name":{"kind":"Name","value":"speedParam"}},{"kind":"Field","name":{"kind":"Name","value":"sizeParam"}}]}}]} as unknown as DocumentNode<InsertCosmosMutation, InsertCosmosMutationVariables>;
export const DeleteCosmosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteCosmos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"deleteFromCosmosCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CosmosMinimalInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CosmosMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cosmos"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shootingStarCount"}},{"kind":"Field","name":{"kind":"Name","value":"shootingStarColors"}},{"kind":"Field","name":{"kind":"Name","value":"starCount"}},{"kind":"Field","name":{"kind":"Name","value":"speedParam"}},{"kind":"Field","name":{"kind":"Name","value":"sizeParam"}}]}}]} as unknown as DocumentNode<DeleteCosmosMutation, DeleteCosmosMutationVariables>;
export const RenameCosmosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"renameCosmos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"updateCosmosCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CosmosMinimalInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CosmosMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cosmos"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shootingStarCount"}},{"kind":"Field","name":{"kind":"Name","value":"shootingStarColors"}},{"kind":"Field","name":{"kind":"Name","value":"starCount"}},{"kind":"Field","name":{"kind":"Name","value":"speedParam"}},{"kind":"Field","name":{"kind":"Name","value":"sizeParam"}}]}}]} as unknown as DocumentNode<RenameCosmosMutation, RenameCosmosMutationVariables>;
export const InsertShadowsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertShadows"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bodyLength"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"centeringFactor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"matchingFactor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"minDistance"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avoidFactor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"turnFactor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"visualRange"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"speedLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"insertIntoShadowsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"color"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"bodyLength"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bodyLength"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"centeringFactor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"centeringFactor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"matchingFactor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"matchingFactor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"minDistance"},"value":{"kind":"Variable","name":{"kind":"Name","value":"minDistance"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"avoidFactor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avoidFactor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"turnFactor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"turnFactor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"visualRange"},"value":{"kind":"Variable","name":{"kind":"Name","value":"visualRange"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"speedLimit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"speedLimit"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShadowsMinimalInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShadowsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Shadows"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bodyLength"}},{"kind":"Field","name":{"kind":"Name","value":"centeringFactor"}},{"kind":"Field","name":{"kind":"Name","value":"matchingFactor"}},{"kind":"Field","name":{"kind":"Name","value":"minDistance"}},{"kind":"Field","name":{"kind":"Name","value":"avoidFactor"}},{"kind":"Field","name":{"kind":"Name","value":"turnFactor"}},{"kind":"Field","name":{"kind":"Name","value":"visualRange"}},{"kind":"Field","name":{"kind":"Name","value":"speedLimit"}}]}}]} as unknown as DocumentNode<InsertShadowsMutation, InsertShadowsMutationVariables>;
export const DeleteShadowsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteShadows"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"deleteFromShadowsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShadowsMinimalInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShadowsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Shadows"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bodyLength"}},{"kind":"Field","name":{"kind":"Name","value":"centeringFactor"}},{"kind":"Field","name":{"kind":"Name","value":"matchingFactor"}},{"kind":"Field","name":{"kind":"Name","value":"minDistance"}},{"kind":"Field","name":{"kind":"Name","value":"avoidFactor"}},{"kind":"Field","name":{"kind":"Name","value":"turnFactor"}},{"kind":"Field","name":{"kind":"Name","value":"visualRange"}},{"kind":"Field","name":{"kind":"Name","value":"speedLimit"}}]}}]} as unknown as DocumentNode<DeleteShadowsMutation, DeleteShadowsMutationVariables>;
export const RenameShadowsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"renameShadows"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"updateShadowsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShadowsMinimalInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShadowsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Shadows"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bodyLength"}},{"kind":"Field","name":{"kind":"Name","value":"centeringFactor"}},{"kind":"Field","name":{"kind":"Name","value":"matchingFactor"}},{"kind":"Field","name":{"kind":"Name","value":"minDistance"}},{"kind":"Field","name":{"kind":"Name","value":"avoidFactor"}},{"kind":"Field","name":{"kind":"Name","value":"turnFactor"}},{"kind":"Field","name":{"kind":"Name","value":"visualRange"}},{"kind":"Field","name":{"kind":"Name","value":"speedLimit"}}]}}]} as unknown as DocumentNode<RenameShadowsMutation, RenameShadowsMutationVariables>;
export const InsertWorleyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertWorley"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gridCount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"movementParam"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"insertIntoWorleyCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"color"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"gridCount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gridCount"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"movementParam"},"value":{"kind":"Variable","name":{"kind":"Name","value":"movementParam"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorleyMinimalInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorleyMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Worley"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"gridCount"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"movementParam"}}]}}]} as unknown as DocumentNode<InsertWorleyMutation, InsertWorleyMutationVariables>;
export const DeleteWorleyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteWorley"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"deleteFromWorleyCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorleyMinimalInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorleyMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Worley"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"gridCount"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"movementParam"}}]}}]} as unknown as DocumentNode<DeleteWorleyMutation, DeleteWorleyMutationVariables>;
export const RenameWorleyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"renameWorley"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"updateWorleyCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorleyMinimalInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorleyMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Worley"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"gridCount"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"movementParam"}}]}}]} as unknown as DocumentNode<RenameWorleyMutation, RenameWorleyMutationVariables>;
export const GetUserInventoryByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserInventoryById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shadowLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shadowCursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cosmosLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cosmosCursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"worleyLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"worleyCursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"usersCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"InventoryInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShadowsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Shadows"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"bodyLength"}},{"kind":"Field","name":{"kind":"Name","value":"centeringFactor"}},{"kind":"Field","name":{"kind":"Name","value":"matchingFactor"}},{"kind":"Field","name":{"kind":"Name","value":"minDistance"}},{"kind":"Field","name":{"kind":"Name","value":"avoidFactor"}},{"kind":"Field","name":{"kind":"Name","value":"turnFactor"}},{"kind":"Field","name":{"kind":"Name","value":"visualRange"}},{"kind":"Field","name":{"kind":"Name","value":"speedLimit"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryShadowsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"shadowsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shadowLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shadowCursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShadowsMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorleyMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Worley"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"gridCount"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"movementParam"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryWorleyInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"worleyCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"worleyLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"worleyCursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorleyMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CosmosMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cosmos"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shootingStarCount"}},{"kind":"Field","name":{"kind":"Name","value":"shootingStarColors"}},{"kind":"Field","name":{"kind":"Name","value":"starCount"}},{"kind":"Field","name":{"kind":"Name","value":"speedParam"}},{"kind":"Field","name":{"kind":"Name","value":"sizeParam"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryCosmosInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cosmosCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cosmosLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cosmosCursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CosmosMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"InventoryShadowsInfo"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"InventoryWorleyInfo"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"InventoryCosmosInfo"}}]}}]} as unknown as DocumentNode<GetUserInventoryByIdQuery, GetUserInventoryByIdQueryVariables>;
export const GetOeuvreInfoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOeuvreInfoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramNodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvrePentagramsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNodesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvrePentagramsInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvresArtistsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"oeuvresGenresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOeuvreInfoByIdQuery, GetOeuvreInfoByIdQueryVariables>;
export const DeletePentagramDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePentagram"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"deleteFromPentagramsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DeletePentagramMutation, DeletePentagramMutationVariables>;
export const GetPentagramUpdateInfoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPentagramUpdateInfoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsUpdateInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramNodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsUpdateInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPentagramUpdateInfoByIdQuery, GetPentagramUpdateInfoByIdQueryVariables>;
export const GetPentagramSelectInfoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPentagramSelectInfoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramNodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPentagramSelectInfoByIdQuery, GetPentagramSelectInfoByIdQueryVariables>;
export const GetPentagramsSelectUserInfoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPentagramsSelectUserInfoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectUserInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectUserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]} as unknown as DocumentNode<GetPentagramsSelectUserInfoByIdQuery, GetPentagramsSelectUserInfoByIdQueryVariables>;
export const GetPentagramNodesInfoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPentagramNodesInfoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNodesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramNodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPentagramNodesInfoByIdQuery, GetPentagramNodesInfoByIdQueryVariables>;
export const GetPentagramRevisionsInfoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPentagramRevisionsInfoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPentagramRevisionsInfoByIdQuery, GetPentagramRevisionsInfoByIdQueryVariables>;
export const InsertFollowingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertFollowings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"followerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"followingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"insertIntoFollowingsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"followerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"followerId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"followingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"followingId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"followerId"}},{"kind":"Field","name":{"kind":"Name","value":"followingId"}}]}}]}}]}}]} as unknown as DocumentNode<InsertFollowingsMutation, InsertFollowingsMutationVariables>;
export const DeleteFollowingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteFollowings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"followerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"followingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"deleteFromFollowingsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"followingId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"followingId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"followerId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"followerId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"followerId"}},{"kind":"Field","name":{"kind":"Name","value":"followingId"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteFollowingsMutation, DeleteFollowingsMutationVariables>;
export const GetUserByMutableIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserByMutableId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mutableId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pentagramLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pentagramCursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"revisionLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"revisionCursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"usersCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"mutableId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mutableId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfilesInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileFollowInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"followingsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"following_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"followersCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramNodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfilePentagramInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pentagramLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pentagramCursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionFeedInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileRevisionInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"revisionLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"revisionCursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionFeedInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfilesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFollowInfo"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfilePentagramInfo"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileRevisionInfo"}}]}}]} as unknown as DocumentNode<GetUserByMutableIdQuery, GetUserByMutableIdQueryVariables>;
export const GetUserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"usersCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileFollowInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"followingsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"following_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"followersCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"follower_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFollowInfo"}}]}}]} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetFeedByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFeedById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"feedCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FeedInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpdateRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpsertRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionUpsertRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RemoveRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRemoveRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousAngle"}},{"kind":"Field","name":{"kind":"Name","value":"previousDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecoverRecordInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisionRecoverRecords"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAngle"}},{"kind":"Field","name":{"kind":"Name","value":"currentDistance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramNodesInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramNodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpsertRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RemoveRecordInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecoverRecordInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpdateRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionUpsertRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRemoveRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionRecoverRecordsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramsSelectInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pentagrams"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramNodesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramNodesInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagramRevisionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionsMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PentagramRevisionFeedInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PentagramRevisions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pentagram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramsSelectInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FeedInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Feed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PentagramRevisionFeedInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetFeedByIdQuery, GetFeedByIdQueryVariables>;
export const GetFollowRecommendationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFollowRecommendation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"feedCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FollowRecommendationInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowRecommendationInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Feed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"recommendation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetFollowRecommendationQuery, GetFollowRecommendationQueryVariables>;
export const InsertArtistsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertArtists"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"insertIntoArtistsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"bio"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<InsertArtistsMutation, InsertArtistsMutationVariables>;
export const InsertOeuvresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertOeuvres"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"insertIntoOeuvresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<InsertOeuvresMutation, InsertOeuvresMutationVariables>;
export const InsertGenresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertGenres"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"insertIntoGenresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<InsertGenresMutation, InsertGenresMutationVariables>;
export const InsertOeuvresArtistsRelationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertOeuvresArtistsRelation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"metaId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oeuvreId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"insertIntoOeuvresArtistsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"oeuvreId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oeuvreId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"artistId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"metaId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvreId"}}]}}]}}]}}]} as unknown as DocumentNode<InsertOeuvresArtistsRelationMutation, InsertOeuvresArtistsRelationMutationVariables>;
export const InsertOeuvresGenresRelationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertOeuvresGenresRelation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"metaId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oeuvreId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"insertIntoOeuvresGenresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"oeuvreId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oeuvreId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"genreId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"metaId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvreId"}}]}}]}}]}}]} as unknown as DocumentNode<InsertOeuvresGenresRelationMutation, InsertOeuvresGenresRelationMutationVariables>;
export const DeleteOeuvresArtistsRelationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteOeuvresArtistsRelation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"metaId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oeuvreId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"deleteFromOeuvresArtistsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"oeuvreId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oeuvreId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"artistId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"metaId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvreId"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteOeuvresArtistsRelationMutation, DeleteOeuvresArtistsRelationMutationVariables>;
export const DeleteOeuvresGenresRelationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteOeuvresGenresRelation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"metaId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oeuvreId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"deleteFromOeuvresGenresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"oeuvreId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oeuvreId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"genreId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"metaId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvreId"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteOeuvresGenresRelationMutation, DeleteOeuvresGenresRelationMutationVariables>;
export const UpdateArtistsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateArtists"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"updateArtistsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"bio"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateArtistsMutation, UpdateArtistsMutationVariables>;
export const UpdateOeuvresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateOeuvres"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"updateOeuvresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateOeuvresMutation, UpdateOeuvresMutationVariables>;
export const UpdateGenresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateGenres"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"updateGenresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateGenresMutation, UpdateGenresMutationVariables>;
export const SearchOeuvresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchOeuvres"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"oeuvresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OeuvresMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OeuvresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Oeuvres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<SearchOeuvresQuery, SearchOeuvresQueryVariables>;
export const SearchUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"usersCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"mutableId"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"mutableId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MiniProfileInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MiniProfileInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"mutableId"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<SearchUsersQuery, SearchUsersQueryVariables>;
export const SearchArtistsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchArtists"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"artistsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistsMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistsMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Artists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<SearchArtistsQuery, SearchArtistsQueryVariables>;
export const SearchGenresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchGenres"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"genresCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenresMinimalInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenresMinimalInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Genres"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<SearchGenresQuery, SearchGenresQueryVariables>;