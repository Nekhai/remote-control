import robot from "robotjs";

export const moveLeft = (firstArg: number, mouseX: number, mouseY: number) => {
  robot.moveMouse(mouseX - firstArg, mouseY);
};

export const moveUp = (firstArg: number, mouseX: number, mouseY: number) => {
  robot.moveMouse(mouseX, mouseY - firstArg);
};

export const moveDown = (firstArg: number, mouseX: number, mouseY: number) => {
  robot.moveMouse(mouseX, mouseY + firstArg);
};

export const moveRight = (firstArg: number, mouseX: number, mouseY: number) => {
  robot.moveMouse(mouseX + firstArg, mouseY);
};
