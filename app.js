const express = require("express");
const indexRouter = require("./router/");
const mainRouter = require("./router/main");

const app = express();

// Router
app.use("/main", mainRouter);
app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("App is on PORT 3000!");
});
