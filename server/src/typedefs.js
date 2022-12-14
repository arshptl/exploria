const gql = require("graphql-tag");

module.exports = gql`
  directive @log(format: String) on FIELD_DEFINITION
  directive @formatDate(format: String = "d, MMM, yyyy") on FIELD_DEFINITION
  enum Theme {
    DARK
    LIGHT
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    history: [String]!
  }

  type Attration {
    id: ID!
    name: String!
    category: String!
    location: String!
    photoUrl: String
  }

  type UserItinerary {
    id: ID!
    createdAt: String! @formatDate
    updatedAt: String @formatDate
    title: String!
    days: String!
    cost: String!
    place: String!
    attractions: [Attration]!
    flight: String!
  }

  type AuthUser {
    token: String!
    user: User!
  }

  type Settings {
    id: ID!
    user: User!
    theme: Theme!
    emailNotifications: Boolean!
  }

  input SignupInput {
    name: String!
    email: String!
    password: String!
  }

  input SigninInput {
    email: String!
    password: String!
  }

  input ItineraryInput {
    place: String!
    days: String!
  }

  type Query {
    me: User!
    users: [User]!
    itineraries: [UserItinerary]!
  }

  type Mutation {
    signup(input: SignupInput!): AuthUser!
    signin(input: SigninInput!): AuthUser!
    createItinerary(input: ItineraryInput!): UserItinerary
  }
`;
