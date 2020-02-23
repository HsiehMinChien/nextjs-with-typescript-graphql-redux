import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export enum _ModelMutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type _QueryMeta = {
   __typename?: '_QueryMeta',
  count: Scalars['Int'],
};

export type Auth_Provider_Email = {
  email: Scalars['String'],
  password: Scalars['String'],
};

export type AuthProviderSignupData = {
  email?: Maybe<Auth_Provider_Email>,
};

export type CreateFile = {
  name: Scalars['String'],
};

export type CreatePost = {
  title: Scalars['String'],
  url: Scalars['String'],
  votes?: Maybe<Scalars['Int']>,
};

export type CreateUser = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
};


export type File = Node & {
   __typename?: 'File',
  contentType: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  secret: Scalars['String'],
  size: Scalars['Int'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  url: Scalars['String'],
};

export type FileFilter = {
  AND?: Maybe<Array<FileFilter>>,
  OR?: Maybe<Array<FileFilter>>,
  contentType?: Maybe<Scalars['String']>,
  contentType_not?: Maybe<Scalars['String']>,
  contentType_in?: Maybe<Array<Scalars['String']>>,
  contentType_not_in?: Maybe<Array<Scalars['String']>>,
  contentType_lt?: Maybe<Scalars['String']>,
  contentType_lte?: Maybe<Scalars['String']>,
  contentType_gt?: Maybe<Scalars['String']>,
  contentType_gte?: Maybe<Scalars['String']>,
  contentType_contains?: Maybe<Scalars['String']>,
  contentType_not_contains?: Maybe<Scalars['String']>,
  contentType_starts_with?: Maybe<Scalars['String']>,
  contentType_not_starts_with?: Maybe<Scalars['String']>,
  contentType_ends_with?: Maybe<Scalars['String']>,
  contentType_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  secret?: Maybe<Scalars['String']>,
  secret_not?: Maybe<Scalars['String']>,
  secret_in?: Maybe<Array<Scalars['String']>>,
  secret_not_in?: Maybe<Array<Scalars['String']>>,
  secret_lt?: Maybe<Scalars['String']>,
  secret_lte?: Maybe<Scalars['String']>,
  secret_gt?: Maybe<Scalars['String']>,
  secret_gte?: Maybe<Scalars['String']>,
  secret_contains?: Maybe<Scalars['String']>,
  secret_not_contains?: Maybe<Scalars['String']>,
  secret_starts_with?: Maybe<Scalars['String']>,
  secret_not_starts_with?: Maybe<Scalars['String']>,
  secret_ends_with?: Maybe<Scalars['String']>,
  secret_not_ends_with?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  size_not?: Maybe<Scalars['Int']>,
  size_in?: Maybe<Array<Scalars['Int']>>,
  size_not_in?: Maybe<Array<Scalars['Int']>>,
  size_lt?: Maybe<Scalars['Int']>,
  size_lte?: Maybe<Scalars['Int']>,
  size_gt?: Maybe<Scalars['Int']>,
  size_gte?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
};

export enum FileOrderBy {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SecretAsc = 'secret_ASC',
  SecretDesc = 'secret_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type FilePreviousValues = {
   __typename?: 'FilePreviousValues',
  contentType: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  secret: Scalars['String'],
  size: Scalars['Int'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  url: Scalars['String'],
};

export type FileSubscriptionFilter = {
  AND?: Maybe<Array<FileSubscriptionFilter>>,
  OR?: Maybe<Array<FileSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<FileSubscriptionFilterNode>,
};

export type FileSubscriptionFilterNode = {
  contentType?: Maybe<Scalars['String']>,
  contentType_not?: Maybe<Scalars['String']>,
  contentType_in?: Maybe<Array<Scalars['String']>>,
  contentType_not_in?: Maybe<Array<Scalars['String']>>,
  contentType_lt?: Maybe<Scalars['String']>,
  contentType_lte?: Maybe<Scalars['String']>,
  contentType_gt?: Maybe<Scalars['String']>,
  contentType_gte?: Maybe<Scalars['String']>,
  contentType_contains?: Maybe<Scalars['String']>,
  contentType_not_contains?: Maybe<Scalars['String']>,
  contentType_starts_with?: Maybe<Scalars['String']>,
  contentType_not_starts_with?: Maybe<Scalars['String']>,
  contentType_ends_with?: Maybe<Scalars['String']>,
  contentType_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  secret?: Maybe<Scalars['String']>,
  secret_not?: Maybe<Scalars['String']>,
  secret_in?: Maybe<Array<Scalars['String']>>,
  secret_not_in?: Maybe<Array<Scalars['String']>>,
  secret_lt?: Maybe<Scalars['String']>,
  secret_lte?: Maybe<Scalars['String']>,
  secret_gt?: Maybe<Scalars['String']>,
  secret_gte?: Maybe<Scalars['String']>,
  secret_contains?: Maybe<Scalars['String']>,
  secret_not_contains?: Maybe<Scalars['String']>,
  secret_starts_with?: Maybe<Scalars['String']>,
  secret_not_starts_with?: Maybe<Scalars['String']>,
  secret_ends_with?: Maybe<Scalars['String']>,
  secret_not_ends_with?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  size_not?: Maybe<Scalars['Int']>,
  size_in?: Maybe<Array<Scalars['Int']>>,
  size_not_in?: Maybe<Array<Scalars['Int']>>,
  size_lt?: Maybe<Scalars['Int']>,
  size_lte?: Maybe<Scalars['Int']>,
  size_gt?: Maybe<Scalars['Int']>,
  size_gte?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
};

export type FileSubscriptionPayload = {
   __typename?: 'FileSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<File>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<FilePreviousValues>,
};

export type InvokeFunctionInput = {
  name: Scalars['String'],
  input: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type InvokeFunctionPayload = {
   __typename?: 'InvokeFunctionPayload',
  result: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createFile?: Maybe<File>,
  createPost?: Maybe<Post>,
  updateFile?: Maybe<File>,
  updatePost?: Maybe<Post>,
  updateUser?: Maybe<User>,
  updateOrCreateFile?: Maybe<File>,
  updateOrCreatePost?: Maybe<Post>,
  updateOrCreateUser?: Maybe<User>,
  deleteFile?: Maybe<File>,
  deletePost?: Maybe<Post>,
  deleteUser?: Maybe<User>,
  signinUser: SigninPayload,
  createUser?: Maybe<User>,
  invokeFunction?: Maybe<InvokeFunctionPayload>,
};


export type MutationCreateFileArgs = {
  name: Scalars['String']
};


export type MutationCreatePostArgs = {
  title: Scalars['String'],
  url: Scalars['String'],
  votes?: Maybe<Scalars['Int']>
};


export type MutationUpdateFileArgs = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  votes?: Maybe<Scalars['Int']>
};


export type MutationUpdateUserArgs = {
  firstName?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  lastName?: Maybe<Scalars['String']>
};


export type MutationUpdateOrCreateFileArgs = {
  update: UpdateFile,
  create: CreateFile
};


export type MutationUpdateOrCreatePostArgs = {
  update: UpdatePost,
  create: CreatePost
};


export type MutationUpdateOrCreateUserArgs = {
  update: UpdateUser,
  create: CreateUser
};


export type MutationDeleteFileArgs = {
  id: Scalars['ID']
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']
};


export type MutationSigninUserArgs = {
  email?: Maybe<Auth_Provider_Email>
};


export type MutationCreateUserArgs = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  authProvider: AuthProviderSignupData
};


export type MutationInvokeFunctionArgs = {
  input: InvokeFunctionInput
};

export type Node = {
  id: Scalars['ID'],
};

export type Post = Node & {
   __typename?: 'Post',
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  title: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  url: Scalars['String'],
  votes?: Maybe<Scalars['Int']>,
};

export type PostFilter = {
  AND?: Maybe<Array<PostFilter>>,
  OR?: Maybe<Array<PostFilter>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
  votes?: Maybe<Scalars['Int']>,
  votes_not?: Maybe<Scalars['Int']>,
  votes_in?: Maybe<Array<Scalars['Int']>>,
  votes_not_in?: Maybe<Array<Scalars['Int']>>,
  votes_lt?: Maybe<Scalars['Int']>,
  votes_lte?: Maybe<Scalars['Int']>,
  votes_gt?: Maybe<Scalars['Int']>,
  votes_gte?: Maybe<Scalars['Int']>,
};

export enum PostOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  VotesAsc = 'votes_ASC',
  VotesDesc = 'votes_DESC'
}

