import Jimp from "jimp";
import robot from "robotjs";

import { httpServer } from "./http_server/index";
import { wssServer } from "./wss_server";

wssServer();

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
