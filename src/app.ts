import * as dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import helmet from 'helmet';
import logger from 'morgan';

import indexRouter from './routes/index';
dotenv.config();

const app = express();

app.use(helmet());
app.disable('x-powered-by');

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);

/* catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
});
*/
export default app;
