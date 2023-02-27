const app = require("./app");
const http = require("http");

const PORT = 3003;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT);
});