export type PostPreviousValues = {
   __typename?: 'PostPreviousValues',
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  title: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  url: Scalars['String'],
  votes?: Maybe<Scalars['Int']>,
};

export type PostSubscriptionFilter = {
  AND?: Maybe<Array<PostSubscriptionFilter>>,
  OR?: Maybe<Array<PostSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PostSubscriptionFilterNode>,
};

export type PostSubscriptionFilterNode = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
  votes?: Maybe<Scalars['Int']>,
  votes_not?: Maybe<Scalars['Int']>,
  votes_in?: Maybe<Array<Scalars['Int']>>,
  votes_not_in?: Maybe<Array<Scalars['Int']>>,
  votes_lt?: Maybe<Scalars['Int']>,
  votes_lte?: Maybe<Scalars['Int']>,
  votes_gt?: Maybe<Scalars['Int']>,
  votes_gte?: Maybe<Scalars['Int']>,
};

export type PostSubscriptionPayload = {
   __typename?: 'PostSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<Post>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PostPreviousValues>,
};

export type Query = {
   __typename?: 'Query',
  allFiles: Array<File>,
  allPosts: Array<Post>,
  allUsers: Array<User>,
  _allFilesMeta: _QueryMeta,
  _allPostsMeta: _QueryMeta,
  _allUsersMeta: _QueryMeta,
  File?: Maybe<File>,
  Post?: Maybe<Post>,
  User?: Maybe<User>,
  user?: Maybe<User>,
  node?: Maybe<Node>,
};


