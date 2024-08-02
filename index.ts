import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"), () => {
  console.log(
    "Node.js express and static files are now loaded. type ctrl + c in console to stop running the server."
  );
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});