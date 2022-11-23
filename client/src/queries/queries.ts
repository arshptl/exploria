import { gql } from "@apollo/client";

// Queries
const GET_USERS = gql`
  query GetUsers {
    users {
      email
      history
      id
      name
    }
  }
`;

export { GET_USERS };
