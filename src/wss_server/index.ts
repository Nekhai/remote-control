import { createWebSocketStream, WebSocketServer } from "ws";
import { controller } from "./controller";
import "dotenv/config";

export const wsServer = () => {
  const WSS_PORT = process.env.WSS_PORT || 8080;

  const wss = new WebSocketServer({ port: +WSS_PORT });

  wss.on("connection", (socket) => {
    console.log("client connected to ws server");

    const duplex = createWebSocketStream(socket, { decodeStrings: false });

    duplex.on("data", async (chunk) => {
      console.log(`${chunk}\0`);

      const command = await controller(chunk.toString());

      duplex.write(command);
    });

    wss.close();
  });

  process.on("SIGINT", () => {
    wss.close();
    process.exit(0);
  });

  wss.on("close", () => {
    console.log("client disconnected from ws server");
  });
};
