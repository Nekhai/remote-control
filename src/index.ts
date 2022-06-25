import { httpServer } from "./http_server/index";
import { wsServer } from "./wss_server";

wsServer();

const HTTP_PORT = process.env.PORT || 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
