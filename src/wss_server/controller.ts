import robot from "robotjs";

import { moveDown, moveLeft, moveRight, moveUp } from "../robot/moveMouse";
import { rectunglePaint, circlePaint, squarePaint } from "../robot/paintFigure";
import { makeScreen } from "../robot/screenShot";

export const controller = (message: string) => {
  const [command, firstNum, secondNum] = message.split(" ");
  const firstArg = +firstNum;
  const secondArg = +secondNum;

  const { x: mouseX, y: mouseY } = robot.getMousePos();

  switch (command) {
    case "mouse_up":
      moveUp(firstArg, mouseX, mouseY);
      break;
    case "mouse_down":
      moveDown(firstArg, mouseX, mouseY);
      break;
    case "mouse_left":
      moveLeft(firstArg, mouseX, mouseY);
      break;
    case "mouse_right":
      moveRight(firstArg, mouseX, mouseY);
      break;
    case "mouse_position":
      return `${command} ${mouseX}px,${mouseY}px`;
    case "draw_circle":
      circlePaint(firstArg, mouseX, mouseY);
      break;
    case "draw_square":
      squarePaint(firstArg, mouseX, mouseY);
      break;
    case "draw_rectangle":
      rectunglePaint(firstArg, secondArg, mouseX, mouseY);
      break;
    case "prnt_scrn":
      // const result = await makeScreen(mouseX, mouseY, 200, 200);
      // return result;
      return makeScreen(mouseX, mouseY, 200, 200);
  }

  return command;
};
