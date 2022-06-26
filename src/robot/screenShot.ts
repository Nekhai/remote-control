import robot from "robotjs";
import Jimp from "jimp";

export const makeScreen = (
  mouseX: number,
  mouseY: number,
  width: number,
  height: number
) => {
  const buffer = robot.screen.capture(
    mouseX - 100,
    mouseY - 100,
    width,
    height
  );

  var bitmap = buffer.image;
  var data = [];

  for (let i = 0; i < bitmap.length; i += 4) {
    data.push(bitmap[i + 2], bitmap[i + 1], bitmap[i], bitmap[i + 3]);
  }

  return convertBuffer(data, 200, 200);
};

const convertBuffer = async (
  screenBuffer: number[],
  width: number,
  height: number
) => {
  const img = new Jimp({ data: new Uint8Array(screenBuffer), width, height });

  const imgBase64 = await img.getBase64Async(Jimp.MIME_PNG);

  return `prnt_scrn ${imgBase64.split(",")[1]}`;
};
