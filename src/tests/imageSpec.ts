import ImageResize from '../operations/imageResize';
import Jimp from 'jimp';
import path from 'path';
import fs from 'fs';

describe('Test image resize function', () => {
  const testWidth = 200;
  const testHeight = 200;
  const testFilename = 'fjord';
  const imgPath = path.join(
    './assets',
    'thumb',
    `${testFilename}_${testWidth}_${testHeight}.jpeg`
  );

  beforeAll(async () => {
    // delete an img that can be used for testing
    if (fs.existsSync(imgPath)) {
      fs.unlinkSync(imgPath);
    }
  });

  it('tests image resize', async () => {
    const response = await ImageResize(testWidth, testHeight, testFilename);
    expect(response.success).toBeTrue();
    const resultImg = await Jimp.read(
      path.join('./assets', 'thumb', response.result)
    );
    expect(resultImg.getWidth()).toEqual(testWidth);
    expect(resultImg.getHeight()).toEqual(testHeight);
  });
});