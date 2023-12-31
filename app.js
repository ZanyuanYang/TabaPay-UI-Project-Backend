import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import cors from 'cors';

import {categoryRouter} from './routes/categoryRoutes.js';
import {postRouter} from './routes/postRoutes.js';
import {menuRouter} from './routes/menuRoutes.js';

import NotFoundError from './errors/not-found-error.js';
import errorHandler from './middlewares/error-handler.js';

const app = express();
app.use(bodyParser.json({ limit: '25mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', categoryRouter);
app.use('/api', postRouter);
app.use('/api', menuRouter);

// when no page is found
app.get('/api/*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export default app;
