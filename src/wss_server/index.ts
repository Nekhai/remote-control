import { WebSocketServer } from "ws";
import { controller } from "./controller";

export const wssServer = () => {
  const wss = new WebSocketServer({ port: 8080 });

  wss.on("connection", (connection) => {
    connection.on("message", (message) => {
      const command = controller(message.toString());
      console.log(`I recive message ${message}`);

      connection.send(command);
    });
    connection.send("Hello client");
  });

  wss.on("close", () => {
    console.log("connection closed");
  });
};
