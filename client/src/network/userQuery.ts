import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const userQueryGQL = gql`
  query user {
    me {
      id
      name
      email
    }
  }
`;

export const useUserQuery = () => useQuery(userQueryGQL);
