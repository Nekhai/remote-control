import robot from "robotjs";

export const circlePaint = (radius: number, posX: number, posY: number) => {
  robot.mouseToggle("down");

  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
    const x = posX - radius + radius * Math.cos(i);
    const y = posY + radius * Math.sin(i);
    robot.dragMouse(x, y);
  }

  robot.mouseToggle("up");
};

export const rectunglePaint = (
  width: number,
  length: number,
  posX: number,
  posY: number
) => {
  robot.mouseToggle("down");

  robot.moveMouseSmooth(posX, posY - length);
  robot.moveMouseSmooth(posX + width, posY - length);
  robot.moveMouseSmooth(posX + width, posY);
  robot.moveMouseSmooth(posX, posY);

  robot.mouseToggle("up");
};

export const squarePaint = (width: number, posX: number, posY: number) => {
  robot.mouseToggle("down");

  robot.moveMouseSmooth(posX, posY - width);
  robot.moveMouseSmooth(posX + width, posY - width);
  robot.moveMouseSmooth(posX + width, posY);
  robot.moveMouseSmooth(posX, posY);

  robot.mouseToggle("up");
};
