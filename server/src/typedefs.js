const gql = require("graphql-tag");

module.exports = gql`
    enum Theme {
        DARK
        LIGHT
    }

    type User {
        name: String!
        email: String
    }

    type Query {
        me(ID: ID!): User
    }
`;
