const { ApolloServer } = require('apollo-server');
const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");
const mongooose = require("mongoose");
require("dotenv").config();

const database = process.env.MONGO_DB;

console.log(database);
const server = new ApolloServer({
    typeDefs,
    resolvers,
})

mongooose.connect(database, { useNewUrlParser: true }).then(() => {
    console.log("Mongo db connection established");
    return server.listen({ port: 5000 });
}).then((res) => {
    console.log(res);
    console.log(`🚀 Server ready at ${res.url}`);
});