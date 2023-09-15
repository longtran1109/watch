const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("server.json");
const middlewares = jsonServer.defaults();
const auth = require("json-server-auth");
const cors = require("cors");
const express = require("express");

const app = express();
server.db = router.db;
server.use(auth);
app.use(cors({ origin: ["http://localhost:5173"] }));
const corsOpts = {
  origin: "*",

  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
