import { server } from "./server.js";
const port = 8000;
server.listen(port, () => {
  console.log("Server started at port: ", port);
});
