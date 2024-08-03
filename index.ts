const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"), () => {
  console.log(
    "Node.js express and static files are now loaded. type ctrl + c in console to stop running the server."
  );
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
