import express from 'express';
import './db'; // import db
import noteRouter from './routers/note';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(cors()); // enable cors
app.use(helmet());
app.use(morgan('dev'));

app.listen(8000, () => {
  console.log('Server running on port 8000');
});

app.use('/note', noteRouter);
