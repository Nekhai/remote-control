import { createWebSocketStream, WebSocketServer } from "ws";
import { controller } from "./controller";

export const wsServer = () => {
  const wss = new WebSocketServer({ port: 8080 });

  wss.on("connection", (socket) => {
    console.log("client connected to ws server");

    const duplex = createWebSocketStream(socket, { decodeStrings: false });

    duplex.on("data", async (chunk) => {
      const command = await controller(chunk.toString());

      duplex.write(command);
    });

    wss.close();
  });

  wss.on("close", () => {
    console.log("client disconnected from ws server");
  });
};
