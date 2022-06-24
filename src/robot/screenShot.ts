import robot from "robotjs";
import Jimp from "jimp";

export const makeScreen = async (
  mouseX: number,
  mouseY: number,
  width: number,
  height: number
) => {
  const buffer = await robot.screen.capture(mouseX, mouseY, width, height)
    .image;

  const result = await convertBuffer(buffer);

  return result;
};

const convertBuffer = async (screenBuffer: Buffer) => {
  const img = new Jimp({ data: screenBuffer, width: 200, height: 200 });
  const imgBase64 = await img.getBase64Async(Jimp.MIME_PNG);

  return `prnt_scrn ${imgBase64.split(",")[1]}`;
};
