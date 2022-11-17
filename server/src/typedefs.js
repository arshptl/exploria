const gql = require("graphql-tag");

module.exports = gql`
  enum Theme {
    DARK
    LIGHT
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type AuthUser {
    token: String!
    user: User!
  }

  input SignupInput {
    name: String!
    email: String!
    password: String!
  }

  type Query {
    me(ID: ID!): User
    users: [User]!
  }

  type Mutation {
    signup(input: SignupInput!): AuthUser!
  }
`;
