const { ApolloServer, AuthenticationError } = require("apollo-server");
const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");
const { createToken, getUserFromToken } = require("./auth");
// const { LogDirective, FormatDateDirective } = require("./directives");
const mongooose = require("mongoose");
const db = require("./db");

require("dotenv").config();

const database = process.env.MONGO_DB;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // schemaDirectives: {
  //   log: LogDirective,
  //   formatDate: FormatDateDirective,
  // },
  context: async({ req, connection }) => {
    const ctx = { ...db };
    if (connection) {
      return { ...ctx, ...connection.context };
    }
    
    const token = req.headers.authorization;
    const user = await getUserFromToken(token);
    // console.log("getUserFromToken", user);
    return { ...db, user, createToken };
  },
});

mongooose
  .connect(database, { useNewUrlParser: true })
  .then(() => {
    console.log("Mongo db connection established");
    return server.listen({ port: 7000 });
  })
  .then((res) => {
    console.log(`🚀 Server ready at ${res.url}`);
  });
