const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("server.json");
const middlewares = jsonServer.defaults();
const auth = require("json-server-auth");
const cors = require("cors");

server.db = router.db;
server.use(auth);
server.use(cors());
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
