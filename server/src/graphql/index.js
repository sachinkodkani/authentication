import { makeExecutableSchema } from "graphql-tools";
import { merge } from "lodash";

import { typeDef as User, resolvers as userResolver } from "./queries/user";

const Query = `
  type Query {
    _empty: String
  }
`;

const resolvers = {};

var schema = makeExecutableSchema({
  typeDefs: { Query, User },
  resolvers: merge(resolvers, userResolver)
});

export { schema };
