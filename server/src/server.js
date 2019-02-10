import express from "express";
import { database } from "./config/mongooseConfig";
import { apolloExpress, graphiqlExpress } from "apollo-server";
import { schema } from "./graphql/index";
import { bodyParser } from "body-parser";

//commented for apollo-server usage as server
//import graphqlHTTP from "express-graphql";

const port = process.env.port || 4000;

//connection established to mongoDB
//develop error handling
var db = database();
var app = express();

app.use(
  "/graphql",
  bodyParser.json(),
  apolloExpress({
    schema: schema
  })
);

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(port, () => {
  console.log("Info : Server listening at port : " + port);
});
