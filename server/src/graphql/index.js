import { makeExecutableSchema } from "graphql-tools";
import { merge } from "lodash";

import { 
  typeDef as User, 
  resolvers as userResolver 
} from "./queries/user";

import {
  typeDef as CreateUser,
  resolvers as createUserResolver
} from "./mutations/user";

const RootTypeDefs = `
  
  type Query 
  type Mutation

  schema {
    query : Query
    mutation : Mutation
  }

`;

var schema = makeExecutableSchema({
  typeDefs: [RootTypeDefs, User, CreateUser],
  resolvers: merge(userResolver, createUserResolver)
});

export { schema };
