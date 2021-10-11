import Jimp from 'jimp';
import path from 'path';
import fs from 'fs';
import { error } from 'console';

const ImageResize = async (
  width: number,
  height: number,
  filename: string
): Promise<{ success: boolean; result: string }> => {
  try {
    const image = await Jimp.read(
      path.join('./assets', 'full', filename + '.jpg')
    );
    const newFileName = `${filename}_${width}_${height}.${image.getExtension()}`;
    if (!fs.existsSync(path.join('./assets', 'thumb', newFileName))) {
      console.log('creating resized image');
      await image
        .resize(width, height, Jimp.RESIZE_BEZIER)
        .writeAsync(path.join('./assets', 'thumb', newFileName));
    }
    return { success: true, result: newFileName };
  } catch (err) {
    return { success: false, result: "error" };
  }
};

export default ImageResize;