const gql = require("graphql-tag");

module.exports = gql`
  directive @log(format: String) on FIELD_DEFINITION
  directive @formatDate(format: String = "d, MMM, yyyy") on FIELD_DEFINITION
  enum Theme {
    DARK
    LIGHT
  }

  type User {
    id: ID
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

  input SigninInput {
    email: String!
    password: String!
  }

  type Query {
    me: User!
    users: [User]!
  }

  type Mutation {
    signup(input: SignupInput!): AuthUser!
    signin(input: SigninInput!): AuthUser!
  }
`;
