import express from 'express';
import images from './routes/api/images';
import requestValidator from './middlewares/requestValidator';
import help from './routes/api/help';

const app = express();
const port = 3000;

app.use('/api/images', requestValidator, images);
app.use('/api*', help);

app.listen(port, () =>{
    console.log(`Server is listening on port ${port}/api`)
});

export default app;