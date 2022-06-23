import { WebSocketServer } from "ws";

export const wssServer = () => {
  const wss = new WebSocketServer({ port: 8080 });

  wss.on("connection", (connection) => {
    connection.on("message", (massage) => {
      console.log(`I recive massage ${massage}`);
    });
    connection.send("Hello client");
  });

  wss.on("close", () => {
    console.log("connection closed");
  });
};
