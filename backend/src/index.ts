import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute';
import errorHandle from './middlewares/errorHandle';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.API_PORT;

app.use('/users', userRoute);
app.use(errorHandle);

app.listen(port, () => console.log(`App is runing on port ${port}`));
