import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloError,
  NormalizedCacheObject,
  from,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import { useAuthToken } from "./auth";

const httpLink = new HttpLink({ uri: "http://localhost:7000/graphql" });

// const authMiddleware = (authToken: string) =>
//   new ApolloLink((operation, forward) => {
//     // add the authorization to the headers
//     if (authToken) {
//       operation.setContext({
//         headers: {
//           authorization: `Bearer ${authToken}`,
//         },
//       });
//     }

//     return forward(operation);
//   });

const withToken = (authToken: any) =>
  setContext(async (_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: authToken ? `${authToken}` : null,
      },
    };
  });

const cache = new InMemoryCache({});

export const useAppApolloClient = () => {
  const [authToken] = useAuthToken();
  return new ApolloClient({
    // ssrMode: typeof window === 'undefined',
    link: withToken(authToken).concat(httpLink),
    cache: cache,
  });
};
