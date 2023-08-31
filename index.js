import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("../pages/index.ejs");
});

app.listen(port, () => {
  console.log("listening on port");
});