export type QueryAllFilesArgs = {
  filter?: Maybe<FileFilter>,
  orderBy?: Maybe<FileOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAllPostsArgs = {
  filter?: Maybe<PostFilter>,
  orderBy?: Maybe<PostOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAllUsersArgs = {
  filter?: Maybe<UserFilter>,
  orderBy?: Maybe<UserOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllFilesMetaArgs = {
  filter?: Maybe<FileFilter>,
  orderBy?: Maybe<FileOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllPostsMetaArgs = {
  filter?: Maybe<PostFilter>,
  orderBy?: Maybe<PostOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllUsersMetaArgs = {
  filter?: Maybe<UserFilter>,
  orderBy?: Maybe<UserOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryFileArgs = {
  id?: Maybe<Scalars['ID']>,
  secret?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>
};


export type QueryPostArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryUserArgs = {
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type SigninPayload = {
   __typename?: 'SigninPayload',
  token?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
};

export type Subscription = {
   __typename?: 'Subscription',
  File?: Maybe<FileSubscriptionPayload>,
  Post?: Maybe<PostSubscriptionPayload>,
  User?: Maybe<UserSubscriptionPayload>,
};


export type SubscriptionFileArgs = {
  filter?: Maybe<FileSubscriptionFilter>
};


export type SubscriptionPostArgs = {
  filter?: Maybe<PostSubscriptionFilter>
};


export type SubscriptionUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>
};

export type UpdateFile = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
};

export type UpdatePost = {
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  votes?: Maybe<Scalars['Int']>,
};

export type UpdateUser = {
  firstName?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  lastName?: Maybe<Scalars['String']>,
};

export type User = Node & {
   __typename?: 'User',
  createdAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  id: Scalars['ID'],
  lastName: Scalars['String'],
  password?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type UserFilter = {
  AND?: Maybe<Array<UserFilter>>,
  OR?: Maybe<Array<UserFilter>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  firstName_not?: Maybe<Scalars['String']>,
  firstName_in?: Maybe<Array<Scalars['String']>>,
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  firstName_lt?: Maybe<Scalars['String']>,
  firstName_lte?: Maybe<Scalars['String']>,
  firstName_gt?: Maybe<Scalars['String']>,
  firstName_gte?: Maybe<Scalars['String']>,
  firstName_contains?: Maybe<Scalars['String']>,
  firstName_not_contains?: Maybe<Scalars['String']>,
  firstName_starts_with?: Maybe<Scalars['String']>,
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  firstName_ends_with?: Maybe<Scalars['String']>,
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  lastName?: Maybe<Scalars['String']>,
  lastName_not?: Maybe<Scalars['String']>,
  lastName_in?: Maybe<Array<Scalars['String']>>,
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  lastName_lt?: Maybe<Scalars['String']>,
  lastName_lte?: Maybe<Scalars['String']>,
  lastName_gt?: Maybe<Scalars['String']>,
  lastName_gte?: Maybe<Scalars['String']>,
  lastName_contains?: Maybe<Scalars['String']>,
  lastName_not_contains?: Maybe<Scalars['String']>,
  lastName_starts_with?: Maybe<Scalars['String']>,
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  lastName_ends_with?: Maybe<Scalars['String']>,
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  password_not?: Maybe<Scalars['String']>,
  password_in?: Maybe<Array<Scalars['String']>>,
  password_not_in?: Maybe<Array<Scalars['String']>>,
  password_lt?: Maybe<Scalars['String']>,
  password_lte?: Maybe<Scalars['String']>,
  password_gt?: Maybe<Scalars['String']>,
  password_gte?: Maybe<Scalars['String']>,
  password_contains?: Maybe<Scalars['String']>,
  password_not_contains?: Maybe<Scalars['String']>,
  password_starts_with?: Maybe<Scalars['String']>,
  password_not_starts_with?: Maybe<Scalars['String']>,
  password_ends_with?: Maybe<Scalars['String']>,
  password_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export enum UserOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserPreviousValues = {
   __typename?: 'UserPreviousValues',
  createdAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  id: Scalars['ID'],
  lastName: Scalars['String'],
  password?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type UserSubscriptionFilter = {
  AND?: Maybe<Array<UserSubscriptionFilter>>,
  OR?: Maybe<Array<UserSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<UserSubscriptionFilterNode>,
};

export type UserSubscriptionFilterNode = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  firstName_not?: Maybe<Scalars['String']>,
  firstName_in?: Maybe<Array<Scalars['String']>>,
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  firstName_lt?: Maybe<Scalars['String']>,
  firstName_lte?: Maybe<Scalars['String']>,
  firstName_gt?: Maybe<Scalars['String']>,
  firstName_gte?: Maybe<Scalars['String']>,
  firstName_contains?: Maybe<Scalars['String']>,
  firstName_not_contains?: Maybe<Scalars['String']>,
  firstName_starts_with?: Maybe<Scalars['String']>,
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  firstName_ends_with?: Maybe<Scalars['String']>,
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  lastName?: Maybe<Scalars['String']>,
  lastName_not?: Maybe<Scalars['String']>,
  lastName_in?: Maybe<Array<Scalars['String']>>,
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  lastName_lt?: Maybe<Scalars['String']>,
  lastName_lte?: Maybe<Scalars['String']>,
  lastName_gt?: Maybe<Scalars['String']>,
  lastName_gte?: Maybe<Scalars['String']>,
  lastName_contains?: Maybe<Scalars['String']>,
  lastName_not_contains?: Maybe<Scalars['String']>,
  lastName_starts_with?: Maybe<Scalars['String']>,
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  lastName_ends_with?: Maybe<Scalars['String']>,
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  password_not?: Maybe<Scalars['String']>,
  password_in?: Maybe<Array<Scalars['String']>>,
  password_not_in?: Maybe<Array<Scalars['String']>>,
  password_lt?: Maybe<Scalars['String']>,
  password_lte?: Maybe<Scalars['String']>,
  password_gt?: Maybe<Scalars['String']>,
  password_gte?: Maybe<Scalars['String']>,
  password_contains?: Maybe<Scalars['String']>,
  password_not_contains?: Maybe<Scalars['String']>,
  password_starts_with?: Maybe<Scalars['String']>,
  password_not_starts_with?: Maybe<Scalars['String']>,
  password_ends_with?: Maybe<Scalars['String']>,
  password_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export type UserSubscriptionPayload = {
   __typename?: 'UserSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<User>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<UserPreviousValues>,
};

export type GetAllUsersQueryVariables = {};


export type GetAllUsersQuery = (
  { __typename?: 'Query' }
  & { allUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);


export const GetAllUsersDocument = gql`
    query GetAllUsers {
  allUsers {
    id
  }
}
    `;
export type GetAllUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllUsersQuery, GetAllUsersQueryVariables>, 'query'>;

    export const GetAllUsersComponent = (props: GetAllUsersComponentProps) => (
      <ApolloReactComponents.Query<GetAllUsersQuery, GetAllUsersQueryVariables> query={GetAllUsersDocument} {...props} />
    );
    
export type GetAllUsersProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetAllUsersQuery, GetAllUsersQueryVariables> & TChildProps;
export function withGetAllUsers<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllUsersQuery,
  GetAllUsersQueryVariables,
  GetAllUsersProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllUsersQuery, GetAllUsersQueryVariables, GetAllUsersProps<TChildProps>>(GetAllUsersDocument, {
      alias: 'getAllUsers',
      ...operationOptions
    });
};
export type GetAllUsersQueryResult = ApolloReactCommon.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "INTERFACE",
        "name": "Node",
        "possibleTypes": [
          {
            "name": "File"
          },
          {
            "name": "Post"
          },
          {
            "name": "User"
          }
        ]
      }
    ]
  }
};
      export default result;
    

// Generated in 2020-02-23T11:50:29+08:00

// Demo for nextjs with typescript graphql redux