import { GraphQLServer } from "graphql-yoga";
import db from "./db";
import { Exercise, Query, User } from "./resolvers";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  context: {
    db,
  },
  resolvers: {
    Query,
    Exercise,
    User,
  },
});

const options = {
  port: 5000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground",
};

server
  .start(options, () => {
    console.log(`Server is running on localhost: ${options.port}`);
  })
  .catch(console.log);
