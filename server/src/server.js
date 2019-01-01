import express from "express";
import { database } from "./config/mongooseConfig";
import graphqlHTTP from "express-graphql";
import { schema } from "./graphql/index";

const port = process.env.port || 4000;

//connection established to mongoDB
//develop error handling
var db = database();
var app = express();

app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true
    })
  );

app.listen(port, () => {
  console.log("Info : Server listening at port : " + port);
});
