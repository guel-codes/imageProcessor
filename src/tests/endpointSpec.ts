/* eslint-disable prettier/prettier */
import supertest from 'supertest';
import app from '../index';
import path from 'path';
import fs from 'fs';

const request = supertest(app);
describe('Test endpoint responses', () => {
  const testWidth = 300;
  const testHeight = 300;
  const testFilename = 'santamonica';
  const imageName = `${testFilename}_${testWidth}_${testHeight}.jpeg`;
  const imagePath = path.join('./assets', 'thumbnails', imageName);

  beforeAll(async () => {
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
  });

  it('tests invalid request to api', async () => {
    const response = await request.get('/api/images?filename=fjord&width=100');
    expect(response.status).toBe(400);
  });

  it('tests valid request to api', async () => {
    expect(fs.existsSync(imagePath)).toBeFalse();
    const response = await request.get(
      `/api/images?filename=${testFilename}&width=${testWidth}&height=${testHeight}`
    );
    expect(response.status).toBe(200);
    expect(fs.existsSync(imagePath)).toBeTrue();
  });
});