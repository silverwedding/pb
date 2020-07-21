import express from 'express';
import routes from './routes/';
import './db/connect';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(cors());
routes(app);

const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Running listening on port ' + port + '...');
});
