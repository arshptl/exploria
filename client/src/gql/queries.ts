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

const GET_ME = gql`
  query GetMe {
    me {
      name
      email
      history
    }
  }
`;

const GET_ALL_ITINERARIES = gql`
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

export { GET_USERS, GET_ME, GET_ALL_ITINERARIES };
