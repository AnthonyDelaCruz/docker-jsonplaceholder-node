const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 5000;

async function fetchPosts() {
  return await axios.get("https://jsonplaceholder.typicode.com/posts");
}

app.use(express.json());

app.use((req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  next();
});

app.get("/", async (req, res) => {
  res.send("Welcome to my Dockerized node app!");
});

app.get("/posts", async (req, res) => {
  const posts = await fetchPosts();

  res.status(200).json({ data: posts.data });
});

app.listen(PORT, () => {
  console.log("App is listening to port" + PORT);
});
