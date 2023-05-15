import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Signin($email: String!, $password: String!) {
    signin(input: { email: $email, password: $password }) {
      token
    }
  }
`;

export const CREATE_ITINERARY = gql`
  mutation CreateItinerary($input: ItineraryInput!) {
    createItinerary(input: $input) {
      title
      place
    }
  }
`;
