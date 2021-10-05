import express from 'express';

const requestValidator = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const errMsg: string[] = [];
  if (req.query.filename == undefined) errMsg.push('Missing filename');
  if (req.query.width == undefined) errMsg.push('Missing image width');
  if (req.query.height == undefined) errMsg.push('Missing image height');
  if (errMsg.length == 0) {
    next();
  } else {
    res.status(400).send(errMsg.join('; '));
  }
};

export default requestValidator;