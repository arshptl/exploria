import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Attration = {
  __typename?: 'Attration';
  category: Scalars['String'];
  id: Scalars['ID'];
  location: Scalars['String'];
  name: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
};

export type AuthUser = {
  __typename?: 'AuthUser';
  token: Scalars['String'];
  user: User;
};

export type ItineraryInput = {
  days: Scalars['String'];
  place: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createItinerary?: Maybe<UserItinerary>;
  signin: AuthUser;
  signup: AuthUser;
};


export type MutationCreateItineraryArgs = {
  input: ItineraryInput;
};


export type MutationSigninArgs = {
  input: SigninInput;
};


export type MutationSignupArgs = {
  input: SignupInput;
};

export type Query = {
  __typename?: 'Query';
  itineraries: Array<Maybe<UserItinerary>>;
  me: User;
  users: Array<Maybe<User>>;
};

export type Settings = {
  __typename?: 'Settings';
  emailNotifications: Scalars['Boolean'];
  id: Scalars['ID'];
  theme: Theme;
  user: User;
};

export type SigninInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignupInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export enum Theme {
  Dark = 'DARK',
  Light = 'LIGHT'
}

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  history: Array<Maybe<Scalars['String']>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserItinerary = {
  __typename?: 'UserItinerary';
  attractions: Array<Maybe<Attration>>;
  cost: Scalars['String'];
  createdAt: Scalars['String'];
  days: Scalars['String'];
  flight: Scalars['String'];
  id: Scalars['ID'];
  place: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type SigninMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SigninMutation = { __typename?: 'Mutation', signin: { __typename?: 'AuthUser', token: string } };

export type CreateItineraryMutationVariables = Exact<{
  input: ItineraryInput;
}>;


export type CreateItineraryMutation = { __typename?: 'Mutation', createItinerary?: { __typename?: 'UserItinerary', title: string, place: string } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', email: string, history: Array<string | null>, id: string, name: string } | null> };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', me: { __typename?: 'User', name: string, email: string, history: Array<string | null> } };

export type AllItinerariesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllItinerariesQuery = { __typename?: 'Query', itineraries: Array<{ __typename?: 'UserItinerary', createdAt: string, title: string, days: string, cost: string, place: string, flight: string, attractions: Array<{ __typename?: 'Attration', name: string, category: string, location: string } | null> } | null> };


export const SigninDocument = gql`
    mutation Signin($email: String!, $password: String!) {
  signin(input: {email: $email, password: $password}) {
    token
  }
}
    `;
export type SigninMutationFn = Apollo.MutationFunction<SigninMutation, SigninMutationVariables>;

/**
 * __useSigninMutation__
 *
 * To run a mutation, you first call `useSigninMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSigninMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinMutation, { data, loading, error }] = useSigninMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSigninMutation(baseOptions?: Apollo.MutationHookOptions<SigninMutation, SigninMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SigninMutation, SigninMutationVariables>(SigninDocument, options);
      }
export type SigninMutationHookResult = ReturnType<typeof useSigninMutation>;
export type SigninMutationResult = Apollo.MutationResult<SigninMutation>;
export type SigninMutationOptions = Apollo.BaseMutationOptions<SigninMutation, SigninMutationVariables>;
export const CreateItineraryDocument = gql`
    mutation CreateItinerary($input: ItineraryInput!) {
  createItinerary(input: $input) {
    title
    place
  }
}
    `;
export type CreateItineraryMutationFn = Apollo.MutationFunction<CreateItineraryMutation, CreateItineraryMutationVariables>;

/**
 * __useCreateItineraryMutation__
 *
 * To run a mutation, you first call `useCreateItineraryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItineraryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItineraryMutation, { data, loading, error }] = useCreateItineraryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateItineraryMutation(baseOptions?: Apollo.MutationHookOptions<CreateItineraryMutation, CreateItineraryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateItineraryMutation, CreateItineraryMutationVariables>(CreateItineraryDocument, options);
      }
export type CreateItineraryMutationHookResult = ReturnType<typeof useCreateItineraryMutation>;
export type CreateItineraryMutationResult = Apollo.MutationResult<CreateItineraryMutation>;
export type CreateItineraryMutationOptions = Apollo.BaseMutationOptions<CreateItineraryMutation, CreateItineraryMutationVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    email
    history
    id
    name
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetMeDocument = gql`
    query GetMe {
  me {
    name
    email
    history
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;
export const AllItinerariesDocument = gql`
    query AllItineraries {
  itineraries {
    createdAt
    title
    days
    cost
    place
    attractions {
      name
      category
      location
    }
    flight
  }
}
    `;

/**
 * __useAllItinerariesQuery__
 *
 * To run a query within a React component, call `useAllItinerariesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllItinerariesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllItinerariesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllItinerariesQuery(baseOptions?: Apollo.QueryHookOptions<AllItinerariesQuery, AllItinerariesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllItinerariesQuery, AllItinerariesQueryVariables>(AllItinerariesDocument, options);
      }
export function useAllItinerariesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllItinerariesQuery, AllItinerariesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllItinerariesQuery, AllItinerariesQueryVariables>(AllItinerariesDocument, options);
        }
export type AllItinerariesQueryHookResult = ReturnType<typeof useAllItinerariesQuery>;
export type AllItinerariesLazyQueryHookResult = ReturnType<typeof useAllItinerariesLazyQuery>;
export type AllItinerariesQueryResult = Apollo.QueryResult<AllItinerariesQuery, AllItinerariesQueryVariables>;