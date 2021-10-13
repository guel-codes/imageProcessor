import ImageResize from '../operations/imageResize';
import Jimp from 'jimp';
import path from 'path';
import fs from 'fs';

describe('Test image resize function', () => {
  const testWidth = 200;
  const testHeight = 200;
  const testFilename = 'fjord';
  const imagePath = path.join(
    './assets',
    'thumbnails',
    `${testFilename}_${testWidth}_${testHeight}.jpg`
  );

  beforeAll(async () => {
    // delete an img that can be used for testing
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
  });

  it('tests image resize', async () => {
    const response = await ImageResize(testWidth, testHeight, testFilename);
    expect(response.success).toBeTrue();
    const resultImg = await Jimp.read(
      path.join('./assets', 'thumbnails', response.result)
    );
    expect(resultImg.getWidth()).toEqual(testWidth);
    expect(resultImg.getHeight()).toEqual(testHeight);
  });
});