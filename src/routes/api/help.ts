import express from 'express';
import path from 'path';
import fs from 'fs';

const help = express.Router();

help.get('/', (req: express.Request, res: express.Response) => {
  const helpText: string[] = [
    'API usage: /api/images?filename={image_name}&width={required_width}&height={required_height}</br>',
    'Images available to resize:'
  ];
  const directoryPath = path.join('./assets', 'full');
  fs.readdir(directoryPath, function (err, files) {
    files.forEach(function (file) {
      const fname = file.split('.').slice(0, -1).join('.');
      helpText.push(fname);
    });
    res.send(helpText.join('</br>'));
  });
});

export default help;