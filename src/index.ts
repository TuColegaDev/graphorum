import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./graphql/resolvers/resolvers.js";
import { typeDefs } from "./graphql/schemas/schema.js";

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});


const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);