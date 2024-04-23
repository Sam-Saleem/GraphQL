const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

// Connect to mongodb
mongoose.connect("mongodb://localhost:27017/graphql");
// connection event listener:
mongoose.connection.once("open", () => {
  console.log("Database connected.");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Server is listening at http://localhost:4000");
});
