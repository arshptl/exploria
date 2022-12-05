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

const GET_ALL_SEATS = gql`
query MyQuery {
  seatingArrangements(condition: { floorId: 31 }) {
    edges {
      node {
        floorId
      }
    }
  }
}
`;



export { GET_USERS, GET_ALL_SEATS };
